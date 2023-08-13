import styles from './TopUniqueProperties.module.css';
import ItemsCarousel from '../ItemsCarousel/ItemsCarousel';
import MainPagePropertyCard from '../MainPagePropertyCard/MainPagePropertyCard';
import { useState } from 'react';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const tmpTrendingProps = [
  {
    id: 0,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    price: 563,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 1,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    price: 563,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 2,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    price: 563,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 3,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    price: 563,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 4,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    price: 563,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 5,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    price: 563,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 6,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    price: 563,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 7,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    price: 563,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
  {
    id: 8,
    propertyName: 'Agriturismo Cabrele',
    location: 'Italy, Santorso',
    rating: 9.3,
    reviews: 237,
    price: 563,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
  },
];

function TopUniqueProperties() {
  const [topUniqueProperties, setTopUniqueProperties] =
    useState(tmpTrendingProps);

  return (
    <div className={styles.topProperties}>
      <h3>Stay at our top unique properties</h3>
      <p>
        From castles and villas to boats and igloos, we&apos;ve got it
        all
      </p>

      <div className={styles.carousel}>
        <ItemsCarousel responsive={responsive}>
          {topUniqueProperties.map((property) => (
            <MainPagePropertyCard
              key={property.id}
              property={property}
            ></MainPagePropertyCard>
          ))}
        </ItemsCarousel>
      </div>
    </div>
  );
}

export default TopUniqueProperties;
