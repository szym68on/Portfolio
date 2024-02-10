import ItemProject from "./ItemProject";

const projects = [
  {
    description: "SystemLMS- Join to us",
    code_url: "https://github.com/amrusb/lms-pz",
    img_path: "/images/systemLms-app.png",
    demo_url: "#",
  },
  {
    description: "BudgetApp - Manage your  budget",
    code_url: "https://github.com/szym68on/Budget-App",
    img_path: "/images/budget-app.png",
    demo_url: "https://budgetdemoapp.netlify.app/",
  },
  {
    description: "QuizzApp - Take a quiz on various fields",
    code_url: "https://github.com/szym68on/Quiz-App",
    img_path: "/images/quiz-app.png",
    demo_url: "https://quizzzappdemo.netlify.app/",
  },
  {
    description: "Portfolio - Get to know me",
    code_url: "https://github.com/szym68on/Portfolio",
    img_path: "/images/portfolio.png",
    demo_url: "#",
  },
  {
    description: "MovieApp - Search your favorite movie",
    code_url: "https://github.com/szym68on/Movie-app",
    img_path: "/images/movie-app.png",
    demo_url: "https://movieappdemoo.netlify.app/",
  },
];

function ProjectsLayout() {
  return (
    <section className="w-[100%] mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-5 animate-fade-in">
      {projects
        ? projects.map((project, index) => (
            <ItemProject
              key={index}
              description={project.description}
              codeUrl={project.code_url}
              imgPath={project.img_path}
              demoUrl={project.demo_url}
            />
          ))
        : "Brak Danych"}
    </section>
  );
}

export default ProjectsLayout;
