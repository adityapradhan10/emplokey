import { Outlet } from 'react-router-dom';
import Header from './Header';

const HomeLayout = () => {
  // TODO:-
  console.log('Home');

  return (
    <section className='flex h-full w-full'>
      <main className='relative w-full'>
        <Header />
        <Outlet />
      </main>
    </section>
  );
};

export default HomeLayout;
