import styles from './FindNextBanner.module.css';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const items = [
  'apartments',
  'homes',
  'villas',
  'cottages',
  'hotels',
  'holiday homes',
  'apartments',
];

function FindNextBanner() {
  return (
    <div className={styles.content}>
      <div className={styles.mainBanner}>
        <div className={styles.boxFirst}>
          <div className={styles.orangeBall}> </div>
        </div>
        <div className={styles.roundContainer}>
          <div className={styles.sliderContainer}>
            <span className={styles.sliderContainerText}>
              Find your
            </span>
            <ul className={styles.sliderContainerList}>
              {items.map((i) => (
                <li
                  key={i}
                  className={styles.sliderContainerListItem}
                >
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <span className={styles.roundContainerText}>
            for your next trip
          </span>
          <a href="" className={styles.linkButton}>
            Discover homes
          </a>
        </div>
        <div className={styles.imgContainer}>
          <img src="https://cf.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.b4347622.png"></img>
        </div>

        {/* <div className={styles.sliderContainer}>
          <span className={styles.sliderContainerText}>
            Find your
          </span>
          <ul className={styles.sliderContainerList}>
            {items.map((i) => (
              <li key={i} className={styles.sliderContainerListItem}>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default FindNextBanner;
