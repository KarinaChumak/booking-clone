import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';
import SearchBox from '../../components/SearchBox/SearchBox';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import MapPreview from '../../components/MapPreview/MapPreview';
import SearchFormSidebar from '../../components/SearchFormSidebar/SearchFormSidebar';
import StarRating from '../../components/StarRating/StarRating';

import featureMap from '../../utils/hotelFeaturesMap';
import styles from './HotelPage.module.css';
import HotelGallery from '../../components/HotelGallery/HotelGallery';
import HotelFeatures from '../../components/HotelFeatures/HotelFeatures';
import AvailabilityTable from '../../components/AvailabilityTable/AvailabilityTable';

const hotel = {
  id: 0,
  propertyName: 'Agriturismo Cabrele',
  location: 'Italy, Santorso',
  rating: 9.3,
  reviews: 237,
  stars: 3,
  price: 563,
  tags: ['Getaway Deal', 'Free airport taxi'],
  address: 'Marka Marulica 6, Lapad, 20000 Dubrovnik, Croatia',
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
  images: [
    'https://cf.bstatic.com/xdata/images/hotel/max500/203770412.jpg?k=3344b68d59bd936f8819d755dd6bcb05a5d4aa257c21c0340a68c752092fdb28&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max500/203770956.jpg?k=aef2c8c037300a7f258e9be3b283940beabb07827d434bdefc3a66f0b0de7855&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max300/203769600.jpg?k=728245f0d67b0c6bb8466e01be18cbb8bfb1bd809577a60ce10f580e4b9d9543&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max300/156345936.jpg?k=5860be9e90513e686f995ed5db0bd206291b3827e1e3a4d3f8cb622c2a70be10&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/156348393.jpg?k=18b9a0c8d3e98781f57c605c99e093820b4ead14f7d652ecfd12aa5da2d60074&o=&hp=1',
  ],

  features: [
    'Pets allowed',
    'Free Wi-Fi',
    'Air conditioning',
    '24-hour front-desk',
    'Key-card access',
  ],
  breakfast: ['continental', 'vegetarian', 'vegan'],

  detailedDescriptions: [
    'Set in Hamburg, 1.6 km from Hamburg Central Station, Moxy Hamburg City offers accommodation with a fitness centre, private parking, a terrace and a bar. Among the facilities at this property are a 24-hour front desk and a business centre, along with free WiFi throughout the property. The property is non-smoking and is situated 2.1 km from Dialog im Dunkeln.',
    'A continental, vegetarian or vegan breakfast can be enjoyed at the property.',
    'Mönckebergstraße is 2.5 km from the hotel, while Inner Alster Lake is 2.6 km away. The nearest airport is Hamburg Airport, 10 km from Moxy Hamburg City.',
    'Couples particularly like the location — they rated it 8.2 for a two-person trip.',
    'Moxy Hamburg City has been welcoming Booking.com guests since 29 Jul 2020',
  ],
};

function HotelPage() {
  return (
    <>
      <header>
        <Header></Header>
        <NavBar></NavBar>
      </header>
      <main>
        <section>
          <Container>
            {/* TODO: implement search history stack */}
            <br></br>

            <div className={styles.hotelLayout}>
              <div className={styles.searchSidebar}>
                <SearchFormSidebar></SearchFormSidebar>
                <MapPreview height="19rem"></MapPreview>
              </div>
              <div className={styles.hotelSummaryContainer}>
                <div className={styles.hotelDetails}>
                  <div className={styles.summaryHeaderContainer}>
                    <div className={styles.highlightsContainer}>
                      <StarRating
                        size={14}
                        numStars={hotel.stars}
                      ></StarRating>

                      {hotel.tags.map((tag) => (
                        <div
                          key={tag}
                          className={styles.highlightTag}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className={styles.buttonsContainer}>
                      <button className={styles.likeButton}>
                        <svg
                          fill="#0071C2"
                          viewBox="0 0 128 128"
                          size="medium"
                        >
                          <path d="M119.5 40.3a29 29 0 0 0-22.8-23.7 33.8 33.8 0 0 0-32.7 13 33.7 33.7 0 0 0-32.7-13A29 29 0 0 0 8.5 40.3c-1.3 7.2-.6 18.8 9.4 33.3A140 140 0 0 0 62 111.5a3.7 3.7 0 0 0 4 0c20.2-12 35-24.8 44.1-38 10-14.4 10.7-26 9.5-33.2zm-55.5 63c-33-20.1-50.8-43-47.7-61.6A20.7 20.7 0 0 1 33 24.3a22.3 22.3 0 0 1 4.5-.4c8.8 0 17.3 5.2 23.2 14.6a4 4 0 0 0 3.4 1.8 4 4 0 0 0 3.4-1.8c6-9.4 14.4-14.6 23.2-14.6a22.3 22.3 0 0 1 4.5.5 20.7 20.7 0 0 1 16.6 17.2c3 18.6-14.8 41.6-47.8 61.7z"></path>
                        </svg>
                      </button>

                      <ReserveButton>
                        <p>Reserve</p>
                      </ReserveButton>
                    </div>
                  </div>
                  <div className={styles.titleContainer}>
                    <h3>{hotel.propertyName}</h3>
                  </div>
                  <div className={styles.address}>
                    <span className={styles.mapPin}></span>
                    <p>{hotel.address}</p>
                  </div>
                </div>

                <HotelGallery hotel={hotel}></HotelGallery>
              </div>
            </div>

            <HotelFeatures features={hotel.features}></HotelFeatures>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>
                {hotel.detailedDescriptions.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </p>
              <div className={styles.reserveContainer}>
                <h3>Property highlights</h3>
                <h4>Perfect for 4-nights stay</h4>
                <p className={styles.regText}>
                  Highly rated by recent guests (8.2)
                </p>
                <h4>Breakfast info</h4>
                <p className={styles.regText}>
                  Continental, Vegetarian, Vegan, Gluten-free
                </p>

                <ReserveButton>
                  <p>Reserve</p>
                </ReserveButton>

                <button className={styles.savePropertyButton}>
                  <span>
                    <svg
                      fill="#0071C2"
                      viewBox="0 0 128 128"
                      size="medium"
                    >
                      <path d="M119.5 40.3a29 29 0 0 0-22.8-23.7 33.8 33.8 0 0 0-32.7 13 33.7 33.7 0 0 0-32.7-13A29 29 0 0 0 8.5 40.3c-1.3 7.2-.6 18.8 9.4 33.3A140 140 0 0 0 62 111.5a3.7 3.7 0 0 0 4 0c20.2-12 35-24.8 44.1-38 10-14.4 10.7-26 9.5-33.2zm-55.5 63c-33-20.1-50.8-43-47.7-61.6A20.7 20.7 0 0 1 33 24.3a22.3 22.3 0 0 1 4.5-.4c8.8 0 17.3 5.2 23.2 14.6a4 4 0 0 0 3.4 1.8 4 4 0 0 0 3.4-1.8c6-9.4 14.4-14.6 23.2-14.6a22.3 22.3 0 0 1 4.5.5 20.7 20.7 0 0 1 16.6 17.2c3 18.6-14.8 41.6-47.8 61.7z"></path>
                    </svg>
                  </span>
                  <p>Save the property</p>
                </button>
              </div>
            </div>

            <AvailabilityTable></AvailabilityTable>
          </Container>
        </section>
      </main>
    </>
  );
}

export function ReserveButton({ children }) {
  return <button className={styles.reserveButton}>{children}</button>;
}

export default HotelPage;
