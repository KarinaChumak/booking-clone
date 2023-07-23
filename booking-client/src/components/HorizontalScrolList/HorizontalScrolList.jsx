import { Children } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './HorizontalScrolList.module.css';
import ButtonPrevNextArrow from '../ButtonPrevNextArrow/ButtonPrevNextArrow';

// This component showes any passed children as a horisontal list with two arrows

function HorizontalScrolList({ elementWidth, children }) {
  // Number of an element being showed last
  const [index, setIndex] = useState(0);
  console.log(children);

  function handleNextClick() {
    if (index < children.length - 1) setIndex((i) => i + 1);
  }

  function handlePrevClick() {
    if (index > 0) setIndex((i) => i - 1);
  }

  return (
    <div className={styles.listContainer}>
      <div className={styles.hidden}>
        <motion.div
          animate={{
            x: `-${index * Math.round(elementWidth)}px`,
          }}
          // transition={{ duration: 0.5, ease: 'circOut' }}
          className={styles.resultsList}
        >
          {children}
        </motion.div>
      </div>

      {index > 0 && (
        <ButtonPrevNextArrow
          type="prev"
          onClick={handlePrevClick}
          className={styles.buttonLeft}
        ></ButtonPrevNextArrow>
      )}
      {index < children.length && (
        <ButtonPrevNextArrow
          type="next"
          onClick={handleNextClick}
          className={styles.buttonRight}
        ></ButtonPrevNextArrow>
      )}
    </div>
  );
}

export default HorizontalScrolList;
