import css from './container.module.css';

export const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
