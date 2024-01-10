document.addEventListener("DOMContentLoaded", function () {
  // Mit loading container element
  const loadingContainer = document.getElementById("loading-container");

  // Funktion der opdaterer de tre prikker
  function updateLoadingText() {
    const currentText = loadingContainer.innerText;
    const dotsCount = (currentText.match(/\./g) || []).length;
    const newDotsCount = (dotsCount % 3) + 1;
    const newDots = ".".repeat(newDotsCount);
    loadingContainer.innerText = `Mit portfolio${newDots}`;
  }

  // Opdatering af loading hvert 500 millisekundt
  setInterval(updateLoadingText, 500);
});
