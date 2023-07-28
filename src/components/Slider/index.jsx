import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderButtons } from './SliderButtons';
import { Navigation } from 'swiper/modules';

import css from './slider.module.css';
// import '../../../node_modules/swiper/modules/navigation.min.css';

export const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      navigation={{
        nextEl: `.${css.nextButton}`,
        prevEl: `.${css.prevButton}`,
        disabledClass: 'swiper-button-disabled',
      }}
      loop={true}
      slidesPerView={2}
      className={css.slider}
    >
      {slides.map(slide => (
        <SwiperSlide className={css.slide} key={slide.image}>
          <img className={css.image} src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
      {/* <SliderButtons classPrev={css.prevButton} classNext={css.nextButton} /> */}
    </Swiper>
  );
};
