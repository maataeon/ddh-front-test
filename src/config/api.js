import axios from "axios";
import config from "./config";

class APIConfig {
  constructor() {
    this.baseURL = config.apiUrl;
    this.token = null;
    this.API_KEY =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXByZXNhIjoiMSJ9.3GKuIwus_8PLyG8JqT00BVx3sMnW9ohBlkES23Fn4MM";
    this.setupInterceptors();
    this.isRequesting = false; // Variable para controlar si hay una solicitud en curso
    axios.defaults.withCredentials = true;
  }

  setupInterceptors() {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          const isAuthRequest = error.config.url.includes("/usuario/checkAuth");
          if (!isAuthRequest) {
            console.log("Se recibió un error 401. Redirigiendo al usuario...");
            const redirectUrl = `/login?redirect=${window.location.pathname}`;
            window.location.replace(redirectUrl);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  async fetchById(userId) {
    try {
      const response = await axios.get(`${this.baseURL}/users/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }

  async login(userData) {
    const requestBody = { API_KEY: this.API_KEY, ...userData };
    const response = await axios.post(
      `${this.baseURL}/usuario/auth`,
      requestBody
    );
    return response;
  }

  async getProductos(criteria) {
    const url = `${this.baseURL}/producto/`;
    const requestBody = { ...criteria, API_KEY: this.API_KEY, since: 0 };
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async getPerfiles() {
    const url = `${this.baseURL}/usuario/profile/getAll`;
    const requestBody = { API_KEY: this.API_KEY, since: 0 };
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async getUsuarios() {
    const url = `${this.baseURL}/usuario/getAll`;
    const requestBody = { API_KEY: this.API_KEY, since: 0 };
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async getProductoDetail(productId) {
    const url = `${this.baseURL}/producto/detail`;
    const requestBody = { productId, API_KEY: this.API_KEY };
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async saveProduct(productData) {
    const url = `${this.baseURL}/producto/save`;
    const requestBody = { ...productData, API_KEY: this.API_KEY };
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async getCategorias(criteria) {
    const url = `${this.baseURL}/categoria/`;
    const requestBody = { ...criteria, API_KEY: this.API_KEY };
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async deleteCategoria(categoria) {
    const url = `${this.baseURL}/categoria/delete`;
    const requestBody = { ...categoria, API_KEY: this.API_KEY };
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async createCategoria(formData) {
    const url = `${this.baseURL}/categoria/create`;
    formData.append("API_KEY", this.API_KEY);
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: this.token,
      },
    });
    return response.data;
  }

  async checkAuth() {
    const response = await axios.get(`${this.baseURL}/usuario/checkAuth`);
    return { response };
  }
  async logout() {
    const response = await axios.get(`${this.baseURL}/usuario/logout`);
    this.clearToken();
    return { response };
  }
  async clearToken() {
    this.token = null;
  }
}

const API = new APIConfig();

export default API;
