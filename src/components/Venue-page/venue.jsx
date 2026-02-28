import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.png';
import './venue.css';

const VenuesPage = () => {
    const [selectedLocation, setSelectedLocation] = useState('Bangalore');
    const [viewMode, setViewMode] = useState('list'); // Default to list or grid based on preference
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef(null);

    // Close search dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const locations = [
        'Bangalore',
        'Goa',
        'Mangalore',
        'Shivamogga'
    ];

    const venuesData = [
        {
            id: 1,
            name: 'Aura by Area',
            image: '/venue-images/Banglore/Bangalore/bangalore_image1.jpg',
            rating: '5.0',
            reviews: '162',
            location: 'Bangalore',
        },
        {
            id: 2,
            name: 'Mandara Wedding and Events',
            image: '/venue-images/Banglore/Bangalore/bangalore_image2.jpg',
            rating: '5.0',
            location: 'North Bangalore',
        },
        {
            id: 3,
            name: 'Samaya Venue & Leisure',
            image: '/venue-images/Banglore/Bangalore/bangalore_image3.jpg',
            rating: '4.8',
            location: 'Bangalore',
        },
        {
            id: 4,
            name: 'Aarambha',
            image: '/venue-images/Banglore/Bangalore/bangalore_image4.jpg',
            rating: '5.0',
            location: 'North Bangalore',
        },
        {
            id: 5,
            name: 'Kalyani Courtyard',
            image: '/venue-images/Banglore/Bangalore/bangalore_image5.jpg',
            rating: '5.0',
            location: 'North Bangalore',
        },
        {
            id: 6,
            name: "Fiestaa Resort & Events Venue",
            image: '/venue-images/Banglore/Bangalore/bangalore_image6.jpg',
            rating: '5.0',
            location: 'North Bangalore',

        },
        {
            id: 7,
            name: 'Temple Tree Farm',
            image: '/venue-images/Banglore/Bangalore/bangalore_image7.jpg',
            rating: '5.0',
            location: 'Bangalore',
        },

        {
            id: 8,
            name: 'Chitrakoot Wedding Venue',
            image: '/venue-images/Banglore/Bangalore/bangalore_image8.jpg',
            rating: '5.0',
            location: 'Bangalore',

        },
        {
            id: 9,
            name: 'Ambaari',
            image: '/venue-images/Banglore/Bangalore/bangalore_image9.jpg',
            rating: '5.0',
            location: 'Bangalore',

        },
        {
            id: 10,
            name: 'Samavana',
            image: '/venue-images/Banglore/Bangalore/bangalore_image10.jpg',
            rating: '5.0',
            location: 'Bangalore',

        },

        {
            id: 11,
            name: 'Apira Orchards',
            image: '/venue-images/Banglore/Bangalore/bangalore_image11.jpg',
            rating: '5.0',
            location: 'Bangalore',

        },


        {
            id: 101,
            name: 'Regenta-Baywatch-Resort',
            image: '/venue-images/Banglore/Goa/image1.png',
            rating: '4.6',
            reviews: '162',
            location: 'Goa',
            type: 'Wedding resort',
        },
        {
            id: 102,
            name: 'Goa-Marriott-Resort-and-Spa',
            image: '/venue-images/Banglore/Goa/image2.png',
            rating: '5.0',
            reviews: '4',
            location: 'Miramar Goa',
            type: 'Resort',
        },
        {
            id: 103,
            name: 'The-Windflower-Resorts-and-Spa-Varca-Goa-A-Beach-Resort',
            image: '/venue-images/Banglore/Goa/image3.png',
            rating: '5.0',
            reviews: '11',
            location: 'Goa',
            type: 'Hotel with Banquet & Lawn',
        },
        {
            id: 104,
            name: 'Holiday-Inn-Resort-Goa-an-IHG-Hote',
            image: '/venue-images/Banglore/Goa/image4.png',
            rating: '4.5',
            reviews: '16',
            location: 'Cavelossim,Goa',
            type: 'Beach front Venue',
        },
        {
            id: 105,
            name: 'Planet-Hollywood-Beach-Resort',
            image: '/venue-images/Banglore/Goa/image5.png',
            rating: '4.8',
            reviews: '16',
            location: 'Acsona Waddo Utroda Goa',
            type: 'wedding destination',
        },
        {
            id: 106,
            name: "Regenta-Beach-House-Resort-Goa",
            image: '/venue-images/Banglore/Goa/image6.png',
            rating: '3.9',
            reviews: '8',
            location: 'Margoa Goa',
            type: 'Hotel',
        },


        {
            id: 201,
            name: 'The-Leela-Palace',
            image: '/venue-images/chennai/image1.png',
            rating: '4.9',
            reviews: '162',
            location: 'Raja Annamalaipuram,Chennai',
            type: 'Seaside resort',

        },
        {
            id: 202,
            name: 'Sugam-Resort-and-Convention-Center',
            image: '/venue-images/chennai/image2.png',
            rating: '5.0',
            reviews: '4',
            location: 'UrappakamChennai',
            type: 'Convention hall & Resort',
        },
        {
            id: 203,
            name: 'Aiyavoo Mahal',
            image: '/venue-images/chennai/image3.png',
            rating: '4.9',
            reviews: '11',
            location: 'Shenoy Nagar,Chennai',
            type: 'Banquet hall',
        },
        {
            id: 204,
            name: 'Radisson-Blu-Resort-Temple-Bay',
            image: '/venue-images/chennai/image4.png',
            rating: '5.0',
            reviews: '16',
            location: 'Mahabalipuram,Chennai',
            type: 'Hotel',

        },
        {
            id: 205,
            name: 'Kailash-Resort',
            image: '/venue-images/chennai/image5.png',
            rating: '5.0',
            reviews: '16',
            location: 'Injambakkam,Chennai',
            type: 'wedding destination',
            pricingText: 'Rental cost',
        },
        {
            id: 206,
            name: "Mamalla-Beach-Resor",
            image: '/venue-images/chennai/image6.png',
            rating: '5.0',
            reviews: '8',
            location: 'mamalapuram,Chennai',
            type: 'Hotel',
        },

    ];

    const navItems = [
        'Logo',
        'Portfolio',
        'Booking',
        'Timeline',
        'Venues',
        'Decor',
        'Our Works'
    ];

    const filteredVenues = venuesData.filter(venue => {
        if (!searchQuery) return true;
        const lowerQuery = searchQuery.toLowerCase();
        return (
            (venue.name || '').toLowerCase().includes(lowerQuery) ||
            (venue.location || '').toLowerCase().includes(lowerQuery) ||
            (venue.type || '').toLowerCase().includes(lowerQuery)
        );
    });

    return (
        <div className="venue-page">
            {/* Main Content */}
            <div className="main-content">
                {/* Search & Toggle Header */}
                <header className="venue-list-header">
                    <div className="header-left">
                        <h1 className="main-title">Wedding Venues in {selectedLocation}</h1>
                        <p className="subtitle">Showing <strong>{filteredVenues.length} results</strong> as per your search criteria</p>
                    </div>

                    <div className="header-right">
                        <div className="search-bar" ref={searchRef}>
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search Wedding Venues..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchOpen(true)}
                            />

                            {/* Search Dropdown Overlay */}
                            {isSearchOpen && (
                                <div className="search-dropdown">
                                    <div className="dropdown-column">
                                        <h4>Top Cities</h4>
                                        <ul>
                                            <li onClick={() => { setSearchQuery(''); setSelectedLocation('All Cities'); setIsSearchOpen(false); }}>All Cities</li>
                                            <li onClick={() => { setSearchQuery('Chennai'); setSelectedLocation('Chennai'); setIsSearchOpen(false); }}>Chennai</li>
                                            <li onClick={() => { setSearchQuery('Bangalore'); setSelectedLocation('Bangalore'); setIsSearchOpen(false); }}>Bangalore</li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-column">
                                        <h4>Popular Cities</h4>
                                        <ul>
                                            <li onClick={() => { setSearchQuery('Goa'); setSelectedLocation('Goa'); setIsSearchOpen(false); }}>Goa</li>
                                            <li onClick={() => { setSearchQuery('Chennai'); setSelectedLocation('Chennai'); setIsSearchOpen(false); }}>Chennai</li>
                                            <li onClick={() => { setSearchQuery('Bangalore'); setSelectedLocation('Bangalore'); setIsSearchOpen(false); }}>Bangalore</li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-column">
                                        <h4>States</h4>
                                        <ul>
                                            <li onClick={() => { setSearchQuery('Goa'); setSelectedLocation('Goa'); setIsSearchOpen(false); }}>Goa</li>
                                            <li onClick={() => { setSearchQuery('Chennai'); setSelectedLocation('Chennai'); setIsSearchOpen(false); }}>Chennai</li>

                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="view-toggles">
                            <button
                                className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                                onClick={() => setViewMode('list')}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                <span>List</span>
                            </button>
                            <button
                                className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                <span>Grid</span>
                            </button>
                        </div>
                    </div>
                </header>


                {/* Venue Grid */}
                <section className="image-display-area">
                    <div className={`venue-grid fade-in ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
                        {filteredVenues.map(venue => (
                            <div key={venue.id} className="venue-card">
                                <div className="image-wrapper">
                                    <div className="crown-badge">👑</div>
                                    <img src={venue.image} alt={venue.name} />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3 className="venue-name">{venue.name}</h3>
                                        <div className="rating">
                                            <span className="star">★</span> {venue.rating} <span className="reviews">({venue.reviews} reviews)</span>
                                        </div>
                                    </div>

                                    <div className="location-type">
                                        <span className="location"><span className="icon">📍</span>{venue.location}</span>
                                        <span className="type"><span className="icon">🏛️</span>{venue.type}</span>
                                    </div>

                                    <div className="pricing">
                                        {venue.vegPrice ? (
                                            <div className="plate-pricing">
                                                <div className="price-item">
                                                    <span className="label">Veg</span>
                                                    <span className="amount">{venue.vegPrice} <span className="unit">per plate</span></span>
                                                </div>
                                                <div className="price-item">
                                                    <span className="label">Non Veg</span>
                                                    <span className="amount">{venue.nonVegPrice} <span className="unit">per plate</span></span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="rental-pricing">
                                                <span className="label">{venue.pricingText}</span>
                                                {venue.price && <span className="amount">{venue.price} <span className="unit">{venue.priceUnit}</span></span>}
                                            </div>
                                        )}
                                    </div>

                                    <div className="capacity-tags">
                                        <span className="tag">{venue.pax}</span>
                                        <span className="tag">{venue.rooms}</span>
                                        {venue.moreCount && <span className="tag link">{venue.moreCount}</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>

    );
};

export default VenuesPage;