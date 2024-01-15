import './Footer.scss';

import Contacts from '../../components/Contacts/Contacts';
import Container from '../../components/Container/Container';
import FooterInformation from '../../components/FooterInformation/FooterInformation';
import FooterCatalog from '../../components/FooterCatalog/FooterCatalog';

import visa from '../../assets/svg/visa.svg';
import mastercard from '../../assets/svg/mastercard.svg';
import liqpay from '../../assets/svg/liqpay.svg';
import next from '../../assets/svg/next-button.svg';
import motherAndBaby from '../../assets/img/mother-with-baby.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__promo">
        <Container className="footer__promo-container">
          <h3 className="footer__promo-title">
            Отримуйте ПРОМОКОДИ ТА ЕКСКЛЮЗИВНІ ПРОПОЗИЦІЇ
          </h3>
          <div className="footer__promo-form">
            <input
              type="email"
              placeholder="Ваш email..."
              className="footer__promo-input"
            />
            <button className="footer__promo-btn">
              <img src={next} alt="search" />
            </button>
          </div>
        </Container>
        <img
          src={motherAndBaby}
          alt="mother with baby"
          className="footer__promo-img"
        />
      </div>
      <Container className="footer__container">
        <div className="footer__content">
          <Contacts />
          <div className="footer__info">
            <FooterInformation />
            <FooterCatalog />
          </div>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright-subtitle">
            © Bubu 2022. Всі права захищені.
          </p>
          <div className="footer__payments">
            <img src={mastercard} alt="mastercard" />
            <img src={visa} alt="visa" />
            <img src={liqpay} alt="liqpay" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
