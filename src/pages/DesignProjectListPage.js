import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProjectsService } from "../services/project.services";
import DesignProjectCard from "../components/DesignProjectCard";

function DesignProjectListPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="ProjectListPage">
      <Link to={"/coding-projects"}>
        <button>Proyectos de programación</button>
      </Link>
      {loading && <div>Loading...</div>}
      {!loading &&
        projects?.map((project) => (
          <DesignProjectCard key={project._id} {...project} />
        ))}
    </div>
  );
}

export default DesignProjectListPage;
