import styles from './HotelFeatures.module.css';
import featureMap from '../../utils/hotelFeaturesMap';
function HotelFeatures({ features }) {
  return (
    <div className={styles.features}>
      {features.map((feature) => (
        <Feature key={feature} name={feature}></Feature>
      ))}
    </div>
  );
}

function Feature({ name }) {
  return (
    <div className={styles.feature}>
      <span>{featureMap[name] || ''}</span>
      <p> {name}</p>
    </div>
  );
}
export default HotelFeatures;
