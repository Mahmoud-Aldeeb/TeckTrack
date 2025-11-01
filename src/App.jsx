import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import RoadmapPage from './pages/Roadmap/RoadmapPage';
import TrackDetails from './pages/Roadmap/TrackDetails/TrackDetails';
import SubTrackDetails from './pages/Roadmap/TrackDetails/SubTrackDetails.jsx';
import SubSubTrackDetails from './pages/Roadmap/TrackDetails/SubSubTrackDetails.jsx';
// import Reviews from './pages/Reviews/Reviews';
import Nav from './componants/layout/Nav.jsx';
import Footer from './componants/layout/Footer.jsx';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roadmap' element={<RoadmapPage />} />
        <Route path='/trackdetails/:slug' element={<TrackDetails />} />
        <Route path="/trackdetails/:slug/:subSlug" element={<SubTrackDetails />} />
        <Route path="/trackdetails/:slug/:subSlug/:subSubSlug" element={<SubSubTrackDetails />} />

        {/* <Route path='/reviews' element={<Reviews />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
