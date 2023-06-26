import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import profilePic from '../../assets/img/profile.jpg';

const Index = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    return (
        <div>
        <header id="header">
            <div className="d-flex flex-column">
            <div className="profile">
                <img src={profilePic} alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="index.html">Kevin Joel Clief</a></h1>
                <div className="social-links mt-3 text-center">
                <a href="/#" className="twitter"><i className="bx bxl-twitter" /></a>
                <a href="https://web.facebook.com/skyway.j/" className="facebook"><i className="bx bxl-facebook" /></a>
                <a href="https://www.instagram.com/kjoell_/" className="instagram"><i className="bx bxl-instagram" /></a>
                <a href="/#" className="google-plus"><i className="bx bxl-skype" /></a>
                <a href="/#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
            </div>
            <nav id="navbar" className="nav-menu navbar">
                <ul>
                <li>
                    <Link
                    to="hero"
                    className={activeSection === 'home' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    >
                    <i className="bx bx-home" /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="about"
                    className={activeSection === 'about' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    >
                    <i className="bx bx-user" /> <span>About</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="resume"
                    className={activeSection === 'resume' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    >
                    <i className="bx bx-file-blank" /> <span>Resume</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="photo"
                    className={activeSection === 'photo' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    >
                    <i className="bx bx-book-content" /> <span>Photo</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="quotes"
                    className={activeSection === 'quotes' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    >
                    <i className="bx bx-server" /> <span>Quotes</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="contact"
                    className={activeSection === 'contact' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    >
                    <i className="bx bx-envelope" /> <span>Contact</span>
                    </Link>
                </li>
                </ul>
            </nav>
            </div>
        </header>
        </div>
    );
};

export default Index;
