/* ------------------------------------------------------------
   Minimal language toggle.
   - Reads saved choice from localStorage, else browser language.
   - Uses <html data-langs> when a page supports more than JA/EN.
   - Sets <html data-lang> and <html lang>; CSS shows the right blocks.
   - Updates document.title from data-title-* if present.
   ------------------------------------------------------------ */
(function () {
  var KEY = "support-lang";
  var root = document.documentElement;

  function langs() {
    var raw = root.getAttribute("data-langs") || "ja en";
    return raw.split(/\s+/).filter(Boolean);
  }

  function normalize(lang) {
    if (!lang) return null;
    var v = String(lang).toLowerCase();
    if (v.indexOf("zh") === 0) return "zh-Hans";
    if (v.indexOf("ko") === 0) return "ko";
    if (v.indexOf("ja") === 0) return "ja";
    if (v.indexOf("en") === 0) return "en";
    return null;
  }

  function supported(lang) {
    var list = langs();
    for (var i = 0; i < list.length; i++) {
      if (list[i] === lang) return true;
    }
    return false;
  }

  function pick() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    saved = normalize(saved);
    if (saved && supported(saved)) return saved;

    var navs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "ja"];
    for (var i = 0; i < navs.length; i++) {
      var lang = normalize(navs[i]);
      if (lang && supported(lang)) return lang;
    }
    return supported("ja") ? "ja" : langs()[0];
  }

  function apply(lang) {
    if (!supported(lang)) lang = pick();
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    var t = document.body && (
      document.body.getAttribute("data-title-" + lang) ||
      document.body.getAttribute("data-title-" + lang.toLowerCase())
    );
    if (t) document.title = t;
    var btns = document.querySelectorAll(".lang-toggle button[data-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", btns[i].getAttribute("data-lang") === lang ? "true" : "false");
    }
  }

  function set(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply(lang);
  }

  // Apply as early as possible to avoid a flash of both languages.
  apply(pick());

  document.addEventListener("DOMContentLoaded", function () {
    apply(root.getAttribute("data-lang") || pick());
    var btns = document.querySelectorAll(".lang-toggle button[data-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        set(this.getAttribute("data-lang"));
      });
    }
  });
})();
