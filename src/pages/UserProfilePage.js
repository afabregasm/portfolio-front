import { useState, useEffect } from "react";
import { getUserOrdersService } from "../services/order.services";
import OrderCard from "../components/OrderCard";
import AddOrder from "../components/AddOrder";

function UserProfilePage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="OrderListPage">
      <AddOrder refreshOrders={getUserOrders} />
      {loading && <div>Loading...</div>}
      {!loading &&
        orders?.map((order) => <OrderCard key={order._id} {...order} />)}
    </div>
  );
}

export default UserProfilePage;
