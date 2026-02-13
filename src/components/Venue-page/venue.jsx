import React, { useState } from 'react';

import './venue.css';

const VenuesPage = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const locations = [
        'Bangalore',
        'Goa',
        'Mangalore',
        'Shivamogga'
    ];

    const venuesData = {
        Bangalore: [
            { id: 1, name: 'Venue 1', image: 'src/assets/v1.jpg' },
            { id: 2, name: 'Venue 2', image: 'src/assets/v2.jpg' },
            { id: 3, name: 'Venue 3', image: 'src/assets/v3.jpg' },
            { id: 4, name: 'Venue 4', image: 'src/assets/v4.jpg' }
        ],
        Goa: [
            { id: 1, name: 'Venue 1', image: 'src/assets/v4.jpg' },
            { id: 2, name: 'Venue 2', image: 'src/assets/v1.jpg' },
            { id: 3, name: 'Venue 3', image: 'src/assets/v2.jpg' },
            { id: 4, name: 'Venue 4', image: 'src/assets/v3.jpg' }
        ],
        Mangalore: [
            { id: 1, name: 'Venue 1', image: 'src/assets/v4.jpg' },
            { id: 2, name: 'Venue 2', image: 'src/assets/v3.jpg' },
            { id: 3, name: 'Venue 3', image: 'src/assets/v2.jpg' },
            { id: 4, name: 'Venue 4', image: 'src/assets/v1.jpg' }
        ],
        Shivamogga: [
            { id: 1, name: 'Venue 1', image: 'src/assets/v1.jpg' },
            { id: 2, name: 'Venue 2', image: 'src/assets/v2.jpg' },
            { id: 3, name: 'Venue 3', image: 'src/assets/v3.jpg' },
            { id: 4, name: 'Venue 4', image: 'src/assets/v4.jpg' }
        ]
    };



    return (
        <div className="venue-page">

            {/* Navbar */}


            {/* Main Content */}
            <div className="main-content">

                <header className="page-header">
                    <h1>Venues</h1>
                    <p>Available wedding venues by location</p>
                </header>

                <div className="content-area">

                    {/* Sidebar */}
                    <aside className="sidebar">
                        <div className="location-list">
                            {locations.map(location => (
                                <button
                                    key={location}
                                    className={`location-btn ${selectedLocation === location ? 'active' : ''}`}
                                    onClick={() => setSelectedLocation(location)}
                                >
                                    {location}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Venue Grid */}
                    <section className="image-display-area">
                        {selectedLocation ? (
                            <div className="venue-grid fade-in">
                                {venuesData[selectedLocation].map(venue => (
                                    <div key={venue.id} className="venue-card">
                                        <div className="image-wrapper">
                                            <img src={venue.image} alt={venue.name} />
                                        </div>
                                        <span className="venue-name">{venue.name}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="idle-state" />
                        )}
                    </section>

                </div>
            </div>
        </div>
    );
};

export default VenuesPage;
