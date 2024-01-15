import './FooterCatalog.scss';

import { Link } from 'react-router-dom';

const footerCatalogData = [
  {
    name: 'Дитячі коляски',
    link: '/catalog',
  },
  {
    name: 'Дитяча кімната',
    link: '/catalog',
  },
  {
    name: 'Стільці і шезлонги',
    link: '/catalog',
  },
  {
    name: 'Для годування',
    link: '/catalog',
  },
  {
    name: 'Гігієна і догляд',
    link: '/catalog',
  },
  {
    name: 'Автокрісла',
    link: '/catalog',
  },
  {
    name: 'Дитячий транспорт',
    link: '/catalog',
  },
  {
    name: 'Іграшки',
    link: '/catalog',
  },
  {
    name: 'Одяг',
    link: '/catalog',
  },
  {
    name: 'Новий товар',
    link: '/catalog',
  },
];

const FooterCatalog = () => {
  const firstColumnData = footerCatalogData.slice(0, 5);
  const secondColumnData = footerCatalogData.slice(5);

  return (
    <div className="footer-catalog">
      <h3 className="footer-catalog__title">КАТАЛОГ</h3>
      <div className="footer-catalog__columns">
        <ul className="footer-catalog__list">
          {firstColumnData.map((item, idx) => (
            <li key={idx}>
              <Link to={item.link} className="footer-catalog__link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="footer-catalog__list">
          {secondColumnData.map((item, idx) => (
            <li key={idx}>
              <Link to={item.link} className="footer-catalog__link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterCatalog;
