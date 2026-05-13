const bioLines = [
  "A small vault of projects, prototypes, tools, and experiments.",
  "A collection of things I've built, tools I use, and ideas I find interesting.",
  "A place for creative code, technical experiments, and unfinished thoughts."
];

const typedBio = document.getElementById("typed-bio");

let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function typeBio() {
  const currentLine = bioLines[lineIndex];

  if (!deleting) {
    typedBio.textContent = currentLine.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentLine.length) {
      deleting = true;
      setTimeout(typeBio, 7000);
      return;
    }
  } else {
    typedBio.textContent = currentLine.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % bioLines.length;
    }
  }

  setTimeout(typeBio, deleting ? 28 : 42);
}

typeBio();