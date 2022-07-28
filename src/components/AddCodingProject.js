import { useState } from "react";
import { addNewProjectService } from "../services/project.services.js";

function AddCodingProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = { title, description, url, image };

    try {
      await addNewProjectService(newProject, "coding");
      setTitle("");
      setDescription("");
      setUrl("");
      setImage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AddProject">
      <h3>Nuevo proyecto de programación</h3>

      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Descripción:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>URL:</label>
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <label>Imagen:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Añadir proyecto</button>
      </form>
    </div>
  );
}

export default AddCodingProject;
