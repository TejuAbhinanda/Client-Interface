import React, { useState } from "react";
import "./venue.css";
import { Link } from "react-router-dom";

import v1 from "../../assets/wedding-hero-1.jpg";
import v2 from "../../assets/wedding-hero-2.jpg";
import v3 from "../../assets/wedding-hero-3.jpg";
import v4 from "../../assets/wedding-hero-4.jpg";
import v5 from "../../assets/wedding-hero-5.jpg";
import v6 from "../../assets/wedding-hero-6.jpg";
import v7 from "../../assets/wedding-hero-7.jpg";
import v8 from "../../assets/wedding-hero-8.jpg";


const Venue = () => {

  const venuesData = {
    Bangalore: [
      { name: "Royal Palace", img: v1 },
      { name: "Garden Hall", img: v2 },
      { name: "Grand Resort", img: v3 },
      { name: "Elite Banquet", img: v4 },
      { name: "luxury Banquet", img: v5 },
      { name: "Resort Banquet", img: v6 },
      { name: "Royal hall", img: v7 },
      { name: "Grand Banquet", img: v8 }
    ],
    Goa: [
      { name: "Beach Resort", img: v2 },
      { name: "Sea Palace", img: v3 },
      { name: "Sunset Hall", img: v1 },
      { name: "Ocean View", img: v4 },
      { name: "luxury Banquet", img: v5 },
      { name: "Resort Banquet", img: v6 },
      { name: "Royal hall", img: v7 },
      { name: "Grand Banquet", img: v8 }
    ],
    Mangalore: [
     { name: "Royal Palace", img: v1 },
      { name: "Garden Hall", img: v2 },
      { name: "Grand Resort", img: v3 },
      { name: "Elite Banquet", img: v4 },
      { name: "luxury Banquet", img: v5 },
      { name: "Resort Banquet", img: v6 },
      { name: "Royal hall", img: v7 },
      { name: "Grand Banquet", img: v8 }
    ],

    Shivamogga: [
      { name: "Beach Resort", img: v2 },
      { name: "Sea Palace", img: v3 },
      { name: "Sunset Hall", img: v1 },
      { name: "Ocean View", img: v4 },
      { name: "luxury Banquet", img: v5 },
      { name: "Resort Banquet", img: v6 },
      { name: "Royal hall", img: v7 },
      { name: "Grand Banquet", img: v8 }
    ],
  };

  const [selectedCity, setSelectedCity] = useState("Bangalore");

  return (
    <div className="venue-page">

       {/* TITLE */}
      <div className="venue-title">
        <h2>Venues</h2>
      </div>

      {/* HERO */}
      <div className="venue-hero">
        <h1>FIND YOUR DREAM WEDDING VENUE</h1>
        <p>Explore the finest wedding venue tailored to your desires</p>
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