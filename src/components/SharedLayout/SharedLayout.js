import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
