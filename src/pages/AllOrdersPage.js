import { useState, useEffect } from "react";
import { getAllOrdersService } from "../services/order.services";
import OrderCard from "../components/OrderCard";

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

  return (
    <div className="OrderListPage">
      {loading && <div>Loading...</div>}
      {!loading &&
        orders?.map((order) => <OrderCard key={order._id} {...order} />)}
    </div>
  );
}

export default AllOrdersPage;
