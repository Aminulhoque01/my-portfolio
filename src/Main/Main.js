import React from 'react';
import { Outlet } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Portfolio from '../components/Protfolio/Portfolio';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;