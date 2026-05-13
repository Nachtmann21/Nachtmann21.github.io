/**
 * Creates a project card element.
 *
 * @param {Object} item - Card data.
 * @returns {HTMLElement}
 */
function createCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <div class="card-image">
      <img src="${item.image}" alt="${item.title}">
    </div>

    <div class="card-content">
      <h3>${item.title}</h3>
      <p class="desc">${item.desc}</p>

      <div class="tags">
        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    if (item.link && item.link !== "#") {
      window.open(item.link, "_blank");
    }
  });

  return card;
}


/**
 * Renders a section of cards into the specified grid container.
 *
 * @param {string} sectionId - The ID of the target grid container.
 * @param {Object[]} items - Array of card data objects to render.s
 */
function renderSection(sectionId, items) {
  const grid = document.getElementById(sectionId);

  if (!grid || !items) return;

  items.forEach(item => {
    grid.appendChild(createCard(item));
  });
}