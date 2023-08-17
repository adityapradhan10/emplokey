import HomeLayout from '@/layout/HomeLayout';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  // TODO:- Auth
  const auth = true;
  const location = useLocation();

  if (auth) {
    // Return Normal Layout
    return <HomeLayout />;
  }

  return <Navigate to='/login' state={{ from: location }} />;
};

export default PrivateRoute;
