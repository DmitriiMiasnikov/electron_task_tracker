import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsList from "../components/molecules/ProjectsList";

const ProjectsPage = () => {
  return (
    <DefaultTemplate>
      My Projects
      <ProjectsList />
    </DefaultTemplate>
  );
};

export default ProjectsPage;
