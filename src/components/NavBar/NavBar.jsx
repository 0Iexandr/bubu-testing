import './NavBar.scss';

import { Link } from 'react-router-dom';

const navBarData = {
  items: ['Про нас', 'Контакти', 'Доставка і оплата', 'Повернення і обмін'],
  links: ['/about', '/contacts', '/delivery', '/refund'],
};

const NavBar = ({ className = '', setIsBurgerOpen }) => {
  return (
    <nav className={className}>
      <ul className="nav__list">
        {navBarData.items.map((item, idx) => {
          const link = navBarData.links[idx];
          return (
            <li key={idx}>
              <Link
                to={link}
                className="nav__link"
                onClick={() =>
                  setIsBurgerOpen ? setIsBurgerOpen(false) : null
                }
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
