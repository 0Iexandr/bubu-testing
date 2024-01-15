import './UserControls.scss';

import { Link } from 'react-router-dom';

import Socials from '../Socials/Socials';
import LanguageSet from '../LanguageSet/LanguageSet';

import user from '../../assets/svg/user.svg';

const UserControls = ({ className = '', setIsBurgerOpen }) => {
  return (
    <div className={`user-controls ${className}`}>
      <a href="tel:+380631284609" className="user-controls__number">
        (063) 128-46-09
      </a>
      <Socials />
      <LanguageSet />
      <Link
        to="/login"
        className="user-controls__area"
        onClick={() => (setIsBurgerOpen ? setIsBurgerOpen(false) : null)}
      >
        <img src={user} alt="personal area" />
        Вхід
      </Link>
    </div>
  );
};

export default UserControls;
