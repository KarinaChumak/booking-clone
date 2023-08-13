import { useState } from 'react';
import styles from './RecentSearches.module.css';
import RecentSearchCard from '../RecentSearchCard/RecentSearchCard';
import ItemsCarousel from '../ItemsCarousel/ItemsCarousel';

const tmpSearchList = [
  {
    locationId: 1,
    locationName: 'Zadar',
    locationImage:
      'https://cf.bstatic.com/xdata/images/city/square100/972725.webp?k=fd02f291aa7cfc3ee3d096fc36946e73c74b82b22bfab63bf62a92140343c937&o=',
    searchDetails: '27 Aug–2 Sept, 2 people',
  },
  {
    locationId: 2,
    locationName: 'Dubrovnik',
    locationImage:
      'https://cf.bstatic.com/xdata/images/city/square100/972725.webp?k=fd02f291aa7cfc3ee3d096fc36946e73c74b82b22bfab63bf62a92140343c937&o=',
    searchDetails: '27 Aug–2 Sept, 2 people',
  },
  {
    locationId: 3,
    locationName: 'Plitvice',
    locationImage:
      'https://cf.bstatic.com/xdata/images/city/square100/972725.webp?k=fd02f291aa7cfc3ee3d096fc36946e73c74b82b22bfab63bf62a92140343c937&o=',
    searchDetails: '27 Aug–2 Sept, 2 people',
  },
  {
    locationId: 4,
    locationName: 'Krk',
    locationImage:
      'https://cf.bstatic.com/xdata/images/city/square100/972725.webp?k=fd02f291aa7cfc3ee3d096fc36946e73c74b82b22bfab63bf62a92140343c937&o=',
    searchDetails: '27 Aug–2 Sept, 2 people',
  },
  {
    locationId: 5,
    locationName: 'Madeira',
    locationImage:
      'https://cf.bstatic.com/xdata/images/city/square100/972725.webp?k=fd02f291aa7cfc3ee3d096fc36946e73c74b82b22bfab63bf62a92140343c937&o=',
    searchDetails: '27 Aug–2 Sept, 2 people',
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function RecentSearches() {
  const [recentSearches] = useState(tmpSearchList);

  return (
    <div className={styles.recentSearches}>
      <h3> Your recent searches</h3>
      <div className={styles.carousel}>
        <ItemsCarousel responsive={responsive}>
          {recentSearches.map((location) => (
            <RecentSearchCard
              location={location}
              key={location.locationId}
            ></RecentSearchCard>
          ))}
        </ItemsCarousel>
      </div>
    </div>
  );
}

export default RecentSearches;
