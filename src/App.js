import './App.css';

// react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Routes
import {Routes, Route} from "react-router-dom";

// Pages
import HomePage from './pages/Home.Page';
import MoviePage from './pages/Movie.Page';
import PlayPage from './pages/Play.Page';

// layouts


function App() {
  return <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/movie/:id' element={<MoviePage />} />
    <Route path='/plays' element={<PlayPage />} />
  </Routes>
}

export default App;
