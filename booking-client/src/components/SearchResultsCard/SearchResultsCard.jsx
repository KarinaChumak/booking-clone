import RatingLabel from '../RatingLabel/RatingLabel';
import StarRating from '../StarRating/StarRating';
import styles from './SearchResultsCard.module.css';

const tmp = {
  id: 0,
  propertyName: 'Agriturismo Cabrele',
  location: 'Italy, Santorso',
  rating: 9.3,
  reviews: 237,
  stars: 3,
  price: 563,
  tags: ['Getaway Deal', 'Free airport taxi'],
  rooms: [
    {
      name: 'Triple Room with Double Bed and Bunk Bed',
      beds: 2,
      numPeople: 3,
      pricePerNight: 100,
    },
  ],
  freeCancellation: true,
  prepaymentNeeded: false,
  image:
    'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
};

function SearchResultsCard({ property }) {
  return (
    <div className={styles.searchCard}>
      <div className={styles.propertyImage}>
        <img src={property.image}></img>
      </div>
      <div className={styles.propertyDetails}>
        <div className={styles.cardHeader}>
          <div className={styles.addressNameInfo}>
            <div className={styles.nameStars}>
              <a href="#">
                <h3>{property.propertyName}</h3>
              </a>
              <StarRating
                size={16}
                numStars={property.stars}
              ></StarRating>
            </div>
            <p>{property.address}</p>
          </div>
          <div className={styles.ratingInfo}>
            <div className={styles.ratingDescription}>
              <h4>Very Good</h4>
              <p>{property.reviews} reviews</p>
            </div>
            <RatingLabel>
              <h3 className={styles.ratingLabel}>
                {property.rating}
              </h3>
            </RatingLabel>
          </div>
        </div>

        <div className={styles.tagsContainer}>
          {property.tags.map((tag, i) => (
            <div key={i} className={styles.tag}>
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <div className={styles.roomsPricingContainer}>
          <div className={styles.roomInfo}>
            <h4>{property.rooms[0]?.name}</h4>
            <p>
              {property.rooms[0]?.beds} beds for{' '}
              {property.rooms[0]?.numPeople} people
            </p>

            <div className={styles.pros}>
              {property.freeCancellation && (
                <p>
                  <b>FREE cancellation</b>
                </p>
              )}

              {!property.prepaymentNeeded && (
                <p>
                  <b>No prepayment needed</b> – pay at the property
                </p>
              )}
            </div>
          </div>

          <div className={styles.pricingInfo}>
            <p>2 weeks, 2 adults</p>
            <p className={styles.price}>€ 1,549</p>
            <p>Includes taxes and fees</p>

            <a href="#" className={styles.buttonSee}>
              See availability
              <span>
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsCard;
