import axios from "axios";

class APIConfig {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.token = null;
    this.API_KEY =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXByZXNhIjoiMSJ9.3GKuIwus_8PLyG8JqT00BVx3sMnW9ohBlkES23Fn4MM";
    this.setupInterceptors();
    this.isRequesting = false; // Variable para controlar si hay una solicitud en curso
  }

  setupInterceptors() {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          const isAuthRequest =
            error.config.url === `${this.baseURL}/usuario/auth`;
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

  async fetchData(url, requestBody) {
    try {
      /*if (this.isRequesting) {
        // Si hay una solicitud en curso, esperar hasta que se complete antes de continuar
        await new Promise(resolve => {
          const interval = setInterval(() => {
            if (!this.isRequesting) {
              clearInterval(interval);
              resolve();
            }
          }, 100);
        });
      }*/

      // Marcar que hay una solicitud en curso
      this.isRequesting = true;

      const response = await axios.post(url, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
        },
      });

      const data = response.data;
      this.token = data.tkn ? data.tkn : this.token;

      // Marcar que la solicitud ha finalizado
      this.isRequesting = false;

      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
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
    try {
      const requestBody = { API_KEY: this.API_KEY, ...userData };
      const response = await axios.post(
        `${this.baseURL}/usuario/auth`,
        requestBody
      );
      const token = response.data.tkn;
      this.token = token;
      console.log({ auth: this.token });
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }

  async getProductos(criteria) {
    console.log("token at getProductos(): " + this.token);
    const url = `${this.baseURL}/producto/`;
    const requestBody = { ...criteria, API_KEY: this.API_KEY, since: 0 };
    return this.fetchData(url, requestBody);
  }

  async getUsuarios() {
    console.log("token at getUsuarios(): " + this.token);
    const url = `${this.baseURL}/usuario/getAll`;
    const requestBody = { API_KEY: this.API_KEY, since: 0 };
    return this.fetchData(url, requestBody);
  }

  async getProductoDetail(productId) {
    const url = `${this.baseURL}/producto/detail`;
    const requestBody = { productId, API_KEY: this.API_KEY };
    return this.fetchData(url, requestBody);
  }

  async saveProduct(productData) {
    try {
      const url = `${this.baseURL}/producto/save`;
      const requestBody = { ...productData, API_KEY: this.API_KEY };
      return this.fetchData(url, requestBody);
    } catch (error) {
      throw new Error(`Error al guardar el producto: ${error.message}`);
    }
  }

  async getCategorias(criteria) {
    const url = `${this.baseURL}/categoria/`;
    const requestBody = { ...criteria, API_KEY: this.API_KEY };
    return this.fetchData(url, requestBody);
  }

  async clearToken() {
    this.token = null;
  }
}

const API = new APIConfig("http://localhost:8080/php");

export default API;
