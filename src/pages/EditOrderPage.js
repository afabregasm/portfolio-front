import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getOrderDetailsService,
  editOrderDetailsService,
} from "../services/order.services";

function EditOrderPage() {
  const [order, setOrder] = useState([]);
  const [modComment, setModComment] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const orderId = id;

  const getOrder = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await getOrderDetailsService(orderId);
      setOrder(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const editOrder = async () => {
    localStorage.getItem("authToken");
    const editedOrder = {
      modComment,
      status,
    };
    try {
      const response = await editOrderDetailsService(orderId, editedOrder);
      setOrder(response.data);
      setModComment("");
      setStatus("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    editOrder();
  };

  return (
    <div className="EditOrderPage">
      <h3>Editar encargo</h3>
      <p>{order.title}</p>
      <p>{order.description}</p>
      <p>{order.modComment}</p>
      <p>{order.status}</p>
      <form onSubmit={handleFormSubmit}>
        <label>Añadir comentario:</label>
        <input
          type="text"
          name="modComment"
          value={modComment}
          onChange={(e) => setModComment(e.target.value)}
        />

        <label>Estado:</label>
        <textarea
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <button type="submit">Update Order</button>
      </form>
    </div>
  );
}

export default EditOrderPage;
