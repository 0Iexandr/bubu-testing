import './Logo.scss';

import { Link } from 'react-router-dom';

import logo from '../../assets/svg/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="logo__img" />
    </Link>
  );
};

export default Logo;
