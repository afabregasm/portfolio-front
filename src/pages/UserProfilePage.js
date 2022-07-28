import { useState, useEffect } from "react";
import { getUserOrdersService } from "../services/order.services";
import OrderCard from "../components/OrderCard";
import AddOrder from "../components/AddOrder";

function UserProfilePage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const getUserOrders = async () => {
    try {
      const response = await getUserOrdersService();
      setOrders(response.data.orders);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <>
      <div className="toggle">
        <button onClick={() => setShow(!show)}>
          {show ? "Cerrar formulario" : "Nuevo encargo"}
        </button>
        <AddOrder show={show} refreshOrders={getUserOrders} />
      </div>
      <div className="OrderListPage">
        {loading && <div>Loading...</div>}
        {!loading &&
          orders?.map((order) => <OrderCard key={order._id} {...order} />)}
      </div>
    </>
  );
}

export default UserProfilePage;
