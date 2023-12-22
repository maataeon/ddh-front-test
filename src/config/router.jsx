import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing';
import Login from '../components/login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);


export default router;