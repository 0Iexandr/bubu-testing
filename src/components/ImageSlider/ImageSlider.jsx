import './ImageSlider.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

import discountBanner from '../../assets/img/discount-banner.png';
import secondBanner from '../../assets/img/second-banner.png';
import thirdBanner from '../../assets/img/third-banner.png';

const ImageSlider = ({ className, width, height }) => {
  const images = [discountBanner, secondBanner, thirdBanner];

  return (
    <div className={className}>
      <Carousel
        className='carousel__size'
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
      >
        {images.map((image, idx) => (
          <img src={image} alt="banner" key={idx}/>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
