import React from 'react';
import ami from '../../assisset/images/banner/ami.jpg'
const About = () => {
    return (
        <div className='bg-neutral'>
            <h2 className='text-white text-3xl font-bold text-center py-5'>ABOUT ME</h2>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={ami} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='w-96'>
                        <h1 className="text-5xl font-bold text-white">Aminul haque</h1>
                        <p className="py-6 text-white">I am Aminul haque, a web developer. Developing holds the focal point in my skillset in hand with business development.I understand the importance of innovative websites in today's time and that brings my passion to building cutting-edge and state-of-the-art websites for my clients.
                            I'm a full-stack developer in JavaScript/Node JS/MongoDB technologies. I've 2+ years of experience in front-end development. I can use any JavaScript framework (ReactJS, NextJS, ExpressJS, Redux) at its best. If you need any work related to any JavaScript technology, I would be your best choice. Feel free to contact me and discuss your requirements.
                            Looking for an expert developer with a diversified skill set, then you are at the right place.</p>
                        <button className="btn btn-primary">Contact me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;