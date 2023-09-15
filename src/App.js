import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import VideoDetails from "./pages/videodetail/VideoDetails";
import MovieSearch from './pages/moviesearch/MovieSearch';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies/:id" element={<VideoDetails />} />
          <Route path="/search/:query" element={<MovieSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;