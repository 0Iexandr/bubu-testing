import './FooterInformation.scss';

import { Link } from 'react-router-dom';

const footerInformationData = {
  items: [
    'Про нас',
    'Контакти',
    'Доставка і оплата',
    'Повернення і обмін',
    'Політика конфеденційності',
  ],
  links: ['/about', '/contacts', '/delivery', '/refund', '/privacy'],
};

const FooterInformation = () => {
  return (
    <div className="footer-information">
      <h3 className="footer-information__title">ІНФОРМАЦІЯ</h3>
      <ul className="footer-information__list">
        {footerInformationData.items.map((item, idx) => {
          const link = footerInformationData.links[idx];
          return (
            <li key={idx}>
              <Link to={link} className="footer-information__link">
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterInformation;
