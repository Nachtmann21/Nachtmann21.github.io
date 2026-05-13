const projects = [
  {
    title: "Slay the Spire Clone",
    tags: ["Unity", "C#"],
    desc: "Card-based roguelike prototype with procedural encounters.",
    link: "https://github.com/yourusername/slay-the-spire-clone"
  },
  {
    title: "Profile Thrower",
    tags: ["Unity", "WebGL"],
    desc: "Physics-based profile launching game. Pure chaos.",
    link: "https://github.com/yourusername/profile-thrower"
  },
  {
    title: "Task Manager API",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    desc: "REST API for task management with auth and role-based access.",
    link: "https://github.com/yourusername/task-manager-api"
  },
  {
    title: "Magic Mouse Trailer",
    tags: ["JS", "Canvas"],
    desc: "Interactive mouse trail effect with particles.",
    link: "https://github.com/yourusername/magic-mouse"
  },
];

const grid = document.getElementById('project-grid');

projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => window.open(p.link, '_blank');
  
  card.innerHTML = `
    <h3>${p.title}</h3>
    <p class="desc">${p.desc}</p>
    <div>${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
  `;
  
  grid.appendChild(card);
});