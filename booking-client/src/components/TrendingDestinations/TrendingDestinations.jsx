import styles from './TrendingDestinations.module.css';

import TrendingDestinationCard from '../TrendingDestinationCard/TrendingDestinationCard';

const tmpTravelDestinations = [
  {
    destName: 'Dubrovnik',
    emoji: '🇭🇷',
    image:
      'https://cf.bstatic.com/xdata/images/city/600x600/972725.jpg?k=fd02f291aa7cfc3ee3d096fc36946e73c74b82b22bfab63bf62a92140343c937&o=',
  },
];

function TrendingDestinations() {
  return (
    <div className={styles.trendingDest}>
      <h3>Trending destinations</h3>
      <p>Travellers searching for Croatia also booked these</p>
      <div className={styles.row}>
        <TrendingDestinationCard
          dest={tmpTravelDestinations[0]}
        ></TrendingDestinationCard>
        <TrendingDestinationCard
          dest={tmpTravelDestinations[0]}
        ></TrendingDestinationCard>
      </div>
      <div className={styles.row}>
        <TrendingDestinationCard
          dest={tmpTravelDestinations[0]}
        ></TrendingDestinationCard>
        <TrendingDestinationCard
          dest={tmpTravelDestinations[0]}
        ></TrendingDestinationCard>
        <TrendingDestinationCard
          dest={tmpTravelDestinations[0]}
        ></TrendingDestinationCard>
      </div>
    </div>
  );
}

export default TrendingDestinations;
