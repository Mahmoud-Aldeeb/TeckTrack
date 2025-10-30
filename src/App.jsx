
import './App.css'
import Home from './componants/home/Home'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './componants/common/Navbar'
import Footer from './componants/common/Footer'
import RoadmapPage from './componants/roadmap/RoadmapPage';
function App() {


  return (
    <>


      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roadmap' element={<RoadmapPage />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
