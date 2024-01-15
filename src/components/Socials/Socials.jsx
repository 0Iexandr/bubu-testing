import './Socials.scss';

import instagram from '../../assets/svg/instagram.svg';
import youtube from '../../assets/svg/youtube.svg';
import facebook from '../../assets/svg/facebook.svg';

const socialsData = {
  icons: [instagram, youtube, facebook],
  names: ['instagram', 'youtube', 'facebook'],
  links: [
    'https://www.instagram.com',
    'https://www.youtube.com',
    'https://www.facebook.com',
  ],
};

const Socials = () => {
  return (
    <div className="socials">
      <ul className="socials__list">
        {socialsData.icons.map((social, idx) => {
          return (
            <li key={idx}>
              <a
                href={socialsData.links[idx]}
                className="socials__link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={social} alt={socialsData.names[idx]} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;
