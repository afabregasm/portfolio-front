import service from "./service";

const MODURL = "/all-orders";
const USERURL = "/profile";

const getAllOrdersService = () => {
  return service.get(`${MODURL}/`);
};

const getOrderDetailsService = (id) => {
  return service.get(`${MODURL}/${id}`);
};

const editOrderDetailsService = (id, editedOrder) => {
  return service.patch(`${MODURL}/${id}`, editedOrder);
};

const getUserOrdersService = () => {
  return service.get(`${USERURL}`);
};

const addNewOrderService = (newOrder) => {
  return service.post(`${USERURL}/`, newOrder);
};

const deleteOrderService = (id) => {
  return service.delete(`${USERURL}/${id}`);
};

export {
  getAllOrdersService,
  getOrderDetailsService,
  editOrderDetailsService,
  getUserOrdersService,
  addNewOrderService,
  deleteOrderService,
};
