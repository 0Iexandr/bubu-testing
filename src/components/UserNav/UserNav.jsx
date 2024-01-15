import './UserNav.scss';

import { Link } from 'react-router-dom';

import comparison from '../../assets/svg/сomparison.svg';
import favorite from '../../assets/svg/favorite.svg';
import cart from '../../assets/svg/cart.svg';

const userNavData = {
  icons: [comparison, favorite, cart],
  names: ['comparison', 'favorite', 'cart'],
  links: ['/comparison', '/favorite', '/cart'],
  items: [0, 0, 1],
};

const UserNav = ({ className = '', setIsBurgerOpen }) => {
  return (
    <nav className={className}>
      <ul className="user-nav__list">
        {userNavData.icons.map((icon, idx) => {
          const link = userNavData.links[idx];
          return (
            <li key={idx}>
              <Link
                to={link}
                className="user-nav__link"
                onClick={() =>
                  setIsBurgerOpen ? setIsBurgerOpen(false) : null
                }
              >
                <img
                  src={icon}
                  alt={userNavData.names[idx]}
                  className="user-nav__icon"
                />
                <span
                  className={`user-nav__counter ${
                    userNavData.items[idx] ? 'not-empty' : null
                  }`}
                >
                  {userNavData.items[idx]}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default UserNav;
