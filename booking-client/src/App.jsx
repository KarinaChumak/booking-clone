import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import LoginSignupPage from './pages/LoginSignupPage/LoginSignupPage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import { AuthProvider } from './contexts/AuthContext';
import HotelPage from './pages/HotelPage/HotelPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/stays"
            element={<MainPage></MainPage>}
          ></Route>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route
            path="/login"
            element={<LoginSignupPage></LoginSignupPage>}
          ></Route>
          <Route
            path="/searchresults"
            element={<SearchResultsPage></SearchResultsPage>}
          ></Route>
          <Route
            path="/hotel"
            element={<HotelPage></HotelPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
