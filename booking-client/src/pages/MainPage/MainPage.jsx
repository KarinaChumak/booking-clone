import styles from './MainPage.module.css';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import SearchArea from '../../components/SearchArea/SearchArea';
import RecentSearches from '../../components/RecentSearches/RecentSearches';
import Container from '../../components/Container/Container';
function MainPage() {
  return (
    <>
      <header>
        <Header></Header>
        <NavBar></NavBar>
      </header>
      <main>
        <SearchArea></SearchArea>
        <section>
          <Container>
            <RecentSearches></RecentSearches>
          </Container>
        </section>
      </main>
    </>
  );
}

export default MainPage;
