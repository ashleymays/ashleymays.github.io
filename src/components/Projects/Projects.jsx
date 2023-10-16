import Project from './Project';
import projects from './Projects.data';

function Projects() {
    const projectItems = projects.map((project) => <Project key={project.title} {...project} />);
    return <>{projectItems}</>;
}

export default Projects;
