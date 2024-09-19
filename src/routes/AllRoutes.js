import { Routes, Route } from 'react-router-dom';
import { Home, Cart } from '../pages';

export const AllRoutes = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
};
