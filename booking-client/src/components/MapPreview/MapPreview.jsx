import styles from './MapPreview.module.css';
import MapPin from '../MapPin/MapPin';
function MapPreview({ height = '20rem' }) {
  const style = {
    height,
  };
  return (
    <div className={styles.map} style={style}>
      <div className={styles.mapPin}>
        <MapPin></MapPin>
      </div>
      <button> Show on map</button>
    </div>
  );
}

export default MapPreview;
