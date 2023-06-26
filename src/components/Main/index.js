import React from 'react';
import About from '../About';
import Facts from '../Facts';
import Skills from '../Skills';
import Resume from '../Resume';
import Photos from '../Photos';
import Quotes from '../Quotes';
import Contact from '../Contact';

const index = () => {
    return (
        <main id="main">
            <About />
            <Facts />
            <Skills />
            <Resume />
            <Photos />
            <Quotes />
            <Contact />
        </main>
    )
}

export default index