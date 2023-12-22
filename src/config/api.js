class APIConfig {
  constructor(baseURL) {
    this.baseURL = baseURL; // URL base de la API
  }

  async fetchById(userId) {
    const url = `${this.baseURL}/users/${userId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener datos de usuario');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }

  async login(userData) {
    const url = `${this.baseURL}/usuario/authJwt.php`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }
}

// Ejemplo de uso de la clase API
const API = new  APIConfig('https://nestedcode.com.ar/ddh/web/php');

export default API;