import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProjectDetailsService,
  editProjectService,
  deleteProjectService,
} from "../services/project.services";

function EditCodingProject(props) {
  // eslint-disable-next-line
  const [project, setProject] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const projectId = id;

  const getProject = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await getProjectDetailsService(projectId, "coding");
      setProject(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setUrl(response.data.url);
      setImage(response.data.image);
    } catch (err) {
      console.log(err);
    }
  };

  const editProject = async () => {
    localStorage.getItem("authToken");
    const editedProject = {
      title,
      description,
      url,
      image,
    };
    try {
      const response = await editProjectService(
        projectId,
        editedProject,
        "coding"
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
    props.refreshProject();
  };

  const deleteProject = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await deleteProjectService(projectId, "coding");
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

        <label>URL:</label>
        <input
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <label>Imagen:</label>
        <input
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Actualizar proyecto</button>
      </form>

      <button onClick={deleteProject}>Borrar proyecto</button>
    </div>
  );
}

export default EditCodingProject;
