import { Container } from 'components/Container/container';
import { Slider } from 'components/Slider';

import slides from './pics.json';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import 'swiper/css';
export const App = () => {
  return (
    <>
      <Container>
        <Slider slides={slides} />
      </Container>
      <div className="slides">
        {slides.map(slide => (
          <div className="slide">
            <img src={slide.image} alt={slide.title}></img>
          </div>
        ))}
        <div className="navButts">
          <BsChevronLeft />
          <BsChevronRight />
        </div>
      </div>
    </>
  );
};
