import { useState, useEffect } from "react";
import { getAllOrdersService } from "../services/order.services";
import OrderCard from "../components/OrderCard";
import AddOrder from "../components/AddOrder";

function AllOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllOrders = async () => {
    try {
      const response = await getAllOrdersService();
      setOrders(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);
  // TIENE QUE SER UN PROBLEMA DE CÓMO MANDO LA INFO DESDE EL BACK (METALIFY)
  return (
    <div className="OrderListPage">
      <AddOrder />
      {loading && <div>Loading...</div>}
      {!loading &&
        orders?.map((order) => <OrderCard key={order._id} {...order} />)}
    </div>
  );
}

export default AllOrdersPage;
