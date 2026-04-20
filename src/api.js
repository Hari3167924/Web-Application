// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8080/api", // Spring Boot backend
// });

// export default api;

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // Spring Boot backend
});

// Example APIs
export const registerUser = (user) => API.post("/users/register", user);
export const loginUser = (user) => API.post("/users/login", user);

export const getProducts = () => API.get("/products");
export const addToCart = (item) => API.post("/cart/add", item);
export const getOrders = (userId) => API.get(`/orders/${userId}`);
