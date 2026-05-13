const sections = {
  projects: [
    {
      title: "Project Name",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      desc: "Short description of the project goes here.",
      image: "https://picsum.photos/600/400?random=1",
      link: "#"
    },
    {
      title: "Project Name",
      tags: ["Unity", "C#"],
      desc: "Short description of the project goes here.",
      image: "https://picsum.photos/600/400?random=2",
      link: "#"
    },
    {
      title: "Project Name",
      tags: ["React", "Node.js"],
      desc: "Short description of the project goes here.",
      image: "https://picsum.photos/600/400?random=3",
      link: "#"
    },
    {
      title: "Project Name",
      tags: ["Python", "Flask"],
      desc: "Short description of the project goes here.",
      image: "https://picsum.photos/600/400?random=4",
      link: "#"
    }
  ],

  snippets: [
    {
      title: "Snippet Name",
      tags: ["JavaScript"],
      desc: "Small reusable UI or animation snippet.",
      image: "https://picsum.photos/600/400?random=5",
      link: "#"
    },
    {
      title: "Snippet Name",
      tags: ["CSS"],
      desc: "Interactive hover or layout effect.",
      image: "https://picsum.photos/600/400?random=6",
      link: "#"
    },
    {
      title: "Snippet Name",
      tags: ["Canvas"],
      desc: "Creative coding experiment.",
      image: "https://picsum.photos/600/400?random=7",
      link: "#"
    },
    {
      title: "Snippet Name",
      tags: ["UI"],
      desc: "Interesting visual interface concept.",
      image: "https://picsum.photos/600/400?random=8",
      link: "#"
    }
  ],

  research: [
    {
      title: "Research Topic",
      tags: ["AI", "Systems"],
      desc: "Notes and experiments around interesting topics.",
      image: "https://picsum.photos/600/400?random=9",
      link: "#"
    },
    {
      title: "Research Topic",
      tags: ["Graphics"],
      desc: "Rendering and visual experiments.",
      image: "https://picsum.photos/600/400?random=10",
      link: "#"
    },
    {
      title: "Research Topic",
      tags: ["Backend"],
      desc: "Architecture and API exploration.",
      image: "https://picsum.photos/600/400?random=11",
      link: "#"
    },
    {
      title: "Research Topic",
      tags: ["Game Dev"],
      desc: "Gameplay systems and mechanics research.",
      image: "https://picsum.photos/600/400?random=12",
      link: "#"
    }
  ]
};

function renderSection(sectionId, items) {
  const grid = document.getElementById(sectionId);

  items.forEach(item => {
    const card = document.createElement('div');

    card.className = 'card';

    card.innerHTML = `
      <div class="card-image">
        <img src="${item.image}" alt="${item.title}">
      </div>

      <div class="card-content">
        <h3>${item.title}</h3>

        <p class="desc">${item.desc}</p>

        <div class="tags">
          ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `;

    card.onclick = () => window.open(item.link, '_blank');

    grid.appendChild(card);
  });
}

renderSection('projects-grid', sections.projects);
renderSection('snippets-grid', sections.snippets);
renderSection('research-grid', sections.research);