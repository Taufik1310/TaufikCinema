import React, { Suspense, lazy } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Main from "./layouts/Main";

const Index = lazy(() => import('./pages/Index'))
const Detail = lazy(() => import('./pages/Detail'))
const Search = lazy(() => import('./pages/Index'))
const Discover = lazy(() => import('./pages/Discover'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {
  return (
    <Router >
      <Suspense fallback={<Main />}>
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
      </Suspense>
    </Router>
  )
}

export default App;
