import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Outlet />
    </div>
  );
};
