import { useState } from 'react';
import styles from './SearchResultsPage.module.css';

import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';
import SearchBox from '../../components/SearchBox/SearchBox';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import MapPreview from '../../components/MapPreview/MapPreview';
import SearchResultsCard from '../../components/SearchResultsCard/SearchResultsCard';

const tmpSearchResults = [
  {
    id: 0,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    freeCancellation: true,
    prepaymentNeeded: false,
    rooms: [
      {
        name: 'Triple Room with Double Bed and Bunk Bed',
        beds: 2,
        numPeople: 3,
        pricePerNight: 100,
      },
    ],
    address: '97 Reeperbahn, St. Pauli, 20359 Hamburg, Germany ',
    stars: 3,
    price: 563,
    tags: ['Getaway Deal', 'Free airport taxi'],

    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 1,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    freeCancellation: true,
    prepaymentNeeded: false,
    rooms: [
      {
        name: 'Triple Room with Double Bed and Bunk Bed',
        beds: 2,
        numPeople: 3,
        pricePerNight: 100,
      },
    ],
    address: '97 Reeperbahn, St. Pauli, 20359 Hamburg, Germany ',
    stars: 3,
    price: 563,
    tags: ['Getaway Deal', 'Free airport taxi'],

    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 2,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    freeCancellation: true,
    prepaymentNeeded: false,
    rooms: [
      {
        name: 'Triple Room with Double Bed and Bunk Bed',
        beds: 2,
        numPeople: 3,
        pricePerNight: 100,
      },
    ],
    address: '97 Reeperbahn, St. Pauli, 20359 Hamburg, Germany ',
    stars: 3,
    price: 563,
    tags: ['Getaway Deal', 'Free airport taxi'],

    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 3,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    freeCancellation: true,
    prepaymentNeeded: false,
    rooms: [
      {
        name: 'Triple Room with Double Bed and Bunk Bed',
        beds: 2,
        numPeople: 3,
        pricePerNight: 100,
      },
    ],
    address: '97 Reeperbahn, St. Pauli, 20359 Hamburg, Germany ',
    stars: 3,
    price: 563,
    tags: ['Getaway Deal', 'Free airport taxi'],

    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 4,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    freeCancellation: true,
    prepaymentNeeded: false,
    rooms: [
      {
        name: 'Triple Room with Double Bed and Bunk Bed',
        beds: 2,
        numPeople: 3,
        pricePerNight: 100,
      },
    ],
    address: '97 Reeperbahn, St. Pauli, 20359 Hamburg, Germany ',
    stars: 3,
    price: 563,
    tags: ['Getaway Deal', 'Free airport taxi'],

    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 5,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    freeCancellation: true,
    prepaymentNeeded: false,
    rooms: [
      {
        name: 'Triple Room with Double Bed and Bunk Bed',
        beds: 2,
        numPeople: 3,
        pricePerNight: 100,
      },
    ],
    address: '97 Reeperbahn, St. Pauli, 20359 Hamburg, Germany ',
    stars: 3,
    price: 563,
    tags: ['Getaway Deal', 'Free airport taxi'],

    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 6,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    freeCancellation: true,
    prepaymentNeeded: false,
    rooms: [
      {
        name: 'Triple Room with Double Bed and Bunk Bed',
        beds: 2,
        numPeople: 3,
        pricePerNight: 100,
      },
    ],
    address: '97 Reeperbahn, St. Pauli, 20359 Hamburg, Germany ',
    stars: 3,
    price: 563,
    tags: ['Getaway Deal', 'Free airport taxi'],

    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 7,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    freeCancellation: true,
    prepaymentNeeded: false,
    rooms: [
      {
        name: 'Triple Room with Double Bed and Bunk Bed',
        beds: 2,
        numPeople: 3,
        pricePerNight: 100,
      },
    ],
    address: '97 Reeperbahn, St. Pauli, 20359 Hamburg, Germany ',
    stars: 3,
    price: 563,
    tags: ['Getaway Deal', 'Free airport taxi'],

    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 8,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    freeCancellation: true,
    prepaymentNeeded: false,
    rooms: [
      {
        name: 'Triple Room with Double Bed and Bunk Bed',
        beds: 2,
        numPeople: 3,
        pricePerNight: 100,
      },
    ],
    address: '97 Reeperbahn, St. Pauli, 20359 Hamburg, Germany ',
    stars: 3,
    price: 563,
    tags: ['Getaway Deal', 'Free airport taxi'],

    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
];

function SearchResultsPage() {
  const [city, setCity] = useState('Paris');
  const numPropertiesFound = 1742;

  return (
    <>
      <header>
        <Header></Header>
        <NavBar></NavBar>
      </header>
      <main>
        <div className={styles.searchBoxContainer}>
          <SearchBox></SearchBox>
        </div>
        <section>
          <Container>
            {/* To avoid margin collapse. TODO: implement search history stack */}
            <br></br>
            <div className={styles.searchResultsLayout}>
              <div className={styles.filterSidebar}>
                <MapPreview></MapPreview>
                <FilterSidebar></FilterSidebar>
              </div>
              <div className={styles.resultsContainer}>
                <h3 className={styles.resultsTitle}>
                  {city}: {numPropertiesFound.toLocaleString('us')}{' '}
                  properties found
                </h3>
                <button className={styles.sortBy}>
                  <p>Sort by: Top picks for long stays</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36zm6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22z"></path>
                    </svg>
                  </span>
                </button>
                <div className={styles.resultsList}>
                  {tmpSearchResults.map((property) => (
                    <SearchResultsCard
                      key={property.id}
                      property={property}
                    ></SearchResultsCard>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default SearchResultsPage;
