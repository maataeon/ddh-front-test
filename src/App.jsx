import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import ContactoPage from "./pages/contacto/ContactoPage";
import CategoriasPage from "./pages/categorias/CategoriasPage";
import Header from "./components/header/Header";
import "./app.css";
import ProductosPage from "./pages/productos/ProductosPage";
import ProductoPage from "./pages/productos/producto/ProductoPage";
import RegistrarsePage from "./pages/registarse/RegistrarsePage";
import { useEffect, useState } from "react";
import UsuariosPage from "./pages/usuarios/UsuariosPage";
import KeyboardEventHandler from "./components/keyboardEventHandler/KeyboardEventHandler";
import AddEditProductoPage from "./pages/productos/addEditProducto/AddEditProductoPage";

/*
  El primer nivel deben ser pages.
  La idea es que si es accesible desde un link debería tener su page
  para responsabilizar a /pages la explicacion del acceso al sitio
  anidando pages, ej: /pages/categorias/items/...

*/

const headerExcludedPaths = ["/login", "/registrarse"];

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showHeader, setShowHeader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const isExcluded = headerExcludedPaths.includes(location.pathname);
    setShowHeader(!isExcluded);
  }, [location.pathname]);

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    // Update the URL when search term changes
    navigate({ search: newSearchTerm ? `?q=${newSearchTerm}` : "" });
  };
  return (
    <div className={`App${showHeader ? "" : " Headerless"}`}>
      {showHeader && <Header onSearch={handleSearch} />}
      <div className="PageViewer">
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="categorias" element={<CategoriasPage />} />
          <Route path="categorias/:idCategoria" element={<ProductosPage />} />
          <Route
            path="categorias/:categoriaId/:productoId"
            element={<ProductoPage />}
          />
          <Route
            path="productos"
            element={<ProductosPage searchTerm={searchTerm} />}
          />
          <Route path="productos/new" element={<AddEditProductoPage />} />
          <Route path="producto/:productoId" element={<ProductoPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registrarse" element={<RegistrarsePage />} />
          <Route path="usuarios" element={<UsuariosPage />} />
        </Routes>
      </div>
      <KeyboardEventHandler />
    </div>
  );
};

export default App;
