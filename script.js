let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.querySelector(".topimg").addEventListener("click", function () {
  // Fonction pour générer une couleur aléatoire
  function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16); // Génère une couleur hexadécimale aléatoire
  }

  // Création d'un élément div pour chaque confetti
  const numConfettis = 100; // Nombre de confettis à créer
  for (let i = 0; i < numConfettis; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px"; // Position horizontale aléatoire
    confetti.style.animationDelay = Math.random() + "s"; // Décalage aléatoire de l'animation
    confetti.style.backgroundColor = randomColor(); // Couleur aléatoire
    document.body.appendChild(confetti);
  }

  // Suppression des confettis après 1 seconde
  setTimeout(function () {
    const confettis = document.querySelectorAll(".confetti");
    confettis.forEach(function (confetti) {
      confetti.remove();
    });
  }, 1000);
});
