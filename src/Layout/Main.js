import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../pages/Share/Footer/Footer';
import Navbar from '../pages/Share/Navbar/Navbar';
// import { AuthContext } from '../provider/AuthProvider';

const Main = () => {
    // const {theme} = useContext(AuthContext);
    // className={theme ? 'dark-theme' : 'light-theme'}
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;