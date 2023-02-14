// import React from "react";
// not required as it's already a jsx file

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

// Data
import { allProjects } from "../data";

function HomePage() {
  return (
    <div id="project-list">
      {allProjects.map((project, key) => {
        return <ProjectCard key={key} projectData={project} />;
      })}
    </div>
  );
}

export default HomePage;
// you then need to import without { }
// without default you import using { }