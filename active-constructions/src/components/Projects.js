import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  return (
    <section id="projects" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      ) : (
        <p>No projects available at the moment.</p>
      )}
    </section>
  );
}
export default Projects;
