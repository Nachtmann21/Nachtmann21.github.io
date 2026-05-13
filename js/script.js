/**
 * Initializes all page components after DOM load.
 */
document.addEventListener("DOMContentLoaded", () => {
  renderSection("projects-grid", sections.projects);
  renderSection("snippets-grid", sections.snippets);
  renderSection("research-grid", sections.research);

  initTypewriter();
});