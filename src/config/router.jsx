import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/landing/LandingPage';
import ContactoPage from '../pages/contacto/ContactoPage';
import CategoriasPage from '../pages/categorias/CategoriasPage';
import LoginPage from '../pages/login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/categorias",
    element: <CategoriasPage />,
  },
  {
    path: "/contacto",
    element: <ContactoPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);


export default router;