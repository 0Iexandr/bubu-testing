import './BurgerMenu.scss';

import NavBar from '../NavBar/NavBar';
import UserNav from '../UserControls/UserControls';
import Catalog from '../Catalog/Catalog';
import Container from '../Container/Container';

import close from '../../assets/svg/close.svg';

import { createPortal } from 'react-dom';

const BurgerMenu = ({ isBurgerOpen, setIsBurgerOpen }) => {
  return createPortal(
    <div className={`burger ${isBurgerOpen ? 'open' : ''}`}>
      <div className={`burger__content ${isBurgerOpen ? 'open' : ''}`}>
        <Container className="burger__container">
          <button
            onClick={() => setIsBurgerOpen(false)}
            className="burger__close"
          >
            <img src={close} alt="close" />
          </button>
          <Catalog />
          <NavBar setIsBurgerOpen={setIsBurgerOpen} />
          <hr className="burger__separator" />
          <UserNav setIsBurgerOpen={setIsBurgerOpen} />
        </Container>
      </div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default BurgerMenu;
