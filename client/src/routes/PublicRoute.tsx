import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  // TODO:- Auth
  const isUserAuth = true;

  return isUserAuth ? <Navigate to='/' /> : <Outlet />;
};
export default PublicRoute;
