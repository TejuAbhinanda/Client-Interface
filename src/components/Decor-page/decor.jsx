import React, { useState } from 'react';

import bgImage from '../../assets/background.jpg';
import './decor.css';
import h1 from "../../assets/haldi/haldi1.jpg";
import h2 from "../../assets/haldi/haldi2.jpg";
import h3 from "../../assets/haldi/haldi3.jpg";
import h4 from "../../assets/haldi/haldi4.jpg";

import s1 from "../../assets/sangeeth/s1.jpg";
import s2 from "../../assets/sangeeth/s2.jpg";
import s3 from "../../assets/sangeeth/s3.jpg";
import s4 from "../../assets/sangeeth/s4.jpg";

import w1 from "../../assets/wedding/w1.jpg";
import w2 from "../../assets/wedding/w2.jpg";
import w3 from "../../assets/wedding/w3.jpg";
import w4 from "../../assets/wedding/w4.jpg";

import r1 from "../../assets/reception/r1.jpg";
import r2 from "../../assets/reception/r2.jpg";
import r3 from "../../assets/reception/r3.jpg";
import r4 from "../../assets/reception/r4.jpg";

const DecorPage = () => {
    const [activeCategory, setActiveCategory] = useState('Haldi');

    const decorData = {
        Haldi: [{ id: 1, img: h1, name: 'Decor 1' }, { id: 2, img: h2, name: 'Decor 2' }, { id: 3, img: h3, name: 'Decor 3' }, { id: 4, img: h4, name: 'Decor 4' }],
        Sangeeth: [{ id: 1, img: s1, name: 'Decor 1' }, { id: 2, img: s2, name: 'Decor 2' }, { id: 3, img: s3, name: 'Decor 3' }, { id: 4, img: s4, name: 'Decor 4' }],
        Wedding: [{ id: 1, img: w1, name: 'Decor 1' }, { id: 2, img: w2, name: 'Decor 2' }, { id: 3, img: w3, name: 'Decor 3' }, { id: 4, img: w4, name: 'Decor 4' }],
        Reception: [{ id: 1, img: r1, name: 'Decor 1' }, { id: 2, img: r2, name: 'Decor 2' }, { id: 3, img: r3, name: 'Decor 3' }, { id: 4, img: r4, name: 'Decor 4' }]
    };

    const categories = ['Haldi', 'Sangeeth', 'Wedding', 'Reception'];


    return (
        <div className="decor-page" style={{ backgroundImage: `url(${bgImage})` }}>


            <div className="desktop-container">
                <header className="page-header">
                    <h1>Decor</h1>
                    <p>Decor styles for wedding events</p>
                </header>

                <div className="category-btn-row">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`cat-pill ${activeCategory === cat ? 'active-pill' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="decor-grid-wrapper">
                    <div className="decor-grid fade-in" key={activeCategory}>
                        {decorData[activeCategory].map((item) => (
                            <div key={item.id} className="decor-card">
                                <div className="image-holder">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <span className="decor-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DecorPage;