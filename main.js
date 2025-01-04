const words = ["Hello...", "My Name is Clinton Omohan...", "I'm a UI/UX Designer...", "and a", "Full-Stack Web Developer."];
const textElement = document.getElementById("text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    charIndex--;
    textElement.textContent = currentWord.substring(0, charIndex);
  } else {
    charIndex++;
    textElement.textContent = currentWord.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150); // Typing speed
}

typeEffect();

