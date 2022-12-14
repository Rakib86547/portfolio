import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <Banner />
            <About />
            <MyProjects />
            <ContactMe />
        </div>
    );
};

export default Home;