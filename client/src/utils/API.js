import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertProject = payload => api.post(`/project`, payload)
export const getAllProjects = () => api.get(`/projects`)
export const updateProjectById = (id, payload) => api.put(`/project/${id}`, payload)
export const deleteProjectById = id => api.delete(`/project/${id}`)
export const getProjectById = id => api.get(`/project/${id}`)

const apis = {
    insertProject,
    getAllProjects,
    updateProjectById,
    deleteProjectById,
    getProjectById,
}

export default apis


// import axios from "axios";

// export default {
//   // Gets all projects
//   getProject: () => {
//     return axios.get("/api/projects");
//   },
//   // Gets the book with the given id
//   getProject: (id) =>{
//     return axios.get("/api/projects/" + id);
//   },
//   // Deletes the book with the given id
//   deleteProject: (id) =>{
//     return axios.delete("/api/projects/" + id);
//   },
//   // Saves a book to the database
//   saveProject: (projectData) =>{
//     return axios.post("/api/projects", projectData);
//   }
// };