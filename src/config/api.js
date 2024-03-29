import axios from 'axios';

class APIConfig {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.token = null;
    this.API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXByZXNhIjoiMSJ9.3GKuIwus_8PLyG8JqT00BVx3sMnW9ohBlkES23Fn4MM';
    this.setupInterceptors();
  }

  setupInterceptors() {/* 
    // Interceptor para todas las solicitudes
    axios.interceptors.request.use(
      (config) => {
        // Verificar si el token es nulo antes de cada solicitud
        if (!this.token && config.url !== `${this.baseURL}/usuario/auth`) {
          console.log('Token nulo. Redirigiendo al usuario...');
          window.location.replace('/login');
          // Puedes también rechazar la solicitud si deseas
          // return Promise.reject(new Error('Token nulo. Redirigiendo al usuario...'));
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );*/
   
    // Interceptor para manejar errores de autenticación (401) en las respuestas
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          console.log('Se recibió un error 401. Redirigiendo al usuario...');
          const redirectUrl = `/login?redirect=${window.location.pathname}`;
          window.location.replace(redirectUrl);
        }
        return Promise.reject(error);
      }
    );
  }

  async fetchById(userId) {
    const url = `${this.baseURL}/users/${userId}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }

  async login(userData) {
    const url = `${this.baseURL}/usuario/auth`;
    
    try {
      const response = await axios.post(url, userData);

      const token = response.data.tkn;
      this.token = token;

      console.log({auth : this.token});

      return token; // Retorna el token desde el método login
    } catch (error) {
      console.log(error)
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }

  async getProductos() {
    console.log("token at getProductos(): " +  this.token)

    const url = `${this.baseURL}/producto/`;
    
    const requestBody = {
      API_KEY: this.API_KEY,
      since: 0
    };

    try {
      const response = await axios.post(url, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.token // Utiliza el token guardado en la clase
        }
      });
      const data = response.data;

      this.token = data.tkn ? data.tkn : this.token;

      return data;
    } catch (error) {
      console.log(error)
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }
  
  async getUsuarios() {
    console.log("token at getUsuarios(): " +  this.token)

    const url = `${this.baseURL}/usuario/getAll`;
    
    const requestBody = {
      API_KEY: this.API_KEY,
      since: 0,
    };

    try {
      const response = await axios.post(url, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.token // Utiliza el token guardado en la clase
        }
      });
      const data = response.data;

      this.token = data.tkn ? data.tkn : this.token;

      return data;
    } catch (error) {
      console.log(error)
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }

  async getProductoDetail(productId) {
    const url = `${this.baseURL}/producto/detail`;
  
    const requestBody = {
      productId,
      API_KEY: this.API_KEY
    };
  
    try {
      const response = await axios.post(url, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.token
        }
      });
  
      const data = response.data;
      this.token = data.tkn ? data.tkn : this.token;
  
      return data;
    } catch (error) {
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }
}

// Ejemplo de uso de la clase API
const API = new APIConfig('http://localhost:8080/php');

export default API;
