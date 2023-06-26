import React, { useState } from 'react';
import photo1 from '../../assets/img/rk/rk1.jpg';
import photo2 from '../../assets/img/rk/Moon1.jpg';
import photo3 from '../../assets/img/rk/rk2.jpg';
import photo4 from '../../assets/img/rk/me1.jpg';
import photo5 from '../../assets/img/rk/Moon2.jpg';
import photo6 from '../../assets/img/rk/rk3.jpg';
import photo7 from '../../assets/img/rk/me2.jpg';

const Index = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const portfolioItems = [
        {
        image: photo1,
        category: 'RK',
        title: 'App 1',
        },
        {
        image: photo2,
        category: 'Month',
        title: 'Web 3',
        },
        {
        image: photo3,
        category: 'RK',
        title: 'App 2',
        },
        {
        image: photo4,
        category: 'ME',
        title: 'Card 2',
        },
        {
        image: photo5,
        category: 'Month',
        title: 'Web 2',
        },
        {
        image: photo6,
        category: 'RK',
        title: 'App 3',
        },
        {
        image: photo7,
        category: 'ME',
        title: 'Card 1',
        },
    ];

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const filteredItems = activeFilter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

    return (
        <section id="photo" className="portfolio section-bg">
        <div className="container">
            <div className="section-title">
            <h2>Photo</h2>
            <p>"Di balik sebuah foto, mengajarkan kita bahwa tidak selamanya senyuman itu indah dan marah itu buruk"</p>
            </div>
            <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                <li
                    className={`filter-item ${activeFilter === 'all' ? 'filter-active' : ''}`}
                    onClick={() => handleFilterClick('all')}
                >
                    All
                </li>
                <li
                    className={`filter-item ${activeFilter === 'RK' ? 'filter-active' : ''}`}
                    onClick={() => handleFilterClick('RK')}
                >
                    RK
                </li>
                <li
                    className={`filter-item ${activeFilter === 'ME' ? 'filter-active' : ''}`}
                    onClick={() => handleFilterClick('ME')}
                >
                    ME
                </li>
                <li
                    className={`filter-item ${activeFilter === 'Month' ? 'filter-active' : ''}`}
                    onClick={() => handleFilterClick('Month')}
                >
                    Month
                </li>
                </ul>
            </div>
            </div>
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
            {filteredItems.map((item, index) => (
                <div key={index} className={`col-lg-4 col-md-6 portfolio-item filter-${item.category}`}>
                <div className="portfolio-wrap">
                    <img src={item.image} className="img-fluid" alt="" />
                    <div className="portfolio-links">
                    <a href={`assets/img/portfolio/${item.title.toLowerCase()}.jpg`} data-gallery="portfolioGallery" className="portfolio-lightbox" title={item.title}>
                        <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                    </a>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Index;
