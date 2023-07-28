import { Container } from 'components/Container/container';
import { Slider } from 'components/Slider';

import slides from './pics.json';

import 'swiper/css';
export const App = () => {
  return (
    <Container>
      <Slider slides={slides} />

      <div className="slides">
        {slides.map(slide => (
          <div className="slide">
            <img src={slide.image} alt={slide.title}></img>
          </div>
        ))}
      </div>
    </Container>
  );
};
