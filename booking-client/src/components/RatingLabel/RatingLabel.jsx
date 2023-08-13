import styles from './RatingLabel.module.css';

function RatingLabel({ children }) {
  return <div className={styles.ratingLabel}>{children}</div>;
}

export default RatingLabel;
