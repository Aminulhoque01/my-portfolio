import React from 'react';
import learning from '../../assisset/images/banner/l2.jpg'
import doctor from '../../assisset/images/banner/Doctor.jpg'
import resale from '../../assisset/images/banner/resale2.jpg'

const Projects = () => {
    return (
        <div className='bg-neutral pb-10'>
            <div>
            <h2 className='text-white text-3xl font-bold text-center py-5'>ABOUT ME</h2>
            <div className='lg:grid grid-cols-3 gap-4 container mx-auto'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={doctor} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Doctor-portal</h2>
                        <p>Best Slogans for Doctors. Enjoy Your Life — We'll Be Here to Save it! We care for you — inside and out! Taking Care of You Since — Well, Beginning of Time!</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Project</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={learning} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Learning-course</h2>
                        <p>Be educated so that you can change the world.An educated mind is better than an empty one.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Project</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={resale} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Product-resale</h2>
                        <p>Quickly scan tons of product resale, view vendors, ratings, and buyback prices at any time from the convenience of your phone for free</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Project</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Projects;