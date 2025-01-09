const words = ["Hello.", 
  "Need a modern website? Let's build it!", 
  "How can I improve your user experience?", 
  "Looking for a sleek design? I can help!", 
  "let’s build something amazing!", 
  "Your ideas, my code—let's create magic!"];







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

