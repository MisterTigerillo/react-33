import css from './sliderButtons.module.css';

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

export const SliderButtons = ({ classPrev, classNext }) => {
  return (
    <div className={css.navButtons}>
      <div className={classPrev}>
        <BsChevronLeft />
      </div>
      <div className={classNext}>
        <BsChevronRight />
      </div>
    </div>
  );
};
