import React, { useState } from "react";
import "./venue.css";
import { Link } from "react-router-dom";

import v1 from "../../assets/wedding-hero-1.jpg";
import v2 from "../../assets/wedding-hero-2.jpg";
import v3 from "../../assets/wedding-hero-3.jpg";
import v4 from "../../assets/wedding-hero-4.jpg";

const Venue = () => {

  const venuesData = {
    Bangalore: [
      { name: "Royal Palace", img: v1 },
      { name: "Garden Hall", img: v2 },
      { name: "Grand Resort", img: v3 },
      { name: "Elite Banquet", img: v4 },
    ],
    Goa: [
      { name: "Beach Resort", img: v2 },
      { name: "Sea Palace", img: v3 },
      { name: "Sunset Hall", img: v1 },
      { name: "Ocean View", img: v4 },
    ],
    Mangalore: [
      { name: "Coastal Hall", img: v3 },
      { name: "Temple Garden", img: v1 },
      { name: "Palm Resort", img: v2 },
      { name: "Lotus Venue", img: v4 },
    ],
    Shivamogga: [
      { name: "Green Valley", img: v1 },
      { name: "Forest Resort", img: v2 },
      { name: "River Hall", img: v3 },
      { name: "Nature Palace", img: v4 },
    ],
  };

  const [selectedCity, setSelectedCity] = useState("Bangalore");

  return (
    <div className="venue-page">

      {/* HERO */}
      <div className="venue-hero">
        <h1>FIND YOUR DREAM WEDDING VENUE</h1>
        <p>Explore the finest wedding venue tailored to your desires</p>
      </div>

      {/* TITLE */}
      <div className="venue-title">
        <h2>Venues</h2>
        <p>Available wedding venue by location</p>
      </div>

      {/* LOCATION BUTTONS */}
      <div className="venue-locations">
        {Object.keys(venuesData).map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={selectedCity === city ? "active-city" : ""}
          >
            {city}
          </button>
        ))}
      </div>

      {/* VENUE GRID */}
      <div className="venue-grid">
        {venuesData[selectedCity].map((venue, index) => (
          
          /* 🔥 CLICKABLE CARD */
          <Link 
            to={`/venue/${venue.name}`} 
            className="venue-card" 
            key={index}
          >
            <img src={venue.img} alt={venue.name} />
            <h3>{venue.name}</h3>
          </Link>

        ))}
      </div>

    </div>
  );
};

export default Venue;