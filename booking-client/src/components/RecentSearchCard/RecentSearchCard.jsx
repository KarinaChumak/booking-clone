import styles from './RecentSearchCard.module.css';

function RecentSearchCard({ location, style }) {
  return (
    <div className={styles.card} style={style}>
      <img src={location.locationImage}></img>
      <div>
        <p className={styles.title}>{location.locationName}</p>
        <p>{location.searchDetails}</p>
      </div>
    </div>
  );
}

export default RecentSearchCard;
