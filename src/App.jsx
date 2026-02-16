import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home-page/home";
import Booking from "./components/Booking-page/book";
import Portfolio from "./components/Portfolio-page/portfolio";
import Timeline from "./components/TimeLine-page/timeline";
import Venues from "./components/Venue-page/venue";
import VenueDetail from "./components/Venue-page/VenueDetail";
import OurWorks from "./components/OurWork-page/ourwork";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/venue/:name" element={<VenueDetail />} />
        <Route path="/our-works" element={<OurWorks />} />
      </Routes>
    </>
  )
}

export default App
