import { useState } from "react";
import { addNewOrderService } from "../services/order.services.js";

function AddOrder(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOrder = { title, description };

    try {
      await addNewOrderService(newOrder);
      setTitle("");
      setDescription("");
      props.refreshOrders();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AddOrder">
      <h3>Nuevo encargo</h3>

      <form onSubmit={handleSubmit}>
        <label>Asunto:</label>
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

        <button type="submit">Hacer encargo</button>
      </form>
    </div>
  );
}

export default AddOrder;
