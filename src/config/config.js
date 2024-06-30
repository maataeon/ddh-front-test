const useLocalhost = false; // Cambia a false para usar la URL de producción

const config = {
  apiUrl: useLocalhost
    ? "http://localhost:8080/php"
    : "http://vps-3784667-x.dattaweb.com:8080/php", // Ajusta la URL del servidor aquí
};

export default config;
