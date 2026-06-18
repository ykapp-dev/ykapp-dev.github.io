/* ------------------------------------------------------------
   Minimal JA/EN toggle.
   - Reads saved choice from localStorage, else browser language.
   - Sets <html data-lang> and <html lang>; CSS shows the right blocks.
   - Updates document.title from data-title-ja / data-title-en if present.
   ------------------------------------------------------------ */
(function () {
  var KEY = "support-lang";
  var root = document.documentElement;

  function pick() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === "ja" || saved === "en") return saved;
    var nav = (navigator.language || "ja").toLowerCase();
    return nav.indexOf("ja") === 0 ? "ja" : "en";
  }

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    var t = document.body && document.body.getAttribute("data-title-" + lang);
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
