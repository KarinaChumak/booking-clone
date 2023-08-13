import styles from './FilterSidebar.module.css';
import MapPreview from '../MapPreview/MapPreview';
import Checkbox from '../Checkbox/Checkbox';

const filters = [
  {
    filterName: 'Property rating',
    values: [
      { name: '1 star/other ratings', value: 1 },
      { name: '2 star/other ratings', value: 2 },
      { name: '3 star/other ratings', value: 3 },
      { name: '4 star/other ratings', value: 4 },
      { name: '5 star/other ratings', value: 5 },
    ],
  },
  {
    filterName: 'Property Type',
    values: [
      { name: 'Vacation rentals', value: 1 },
      { name: 'Apartments', value: 2 },
      { name: 'Hotels', value: 3 },
    ],
  },
  {
    filterName: 'Bed Preference',
    values: [
      { name: 'Twin beds', value: 1 },
      { name: 'Double bad', value: 2 },
    ],
  },
  {
    filterName: 'Facilities',
    values: [
      { name: 'Free WiFi', value: 1 },
      { name: 'Pet friendly', value: 2 },
      { name: 'Restaurant', value: 3 },
      { name: 'Spa', value: 4 },
      { name: 'Room service', value: 5 },
      { name: 'Parking', value: 6 },
    ],
  },

  {
    filterName: 'Review score',
    values: [
      { name: 'Wonderful: 9+', value: 1 },
      { name: 'Very good: 8+', value: 2 },
      { name: 'Good: 7+', value: 3 },
      { name: 'Pleasant: 6+', value: 4 },
    ],
  },
];

function FilterSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <h3>Filter by:</h3>
      </div>

      {filters.map((item) => (
        <FilterSection
          filter={item}
          key={item.filterName}
        ></FilterSection>
      ))}
    </div>
  );
}

function FilterSection({ filter }) {
  return (
    <div className={styles.filterSection}>
      <h3>{filter.filterName}</h3>

      {filter.values.map((value) => (
        <FilterRow
          title={value.name}
          numResults={12}
          isChecked={false}
          onClick={() => {}}
          id={1}
          key={value.name}
        ></FilterRow>
      ))}
    </div>
  );
}

function FilterRow({ title, numResults, isChecked, onClick, id }) {
  return (
    <div className={styles.filterRow}>
      <Checkbox
        isChecked={isChecked}
        onClick={onClick}
        checkbox_id={id}
      >
        {title}
      </Checkbox>
      <p className={styles.numResults}>{numResults}</p>
    </div>
  );
}

export default FilterSidebar;
