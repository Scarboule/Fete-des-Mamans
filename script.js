const heartPath = document.getElementById("heart-path");
const icon = document.getElementById("icon-heart");
const heartLength = heartPath.getTotalLength();
const title = document.getElementById("titre");

var text = document.getElementById("text");
var paragraphs = text.getElementsByTagName("p");
var previousBtn = document.getElementById("previousBtn");
var nextBtn = document.getElementById("nextBtn");
var currentParagraph = 0;

const letters = title.textContent.split("");

// Remplacer le contenu du titre par des espaces pour créer l'effet de typage
title.textContent = letters.map(letter => (letter === " " ? " " : "_")).join("");

// Fonction pour afficher le titre lettre par lettre
function typeTitle(index) {
  if (index < letters.length) {
    // Remplacer le caractère sous-jacent par la lettre suivante
    const typedText = letters
      .map((letter, i) => (i <= index ? letter : "_"))
      .join("");

    title.textContent = typedText;

    // Appeler récursivement la fonction pour afficher la lettre suivante après un délai
    setTimeout(() => typeTitle(index + 1), 100);
  }
}

heartPath.style.strokeDasharray = heartLength;
heartPath.style.strokeDashoffset = heartLength;
//icon.setAttribute("width", 1000);
icon.addEventListener("click", () => {
  icon.setAttribute("width", 850);
  icon.style.cursor = "unset";
  heartPath.style.strokeWidth = 1;
  heartPath.style.fill = "none";
  setTimeout(() => {
    titre.style.display = "block";
    typeTitle(0);
    setTimeout(() => {

        nextBtn.style.display = "block";
        previousBtn.style.display = "block";
    
        // Code de l'animation après le délai de 5 secondes
        animateParagraphs();
        updateButtonVisibility();
    
        previousBtn.addEventListener("click", function() {
          // Cacher le paragraphe actuel
          paragraphs[currentParagraph].style.display = "none";
    
          // Passer au paragraphe précédent
          currentParagraph--;
    
          // Vérifier les limites
          if (currentParagraph < 0) {
            currentParagraph = 0;
          }
    
          // Afficher le paragraphe précédent avec une animation
          animateParagraphs();
          updateButtonVisibility();
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
    
          // Afficher le paragraphe suivant avec une animation
          animateParagraphs();
          updateButtonVisibility();
        });
    }, 2500);


  }, 3000);

});

// Ensure the animation starts from the beginning
heartPath.getBoundingClientRect();

heartPath.style.animationIterationCount = "infinite";

// Reset the animation when it completes
heartPath.addEventListener("animationiteration", () => {
  heartPath.style.strokeDashoffset = heartLength;
});

function animateParagraphs() {
  // Réinitialiser l'opacité de tous les paragraphes
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.opacity = 0;
  }

  // Afficher le paragraphe actuel avec une animation progressive
  paragraphs[currentParagraph].style.display = "block";
  paragraphs[currentParagraph].style.animation = "fade-in 1s ease-in-out forwards";
}

function updateButtonVisibility() {
  // Masquer le bouton "nextBtn" si on est au dernier paragraphe
  if (currentParagraph === paragraphs.length - 1) {
    nextBtn.style.opacity = "0";
  } else {
    nextBtn.style.opacity = "1";
  }

  // Masquer le bouton "previousBtn" si on est au premier paragraphe
  if (currentParagraph === 0) {
    previousBtn.style.opacity = "0";
  } else {
    previousBtn.style.opacity = "1";
  }
}
