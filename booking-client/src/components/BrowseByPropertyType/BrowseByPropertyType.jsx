import styles from './BrowseByPropertyType.module.css';
import ItemsCarousel from '../ItemsCarousel/ItemsCarousel';
import PropertyTypeCard from '../PropertyTypeCard/PropertyTypeCard';
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
    items: 2,
  },
};

const tmpPropertiesByType = [
  {
    id: 1,
    propertyType: 'Apartments',
    image:
      'https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',
    numProperties: 1229981,
  },
  {
    id: 2,
    propertyType: 'Resorts',
    image:
      'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',
    numProperties: 194698,
  },

  {
    id: 3,
    propertyType: 'Villas',
    image:
      'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',
    numProperties: 647216,
  },
  {
    id: 4,
    propertyType: 'Cabins',
    image:
      'https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=',
    numProperties: 2342876,
  },
  {
    id: 5,
    propertyType: 'Cottages',
    image:
      'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=',
    numProperties: 706234,
  },
  {
    id: 6,
    propertyType: 'Guest houses',
    image:
      'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=',
    numProperties: 234234,
  },

  {
    id: 7,
    propertyType: 'Hostels',
    image:
      'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o=',
    numProperties: 12897,
  },
];

function BrowseByPropertyType() {
  const [propertiesByType] = useState(tmpPropertiesByType);

  return (
    <div className={styles.browseByType}>
      <h3> Browse by property type</h3>
      <div className={styles.carousel}>
        <ItemsCarousel responsive={responsive}>
          {propertiesByType.map((propType) => (
            <PropertyTypeCard
              key={propType.id}
              property={propType}
            ></PropertyTypeCard>
          ))}
        </ItemsCarousel>
      </div>
    </div>
  );
}

export default BrowseByPropertyType;
