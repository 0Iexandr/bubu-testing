import './Contacts.scss';

import Socials from '../Socials/Socials';

const Contacts = () => {
  return (
    <div className="contacts">
      <a href="tel:+380631284609" className="contacts__number">
        (063) 128-46-09
      </a>
      <a href="mailto:bubu.shop2018@gmail.com" className="contacts__email">
        bubu.shop2018@gmail.com
      </a>
      <p className="contacts__address">
        Одеса, вул. Михайлівська 8 (щодня з 10:00 до 20:00)
      </p>
      <Socials />
    </div>
  );
};

export default Contacts;
