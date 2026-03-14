/* manages light/dark mode */
(function() {
  document.documentElement.dataset.dark =
    window.localStorage.getItem("dark-mode") || "false";

  function onLoad() {
    var toggle = document.querySelector(".dark-toggle");
    if (toggle) toggle.checked = document.documentElement.dataset.dark === "true";
  }

  window.addEventListener("load", onLoad);

  window.onDarkToggleChange = function(event) {
    var value = event.target.checked;
    document.documentElement.dataset.dark = value;
    window.localStorage.setItem("dark-mode", value);
  };
})();
