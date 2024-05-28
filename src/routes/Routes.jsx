import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Home, Login, Signup } from 'views';
import PrivateRoutes from './PrivateRoutes';
const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <>
          <Home></Home>
        </>
      ),
    },
    {
      path: '/login',
      element: (
        <>
          <Login></Login>
        </>
      ),
    },
    {
      path: '/signup',
      element: (
        <>
          <Signup></Signup>
        </>
      ),
    },
    {
      path: '/phonebook',
      element: <PrivateRoutes></PrivateRoutes>,
    },
    {
      path: '*',
      element: <Navigate to={'/'} />,
    },
  ],
  { basename: '/goit-react-hw-08-phonebook/' }
);

export default routes;
