import React from "react";
import { useParams } from "react-router-dom";
import "./VenueDetail.css";

import v1 from "../../assets/wedding-hero-1.jpg";
import v2 from "../../assets/wedding-hero-2.jpg";
import v3 from "../../assets/wedding-hero-3.jpg";
import v4 from "../../assets/wedding-hero-4.jpg";

const VenueDetails = () => {
  const { name } = useParams();   // get venue name from URL

  // Dummy data for all venues
const venueInfo = {
  // 🔵 Bangalore
  "Royal Palace": {
    city: "Bangalore",
    price: "1,50,000",
    capacity: "500 Guests",
    food: "Veg & Non-Veg",
    images: [v1, v2, v3, v4]
  },
  "Garden Hall": {
    city: "Bangalore",
    price: "1,20,000",
    capacity: "300 Guests",
    food: "Veg",
    images: [v2, v1, v3, v4]
  },
  "Grand Resort": {
    city: "Bangalore",
    price: "2,00,000",
    capacity: "700 Guests",
    food: "Veg & Non-Veg",
    images: [v3, v1, v2, v4]
  },
  "Elite Banquet": {
    city: "Bangalore",
    price: "1,80,000",
    capacity: "600 Guests",
    food: "Veg & Non-Veg",
    images: [v4, v1, v2, v3]
  },

  // 🟡 Goa
  "Beach Resort": {
    city: "Goa",
    price: "3,00,000",
    capacity: "800 Guests",
    food: "Veg & Non-Veg",
    images: [v2, v3, v1, v4]
  },
  "Sea Palace": {
    city: "Goa",
    price: "2,80,000",
    capacity: "500 Guests",
    food: "Veg & Non-Veg",
    images: [v3, v1, v2, v4]
  },
  "Sunset Hall": {
    city: "Goa",
    price: "2,20,000",
    capacity: "350 Guests",
    food: "Veg",
    images: [v1, v2, v3, v4]
  },
  "Ocean View": {
    city: "Goa",
    price: "3,50,000",
    capacity: "900 Guests",
    food: "Veg & Non-Veg",
    images: [v4, v3, v2, v1]
  },

  // 🟢 Mangalore
  "Coastal Hall": {
    city: "Mangalore",
    price: "1,40,000",
    capacity: "300 Guests",
    food: "Veg",
    images: [v3, v2, v1, v4]
  },
  "Temple Garden": {
    city: "Mangalore",
    price: "1,60,000",
    capacity: "400 Guests",
    food: "Veg",
    images: [v1, v3, v2, v4]
  },
  "Palm Resort": {
    city: "Mangalore",
    price: "2,10,000",
    capacity: "500 Guests",
    food: "Veg & Non-Veg",
    images: [v2, v4, v1, v3]
  },
  "Lotus Venue": {
    city: "Mangalore",
    price: "1,80,000",
    capacity: "450 Guests",
    food: "Veg",
    images: [v4, v1, v2, v3]
  },

  // 🟣 Shivamogga
  "Green Valley": {
    city: "Shivamogga",
    price: "1,20,000",
    capacity: "250 Guests",
    food: "Veg",
    images: [v1, v2, v3, v4]
  },
  "Forest Resort": {
    city: "Shivamogga",
    price: "1,90,000",
    capacity: "400 Guests",
    food: "Veg & Non-Veg",
    images: [v2, v1, v3, v4]
  },
  "River Hall": {
    city: "Shivamogga",
    price: "1,50,000",
    capacity: "350 Guests",
    food: "Veg",
    images: [v3, v4, v1, v2]
  },
  "Nature Palace": {
    city: "Shivamogga",
    price: "2,00,000",
    capacity: "600 Guests",
    food: "Veg & Non-Veg",
    images: [v4, v3, v2, v1]
  }
};

  const venue = venueInfo[name];

  if (!venue) {
    return <h2 style={{marginTop:"120px", textAlign:"center"}}>Venue not found</h2>;
  }

  return (
    <div className="venue-detail-page">

      {/* TOP BANNER */}
      <div className="venue-detail-hero">
        <h1>{name}</h1>
        <p>{venue.city}</p>
        <button className="check-btn">Check availability →</button>
      </div>

      {/* ABOUT */}
      <div className="venue-about">
        <h2>About the Venue</h2>
        <p>Description about the venue</p>

        <div className="venue-info-box">
          <div>Capacity: {venue.capacity}</div>
          <div>Food: {venue.food}</div>
          <div>Starting Price: ₹{venue.price}</div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="venue-gallery">
        <h2>Image Gallery</h2>
        <div className="gallery-grid">
          {venue.images.map((img, i) => (
            <img key={i} src={img} alt="venue" />
          ))}
        </div>
      </div>

      {/* LOCATION */}
      <div className="venue-location">
        <h2>Location of the Venue</h2>
        <p>{venue.city}</p>
      </div>

    </div>
  );
};

export default VenueDetails;