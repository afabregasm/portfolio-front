import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import { getAllProjectsService } from "../services/project.services";
import CodingProjectCard from "../components/CodingProjectCard";
import AddCodingProject from "../components/AddCodingProject";

function CodingProjectListPage() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const getAllProjects = async () => {
    try {
      const response = await getAllProjectsService("coding");
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
    <div className="ProjectListPage">
      <Link to={"/design-projects"}>
        <button>Proyectos de diseño</button>
      </Link>
      {isLoggedIn ? (
        user.isAdmin ? (
          <div className="toggle">
            <button onClick={() => setShow(!show)}>
              {show ? "Cerrar formulario" : "Nuevo proyecto"}
            </button>
            <AddCodingProject show={show} refreshProjects={getAllProjects} />
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
          <CodingProjectCard key={project._id} {...project} />
        ))}
    </div>
  );
}

export default CodingProjectListPage;
