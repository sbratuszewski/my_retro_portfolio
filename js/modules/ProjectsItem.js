class ProjectsItem {
  constructor() {
    this.projects = [
      {
        title: "Grand Physios",
        description:
          "An informative website for a physiotherapy practice, built using React and Tailwind CSS and animated with Framer Motion.",
        link: "https://github.com/sbratuszewski/grand-physios",
      },
      {
        title: "Limelight Cinema",
        description:
          "A cinema web application developed using PHP, SQL and databases, featuring a custom CMS with an admin panel for managing content.",
        link: "https://github.com/sbratuszewski/limelight-cinema",
      },
      {
        title: "Portfolio Website",
        description:
          "A personal portfolio website showcasing my projects and skills, developed with modular JavaScript (OOP-based architecture) and styled with Tailwind CSS.",
        link: "https://github.com/sbratuszewski/my_retro_portfolio",
      },
      {
        title: "Grey Painters",
        description:
          "A web application for an industrial painting company, built with React and Tailwind CSS.",
        link: "https://github.com/sbratuszewski/gray_painters",
      },
    ];
  }

  init() {
    this.generateProjectItems();
  }

  generateProjectItems() {
    const container = document.querySelector(
      'section[data-pagename="projects"] .mt-4.bg-custom-dark'
    );

    if (!container) {
      console.error("Container for project items not found.");
      return;
    }

    this.projects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.className = "project-item mb-5";

      const title = document.createElement("h3");
      title.className = "text-uppercase mb-3 fs-6 link--anime-underline";

      const link = document.createElement("a");
      link.href = project.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = project.title;

      const description = document.createElement("p");
      description.textContent = project.description;

      title.appendChild(link);
      projectItem.appendChild(title);
      projectItem.appendChild(description);
      container.appendChild(projectItem);
    });
  }
}

export default ProjectsItem;
