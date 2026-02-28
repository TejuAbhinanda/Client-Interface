import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./VenueDetail.css";

import v1 from "../../assets/wedding-hero-1.jpg";
import v2 from "../../assets/wedding-hero-2.jpg";
import v3 from "../../assets/wedding-hero-3.jpg";
import v4 from "../../assets/wedding-hero-4.jpg";

const VenueDetails = () => {

  const { city, name } = useParams();
  const [activeTab, setActiveTab] = useState("portfolio");
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const venueInfo = {

    Bangalore: {
      "Royal Palace": {
        price: "1,50,000",
        capacity: "500",
        food: "Veg & Non-Veg",
        images: [v1, v2, v3, v4]
      },
      "Garden Hall": {
        price: "1,20,000",
        capacity: "300",
        food: "Veg",
        images: [v2, v1, v3, v4]
      },
      "Grand Resort": {
        price: "2,00,000",
        capacity: "700",
        food: "Veg & Non-Veg",
        images: [v3, v1, v2, v4]
      },
      "Elite Banquet": {
        price: "1,80,000",
        capacity: "600",
        food: "Veg & Non-Veg",
        images: [v4, v1, v2, v3]
      }
    },

    Goa: {
      "Beach Resort": {
        price: "3,00,000",
        capacity: "800",
        food: "Veg & Non-Veg",
        images: [v1, v2, v3, v4]
      },
      "Sea Palace": {
        price: "2,80,000",
        capacity: "500",
        food: "Veg & Non-Veg",
        images: [v2, v3, v1, v4]
      },
      "Sunset Hall": {
        price: "2,20,000",
        capacity: "350",
        food: "Veg",
        images: [v3, v1, v2, v4]
      },
      "Ocean View": {
        price: "3,50,000",
        capacity: "900",
        food: "Veg & Non-Veg",
        images: [v4, v3, v2, v1]
      }
    },

    Mangalore: {
      "Coastal Hall": {
        price: "1,40,000",
        capacity: "300",
        food: "Veg",
        images: [v1, v2, v3, v4]
      },
      "Temple Garden": {
        price: "1,60,000",
        capacity: "400",
        food: "Veg",
        images: [v2, v3, v1, v4]
      },
      "Palm Resort": {
        price: "2,10,000",
        capacity: "500",
        food: "Veg & Non-Veg",
        images: [v3, v1, v2, v4]
      },
      "Lotus Venue": {
        price: "1,80,000",
        capacity: "450",
        food: "Veg",
        images: [v4, v3, v2, v1]
      }
    },

    Shivamogga: {
      "Green Valley": {
        price: "1,20,000",
        capacity: "250",
        food: "Veg",
        images: [v1, v2, v3, v4]
      },
      "Forest Resort": {
        price: "1,90,000",
        capacity: "400",
        food: "Veg & Non-Veg",
        images: [v2, v1, v3, v4]
      },
      "River Hall": {
        price: "1,50,000",
        capacity: "350",
        food: "Veg",
        images: [v3, v4, v1, v2]
      },
      "Nature Palace": {
        price: "2,00,000",
        capacity: "600",
        food: "Veg & Non-Veg",
        images: [v4, v3, v2, v1]
      }
    }

  };

  const location = useLocation();
  const stateVenue = location.state?.venue;

  const venue = venueInfo[city]?.[name] || {
    price: stateVenue?.pricingText || "1,20,000",
    capacity: "500",
    food: "Veg & Non-Veg",
    images: stateVenue?.image ? [stateVenue.image, v2, v3, v4] : [v1, v2, v3, v4] // Default images, prioritizing the clicked image
  };

  const heroImage = venue.images[0];
  const decodedName = decodeURIComponent(name).replace(/-/g, ' ');

  // Compile the gallery dynamically
  const allImages = [];
  if (stateVenue?.image) {
    allImages.push(stateVenue.image); // Index 0 is always the hero cover

    // E.g., "/venue-images/Banglore/Bangalore/bangalore_image1.jpg"
    const pathParts = stateVenue.image.split('/');
    const filename = pathParts.pop(); // "bangalore_image1.jpg"
    const basePath = pathParts.join('/') + '/'; // "/venue-images/Banglore/Bangalore/"

    // Determine prefix "bangalore_image" or "image"
    const nameParts = filename.split('.');
    const fileBase = nameParts[0];
    const extension = nameParts[1];

    // We know fileBase is like "bangalore_image1" or "image3". 
    // Extract the non-numeric part to use as a prefix loop.
    const prefixMatch = fileBase.match(/^(.*?)\d+$/);
    let prefix = prefixMatch ? prefixMatch[1] : "image"; // "bangalore_image" or "image"

    // We will blindly try to load up to 18 more images for this specific venue
    // Assuming they will be named sequentially in the same folder.
    for (let i = 1; i <= 19; i++) {
      const testImage = `${basePath}${prefix}${i}.${extension}`;
      // Add them, but skip if it's identical to the hero we already pushed
      if (testImage !== stateVenue.image) {
        allImages.push(testImage);
      }
    }

    // Fill out to 19 to keep masonry stable using placeholders if they are short
    while (allImages.length < 19) {
      allImages.push(v1, v2, v3, v4);
    }
  } else {
    while (allImages.length < 19) {
      allImages.push(...venue.images);
    }
  }

  allImages.length = 19; // Cap it strictly at 19

  return (
    <div className="venue-detail-page-modern">
      {/* HERO SECTION */}
      <div className="vd-hero-container">
        <img src={heroImage} alt={decodedName} className="vd-hero-img" />
        <div className="vd-hero-overlay"></div>
        <div className="vd-hero-watermark">WedMeGood</div>
      </div>

      {/* MAIN CARD */}
      <div className="vd-main-card">
        <div className="vd-card-header">
          <div className="vd-card-title-col">
            <h1 className="vd-title">{decodedName}</h1>
            <p className="vd-subtitle">(Formerly known as {decodedName})</p>
          </div>
          <div className="vd-rating-box">
            <div className="vd-rating-score">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              4.8
            </div>
            <div className="vd-rating-reviews">11 reviews</div>
          </div>
        </div>

        {/* Address row */}
        <div className="vd-address-section">
          <div className="vd-address-line1">
            <svg className="icon-map" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Main Road, {city} <span className="view-map">(View on Map)</span></span>
          </div>
          <div className="vd-address-line2">
            Specific Area, {city}, India
          </div>
        </div>



      </div>

      {/* PORTFOLIO TABS */}
      <div className="vd-portfolio-container">
        <div className="vd-portfolio-tabs">
          <div className={`vd-ptab ${activeTab === 'portfolio' ? 'active' : ''}`} onClick={() => setActiveTab('portfolio')}>PORTFOLIO (19)</div>
          <div className={`vd-ptab ${activeTab === 'albums' ? 'active' : ''}`} onClick={() => setActiveTab('albums')}>ALBUMS (2)</div>
          <div className={`vd-ptab ${activeTab === 'videos' ? 'active' : ''}`} onClick={() => setActiveTab('videos')}>VIDEOS (0)</div>
        </div>

        {/* GALLERY */}
        {activeTab === 'portfolio' && (
          <div className="vd-photo-gallery-wrapper">
            <div className={showAllPhotos ? "vd-photo-masonry" : "vd-photo-grid"}>
              {allImages.slice(0, showAllPhotos ? allImages.length : 12).map((img, i) => {
                const masonryClass = i <= 13 ? `vd-masonry-item-${i}` : 'vd-masonry-item-default';
                const fallbacks = [v1, v2, v3, v4];
                return (
                  <img
                    key={`p-${i}`}
                    className={showAllPhotos ? masonryClass : ""}
                    src={img}
                    alt={`${decodedName} photo ${i + 1}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbacks[i % 4];
                    }}
                  />
                );
              })}
            </div>

            {!showAllPhotos && (
              <div className="vd-view-more-container">
                <button
                  className="vd-view-more-btn"
                  onClick={() => setShowAllPhotos(true)}
                >
                  View 7 more
                </button>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default VenueDetails;