function ProjectCard({ project }) {
  return (
    <div className="p-4 shadow rounded-lg bg-white">
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="text-gray-600">{project.location}</p>
    </div>
  );
}
export default ProjectCard;
