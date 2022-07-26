import service from "./service";

const CODURL = "/coding-projects";
const DESURL = "/design-projects";

const getAllProjectsService = (type = "coding") => {
  if (type === "coding") return service.get(`${CODURL}/`);
  else if (type === "design") return service.get(`${DESURL}/`);
  else throw new Error("There was an error retrieving the projects.");
};

const getProjectDetailsService = (id, type = "coding") => {
  if (type === "coding") return service.get(`${CODURL}/${id}`);
  else if (type === "design") return service.get(`${DESURL}/${id}`);
  else throw new Error("There was an error retrieving the project.");
};

const addNewProjectService = (newProject, type = "coding") => {
  if (type === "coding") return service.post(`${CODURL}/`, newProject);
  else if (type === "design") return service.post(`${DESURL}/`, newProject);
  else throw new Error("There was an error adding the project.");
};

const editProjectService = (id, editedProject, type = "coding") => {
  if (type === "coding") return service.put(`${CODURL}/${id}`, editedProject);
  else if (type === "design")
    return service.put(`${DESURL}/${id}`, editedProject);
  else throw new Error("There was an error editing the project.");
};

const deleteProjectService = (id, type = "coding") => {
  if (type === "coding") return service.delete(`${CODURL}/${id}`);
  else if (type === "design") return service.delete(`${DESURL}/${id}`);
  else throw new Error("There was an error deleting the project.");
};

export {
  getAllProjectsService,
  getProjectDetailsService,
  addNewProjectService,
  editProjectService,
  deleteProjectService,
};
