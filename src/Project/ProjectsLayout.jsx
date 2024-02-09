import { useEffect, useState } from "react";
import ItemProject from "./ItemProject";

function ProjectsLayout() {
  const [projects, setProjects] = useState(null);
  useEffect(function () {
    const getData = async function () {
      try {
        const data = await fetch("http://localhost:3001/projects");
        if (!data.ok) throw new Error("Something went wrong with projects!");
        const res = await data.json();
        setProjects(res);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);
  return (
    <section className="w-[100%] mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-5">
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
