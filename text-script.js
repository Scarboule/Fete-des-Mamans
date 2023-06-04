var text = document.getElementById("text");
var paragraphs = text.getElementsByTagName("p");
var previousBtn = document.getElementById("previousBtn");
var nextBtn = document.getElementById("nextBtn");
var currentParagraph = 0;

// Afficher le premier paragraphe
paragraphs[currentParagraph].style.display = "block";

previousBtn.addEventListener("click", function() {
  // Cacher le paragraphe actuel
  paragraphs[currentParagraph].style.display = "none";

  // Passer au paragraphe précédent
  currentParagraph--;

  // Vérifier les limites
  if (currentParagraph < 0) {
    currentParagraph = 0;
  }

  // Afficher le paragraphe précédent
  paragraphs[currentParagraph].style.display = "block";
});

nextBtn.addEventListener("click", function() {
  // Cacher le paragraphe actuel
  paragraphs[currentParagraph].style.display = "none";

  // Passer au paragraphe suivant
  currentParagraph++;

  // Vérifier les limites
  if (currentParagraph >= paragraphs.length) {
    currentParagraph = paragraphs.length - 1;
  }

  // Afficher le paragraphe suivant
  paragraphs[currentParagraph].style.display = "block";
});