import { Children } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './HorizontalScrolList.module.css';
import ButtonPrevNextArrow from '../ButtonPrevNextArrow/ButtonPrevNextArrow';

// This component showes any passed children as a horisontal list with two arrows

function HorizontalScrolList({ numItemsToShow, children }) {
  const childrenList = Children.toArray(children);

  // Number of an element being showed last
  const [currentViewPoint, setCurrentViewPoint] =
    useState(numItemsToShow);

  function handleNextClick() {
    // if (currentViewPoint < childrenList.length - 1)
    setCurrentViewPoint((currentViewPoint) => currentViewPoint + 1);
  }

  function handlePrevClick() {
    // if (currentViewPoint > numItemsToShow)
    setCurrentViewPoint((currentViewPoint) => currentViewPoint - 1);
  }

  return (
    <div>
      <motion.div
        className={styles.resultsList}
        layout
        transition={{
          type: 'spring',
          stiffness: 40,
        }}
      >
        {childrenList.slice(
          currentViewPoint - numItemsToShow,
          currentViewPoint
        )}
      </motion.div>
      {currentViewPoint > numItemsToShow && (
        <ButtonPrevNextArrow
          type="prev"
          onClick={handlePrevClick}
        ></ButtonPrevNextArrow>
      )}
      {currentViewPoint < childrenList.length && (
        <ButtonPrevNextArrow
          type="next"
          onClick={handleNextClick}
        ></ButtonPrevNextArrow>
      )}
    </div>
  );
}

export default HorizontalScrolList;
