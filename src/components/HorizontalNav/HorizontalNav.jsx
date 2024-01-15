import './HorizontalNav.scss';

import { Link } from 'react-router-dom';

import Container from '../Container/Container';

const HorizontalNav = () => {
  // const location = useLocation();
  // const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   setHistory(prev => [...prev, location.pathname]);
  // }, [location.pathname]);

  return (
    <nav className="horizontal-nav">
      <Container>
        <Link to="/" className="horizontal-nav__link">
          Головна &gt;
        </Link>
      </Container>
    </nav>
  );
};

export default HorizontalNav;
