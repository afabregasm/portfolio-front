import { useState } from "react";
import { addNewProjectService } from "../services/project.services.js";

function AddDesignProject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = { title, description, images };

    try {
      await addNewProjectService(newProject, "design");
      setTitle("");
      setDescription("");
      setImages([]);
      props.refreshProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {props.show ? (
        <div className="AddProject">
          <h3>Nuevo proyecto de diseño</h3>

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

            <label>Imágenes:</label>
            <input
              type="text"
              name="images"
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />

            <button type="submit">Añadir proyecto</button>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default AddDesignProject;
