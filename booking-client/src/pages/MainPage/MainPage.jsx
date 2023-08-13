import styles from './MainPage.module.css';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import SearchArea from '../../components/SearchArea/SearchArea';
import RecentSearches from '../../components/RecentSearches/RecentSearches';
import Container from '../../components/Container/Container';
import BrowseByPropertyType from '../../components/BrowseByPropertyType/BrowseByPropertyType';
import TrendingDestinations from '../../components/TrendingDestinations/TrendingDestinations';

import TopUniqueProperties from '../../components/TopUniqueProperties/TopUniqueProperties';

import FindNextBanner from '../../components/FindNextBanner/FindNextBanner';
function MainPage() {
  return (
    <>
      <header>
        <Header></Header>
        <NavBar></NavBar>
      </header>
      <main>
        <SearchArea></SearchArea>
        <section className={styles.mainPage}>
          <Container>
            <RecentSearches></RecentSearches>
            <BrowseByPropertyType></BrowseByPropertyType>
            <TrendingDestinations></TrendingDestinations>
            <TopUniqueProperties></TopUniqueProperties>
            <FindNextBanner></FindNextBanner>
          </Container>
        </section>
      </main>
    </>
  );
}

export default MainPage;
