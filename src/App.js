import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from "./pages/Index";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Discover from "./pages/Discover";
import NotFound from "./components/Template/NotFound";
import './App.css'

const App = () => {
  return (
    <Router >
      <Routes >
        <Route path="/" element={<Index />}/>
        <Route path="/detail/:media/:id" element={<Detail />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/movie/popular" element={<Discover title="Popular Movies" media="movie" name="popular"/>}/>
        <Route path="/movie/top-rated" element={<Discover title="Top Rated Movies" media="movie" name="top_rated"/>}/>
        <Route path="/movie/now-playing" element={<Discover title="Now Playing Movies" media="movie" name="now_playing"/>}/>
        <Route path="/movie/upcoming" element={<Discover title="Upcoming Movies" media="movie" name="upcoming"/>}/>
        <Route path="/tv/popular" element={<Discover title="Popular TV Series" media="tv" name="popular"/>}/>
        <Route path="/tv/top-rated" element={<Discover title="Popular TV Series" media="tv" name="popular"/>}/>
        <Route path="/people/popular" element={<Discover title="Popular People" media="person" name="popular"/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App;
