import React from 'react';
import styles from './index.module.css';

const Carousel = React.forwardRef(({ image, index, containerProps, onClick }, ref) => {
  return (
    <div
      key={index}
      style={{ ...containerProps }}
      ref={ref}
      onClick={onClick}
      className={styles.imgContainer}
    >
      <h1>{image.category}</h1>
    </div>
  );
});

export default Carousel;
