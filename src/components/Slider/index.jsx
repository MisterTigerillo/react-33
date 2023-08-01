import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderButtons } from './SliderButtons';
import { Navigation } from 'swiper/modules';

import css from './slider.module.css';
// import '../../../node_modules/swiper/modules/navigation.min.css';

export const Slider = ({ slides }) => {
  const prev = `${css.prevButton}`;
  const next = `${css.nextButton}`;
  return (
    <div className={css.sliderWrapper}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        navigation={{
          nextEl: `.${next}`,
          prevEl: `.${prev}`,
          disabledClass: 'swiper-button-disabled',
        }}
        loop={true}
        slidesPerView={1}
        className={css.slider}
      >
        {slides.map(slide => (
          <SwiperSlide className={css.slide} key={slide.image}>
            <img className={css.image} src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons
        navButtons={css.navButtons}
        classPrev={prev}
        classNext={next}
      />
    </div>
  );
};
