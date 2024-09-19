import logo from '../asset/logo.png';
import { Link, NavLink } from 'react-router-dom';

export const Headers = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Shopping Cart Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Shopping Cart
            </span>
          </Link>
          <nav
            className="items-center w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  <span>Cart: 2</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};
