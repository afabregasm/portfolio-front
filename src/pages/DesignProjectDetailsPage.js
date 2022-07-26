import { useState, useEffect } from "react";
import { getProjectDetailsService } from "../services/project.services";
import { Link, useParams } from "react-router-dom";

function DesignProjectDetailsPage(props) {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  const getProject = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await getProjectDetailsService(id, "design");
      setProject(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProject();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ProjectDetails">
      <Link to="/design-projects">
        <button>Volver</button>
      </Link>
      {project && (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          {project.images.map((image) => (
            <img key={image} src={image} alt={project.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DesignProjectDetailsPage;
