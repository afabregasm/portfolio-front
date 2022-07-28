import { useState, useEffect } from "react";
import { getProjectDetailsService } from "../services/project.services";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import EditCodingProject from "../components/EditCodingProject";

function CodingProjectDetailsPage() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [project, setProject] = useState(null);
  const { id } = useParams();

  const getProject = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await getProjectDetailsService(id, "coding");
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
      {isLoggedIn ? user.isAdmin ? <EditCodingProject /> : <></> : <></>}
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
