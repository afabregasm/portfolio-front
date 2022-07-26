import { useState, useEffect } from "react";
import { getProjectDetailsService } from "../services/project.services";

import { Link, useParams } from "react-router-dom";

function CodingProjectDetailsPage(props) {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  const getProject = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await getProjectDetailsService(id);
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
      <Link to="/coding-projects">
        <button>Volver</button>
      </Link>
      {project && (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <p>
            <a href={project.url}>Enlace al repositorio</a>
          </p>
          <img src={project.image} alt={project.title} />
        </div>
      )}
    </div>
  );
}

export default CodingProjectDetailsPage;
