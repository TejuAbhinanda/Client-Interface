import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const navItems = [
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Booking', path: '/booking' },
        { name: 'Timeline', path: '/timeline' },
        { name: 'Venues', path: '/venues' },
        { name: 'Decor', path: '/decor' },
        { name: 'Our Works', path: '/our-works' }
    ];

    return (
        <nav className="navbar">
            <NavLink to="/">
                <img src={logo} alt="Logo" className="nav-logo" />
            </NavLink>
            <ul className="nav-list">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
