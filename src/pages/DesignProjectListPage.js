import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import { getAllProjectsService } from "../services/project.services";
import DesignProjectCard from "../components/DesignProjectCard";
import AddDesignProject from "../components/AddDesignProject";

function DesignProjectListPage() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const getAllProjects = async () => {
    try {
      const response = await getAllProjectsService("design");
      setProjects(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="DesignProjectList">
      <Link to={"/coding-projects"}>
        <button className="no-form-button">Proyectos de programación</button>
      </Link>
      {isLoggedIn ? (
        user.isAdmin ? (
          <div className="toggle">
            <button className="toggle-button" onClick={() => setShow(!show)}>
              {show ? "Cerrar formulario" : "Nuevo proyecto"}
            </button>
            <AddDesignProject show={show} refreshProjects={getAllProjects} />
          </div>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      {loading && <div>Loading...</div>}
      {!loading &&
        projects?.map((project) => (
          <DesignProjectCard key={project._id} {...project} />
        ))}
    </div>
  );
}

export default DesignProjectListPage;
