import React from 'react';
import About from '../../Pages/About/About';
import Footer from '../../Pages/Footer/Footer';
import Projects from '../../Pages/My-projects/Projects';
import Skill from '../../Pages/Skills/Skill';
import Contact from '../Contact/Contact';
import Navbar from '../Navebar/Navbar';
import Slider from './Slaider/Slider';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <About></About>
            <Skill></Skill>
           <Projects></Projects>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;