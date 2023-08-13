import styles from './TrendingDestinationCard.module.css';

function TrendingDestinationCard({ dest }) {
  return (
    <div className={styles.card}>
      <img src={dest.image} alt={dest.destName} />

      <div className={styles.title}>
        <span>{dest.destName}</span>
        <span>{dest.emoji}</span>
      </div>
    </div>
  );
}

export default TrendingDestinationCard;
