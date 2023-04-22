import { useParams, useNavigate } from "react-router-dom";

import DefaultTemplate from "../components/templates/DefaultTemplate";

import Button from "../components/atoms/Button";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <DefaultTemplate>
      <Button label="Go Back" onClick={() => navigate(-1)} />
      My task {id}
    </DefaultTemplate>
  );
};

export default ProjectPage;