import styles from './SearchArea.module.css';
import SearchBox from '../SearchBox/SearchBox';
import Container from '../Container/Container';

function SearchArea() {
  return (
    <div className={styles.searchArea}>
      <Container>
        <div className={styles.intro}>
          <h1>Find your next stay</h1>
          <h3>Search low prices on hotels, homes and much more...</h3>
        </div>
        <SearchBox showTravelOptions={true}></SearchBox>
      </Container>
    </div>
  );
}

export default SearchArea;
