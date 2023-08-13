import RatingLabel from '../RatingLabel/RatingLabel';
import styles from './MainPagePropertyCard.module.css';

function MainPagePropertyCard({ property }) {
  return (
    <div className={styles.card}>
      <img src={property.image}></img>

      <div className={styles.propertyDetails}>
        <div>
          <h4>{property.propertyName}</h4>
          <p>{property.location}</p>
          <div className={styles.ratingDetails}>
            <RatingLabel>
              <h4 className={styles.rating}>{property.rating}</h4>
            </RatingLabel>

            <p className={styles.reviewSummary}>Fabulous</p>
            <p>&bull;</p>
            <p>{property.reviews} reviews</p>
          </div>
        </div>
        <div className={styles.priceDetails}>
          <p>Starting from</p>
          <h3>&euro; {property.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default MainPagePropertyCard;
