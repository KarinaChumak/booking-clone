import { useState } from 'react';
import styles from './RecentSearches.module.css';
import RecentSearchCard from '../RecentSearchCard/RecentSearchCard';

import ButtonPrevNextArrow from '../ButtonPrevNextArrow/ButtonPrevNextArrow';
import HorizontalScrolList from '../HorizontalScrolList/HorizontalScrolList';

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

const CARDS_TO_SHOW = 3;

function RecentSearches() {
  const [recentSearches, setRecentSearches] = useState(tmpSearchList);

  return (
    <div className={styles.recentSearches}>
      <h3> Your recent searches</h3>
      <HorizontalScrolList numItemsToShow={CARDS_TO_SHOW}>
        {recentSearches.map((location) => (
          <RecentSearchCard
            location={location}
            key={location.locationId}
          ></RecentSearchCard>
        ))}
      </HorizontalScrolList>
    </div>
  );
}

export default RecentSearches;
