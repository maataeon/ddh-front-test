
import { Route, Routes, useLocation } from "react-router-dom";
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

/*
  El primer nivel deben ser pages.
  La idea es que si es accesible desde un link debería tener su page
  para responsabilizar a /pages la explicacion del acceso al sitio
  anidando pages, ej: /pages/categorias/items/...

*/

const headerExcludedPaths = ['/login', '/registrarse'];

const App = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const isExcluded = headerExcludedPaths.includes(location.pathname);
    setShowHeader(!isExcluded);
  }, [location.pathname]);

  return (<div className={`App${showHeader ? "" : " Headerless"}`}>
    { showHeader && <Header /> }
    <Routes >
      <Route index element={<LandingPage />} />
      <Route path="categorias" element={<CategoriasPage />} />
      <Route path="categorias/:categoriaId" element={<ProductosPage />} />
      <Route path="categorias/:categoriaId/:productoId" element={<ProductoPage />} />
      <Route path="productos" element={<ProductosPage />} />
      <Route path="productos/:productoId" element={<ProductoPage />} />
      <Route path="contacto" element={<ContactoPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registrarse" element={<RegistrarsePage />} />
    </Routes >
  </div>
  )
}

export default App;