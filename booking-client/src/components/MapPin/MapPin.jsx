import styles from './MapPin.module.css';

function MapPin({ withShadow = true, centerColor = 'white' }) {
  return (
    <div className={styles.pin}>
      <div className={styles.pinBody}>
        <span
          className={styles.pinCenter}
          style={{ backgroundColor: centerColor }}
        ></span>

        <svg viewBox="-1 -1 26 32">
          <path d="M24 12.4286C24 19.2927 12 29 12 29C12 29 0 19.2927 0 12.4286C0 5.56446 5.37258 0 12 0C18.6274 0 24 5.56446 24 12.4286Z"></path>
        </svg>
      </div>
      {withShadow && (
        <svg viewBox="0 0 12 4" className={styles.pinShadow}>
          <ellipse cx="6" cy="2" rx="6" ry="2"></ellipse>
        </svg>
      )}
    </div>
  );
}

export default MapPin;
