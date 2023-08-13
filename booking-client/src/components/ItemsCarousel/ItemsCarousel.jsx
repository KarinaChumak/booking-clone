import Carousel from 'react-multi-carousel';
import ButtonPrevNextArrow from '../ButtonPrevNextArrow/ButtonPrevNextArrow';
import 'react-multi-carousel/lib/styles.css';

import styles from './ItemsCarousel.module.css';

function ItemsCarousel({ responsive, children }) {
  return (
    //  Nice trick to override overflow:hidden in a Carousel
    //   component, so the buttons can overflow it
    <div className={styles.wrapper}>
      <Carousel
        responsive={responsive}
        customRightArrow={<ButtonPrevNextArrow type="next" />}
        customLeftArrow={<ButtonPrevNextArrow type="prev" />}
      >
        {children}
      </Carousel>
    </div>
  );
}

export default ItemsCarousel;
