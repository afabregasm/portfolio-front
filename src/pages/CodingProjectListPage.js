import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProjectsService } from "../services/project.services";
import CodingProjectCard from "../components/CodingProjectCard";

function CodingProjectListPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
      {loading && <div>Loading...</div>}
      {!loading &&
        projects?.map((project) => (
          <CodingProjectCard key={project._id} {...project} />
        ))}
    </div>
  );
}

export default CodingProjectListPage;