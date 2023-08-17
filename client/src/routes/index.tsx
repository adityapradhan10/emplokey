import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Home from '@/pages/Home';

const Routing = () => {
  const Loader = (Component: React.FC) => {
    const Wrapper = (props: object) => (
      <Suspense>
        <Component {...props} />
      </Suspense>
    );
    Wrapper.displayName = `Loader(${Component.displayName || Component.name || 'Component'})`;
    return Wrapper;
  };

  const Login = Loader(lazy(() => import('../pages/Login')));

  return (
    <Routes>
      <Route path='/' element={<PrivateRoute />}>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<Home />} />
      </Route>
      <Route path='login' element={<PublicRoute />}>
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Routing;
