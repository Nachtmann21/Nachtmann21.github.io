const bioLines = [
  "A small vault of projects, prototypes, tools, and experiments.",
  "A collection of things I've built, tools I use, and ideas I find interesting.",
  "A place for creative code, technical experiments, and unfinished thoughts."
];

/**
 * Starts the bio typewriter animation loop.
 */
function initTypewriter() {
  const typedBio = document.getElementById("typed-bio");

  if (!typedBio) return;

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  /**
   * Types out the next character in the bio text.
   */
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
}