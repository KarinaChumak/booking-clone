import styles from './PropertyTypeCard.module.css';

function PropertyTypeCard({ property }) {
  return (
    <div className={styles.propertyTypeCard}>
      <img src={property.image}></img>
      <p className={styles.title}>{property.propertyType}</p>
      <p>
        {property.numProperties.toLocaleString('en-US')} properties
      </p>
    </div>
  );
}

export default PropertyTypeCard;
