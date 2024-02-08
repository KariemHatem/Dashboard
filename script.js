document.addEventListener("DOMContentLoaded", function () {
  const toggleDirectionButton = document.getElementById(
    "toggleDirectionButton"
  );
  const stylesheet = document.getElementById("stylesheet");

  toggleDirectionButton.addEventListener("click", function () {
    if (stylesheet.href.endsWith("Css/Dash.css")) {
      stylesheet.href = "Css/Dash-rtl.css";
    } else {
      stylesheet.href = "Css/Dash.css";
    }
  });
});
