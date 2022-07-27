import service from "./service";

const URL = "/about";

const getResumeService = () => {
  return service.get(`${URL}/`);
};

const newResumeService = () => {
  return service.post(`${URL}/`);
};

const editResumeService = (id) => {
  return service.put(`${URL}/${id}`);
};

const deleteResumeService = (id) => {
  return service.delete(`${URL}/${id}`);
};

export {
  getResumeService,
  newResumeService,
  editResumeService,
  deleteResumeService,
};
