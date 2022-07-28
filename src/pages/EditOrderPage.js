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
      setModComment(response.data.modComment);
      setStatus(response.data.status);
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrder();
    // eslint-disable-next-line
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    editOrder();
  };

  return (
    <>
      <div className="EditOrderPage">
        <h3>Editar encargo</h3>

        <form onSubmit={handleFormSubmit}>
          <label>Añadir comentario:</label>
          <input
            type="text"
            name="modComment"
            value={modComment}
            onChange={(e) => setModComment(e.target.value)}
          />

          <label>Estado:</label>
          <input
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />

          <button type="submit">Actualizar encargo</button>
        </form>
      </div>
      <div className="OrderCard">
        <p>Título: {order.title}</p>
        <p>Descripción: {order.description}</p>
        <p>Actualización: {order.modComment}</p>
        <p>Estado: {order.status}</p>
      </div>
    </>
  );
}

export default EditOrderPage;
