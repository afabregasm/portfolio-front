import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProjectDetailsService,
  editProjectService,
  deleteProjectService,
} from "../services/project.services";

function EditDesignProject() {
  const [project, setProject] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const projectId = id;

  const getProject = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await getProjectDetailsService(projectId, "design");
      setProject(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setImages(response.data.images);
    } catch (err) {
      console.log(err);
    }
  };

  const editProject = async () => {
    localStorage.getItem("authToken");
    const editedProject = {
      title,
      description,
      images,
    };
    try {
      const response = await editProjectService(
        projectId,
        editedProject,
        "design"
      );
      setProject(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProject();
    // eslint-disable-next-line
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    editProject();
  };

  const deleteProject = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await deleteProjectService(projectId, "design");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="EditProjectPage">
      <form onSubmit={handleFormSubmit}>
        <label>Título:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Descripción:</label>
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Imágenes:</label>
        <input
          name="images"
          value={images}
          onChange={(e) => setImages(e.target.value)}
        />

        <button type="submit">Actualizar proyecto</button>
      </form>

      <button onClick={deleteProject}>Borrar proyecto</button>
    </div>
  );
}

export default EditDesignProject;
