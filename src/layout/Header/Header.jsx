import './Header.scss';

import { useState } from 'react';

import Container from '../../components/Container/Container';
import NavBar from '../../components/NavBar/NavBar';
import UserControls from '../../components/UserControls/UserControls';
import Logo from '../../components/Logo/Logo';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Catalog from '../../components/Catalog/Catalog';
import UserNav from '../../components/UserNav/UserNav';

import search from '../../assets/svg/search.svg';
import searchMobile from '../../assets/svg/search-mobile.svg';
import menu from '../../assets/svg/burger-menu.svg';

import ScrollToTop from '../../utils/ScrollToTop';

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <header className="header">
      <Container className="header__container">
        <div className="header__burger">
          <button onClick={() => setIsBurgerOpen(true)}>
            <img src={menu} alt="menu" className="header__burger-icon" />
          </button>
          <ScrollToTop trigger={isBurgerOpen} />
          <BurgerMenu
            isBurgerOpen={isBurgerOpen}
            setIsBurgerOpen={setIsBurgerOpen}
          />
        </div>
        <div className="header__wrapper">
          <div className="header__nav-container">
            <Logo setIsBurgerOpen={setIsBurgerOpen} />
            <NavBar className="header__navbar" />
          </div>
          <UserControls className="header__user-controls" />
        </div>
        <div className="header__user-container">
          <Catalog className="header__catalog" />
          <div className="header__search">
            <input
              type="text"
              placeholder="Я шукаю..."
              className="header__search-input"
            />
            <button className="header__search-btn">
              <img src={search} alt="search" />
            </button>
            <button className="header__search-mobile">
              <img src={searchMobile} alt="search" />
            </button>
          </div>
          <UserNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
