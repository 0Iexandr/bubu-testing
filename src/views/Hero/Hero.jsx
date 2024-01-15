import './Hero.scss';

import Container from '../../components/Container/Container';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const Hero = () => {
  return (
    <section className="hero">
      <Container className="hero__container">
        <ImageSlider className="hero__img-slider" width={1028} height={568} />
      </Container>
    </section>
  );
};

export default Hero;
