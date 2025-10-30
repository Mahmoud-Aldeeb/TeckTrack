
import './App.css'
import Home from './componants/home/Home'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './componants/common/Navbar'
import Footer from './componants/common/Footer'
import RoadmapPage from './componants/roadmap/RoadmapPage';
import Reviews from './componants/reviews/Reviews';

import TrackDetails from './componants/roadmap/TrackDetails/TrackDetails';
function App() {


  return (
    <>


      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roadmap' element={<RoadmapPage />} />
           <Route path='/reviews' element={<Reviews/>} />
            <Route path='/trackdetails/:slug' element={<TrackDetails/>} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
