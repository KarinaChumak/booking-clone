import styles from './RecentSearchCard.module.css';

function RecentSearchCard({ location }) {
  return (
    <div className={styles.card}>
      <img src={location.locationImage}></img>
      <div>
        <p className={styles.title}>{location.locationName}</p>
        <p>{location.searchDetails}</p>
      </div>
    </div>
  );
}

export default RecentSearchCard;
