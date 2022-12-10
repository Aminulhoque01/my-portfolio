import React from 'react';
import { Form, Link } from 'react-router-dom';
import Navbar from '../Navebar/Navbar';

const Contact = () => {
    return (
        <div className='bg-neutral'>
            <Navbar></Navbar>
           
            <h2 className='text-white text-3xl font-bold text-center mt-20'>Contact me</h2>
            <div className="hero min-h-screen bg-neutral">
                
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <form action='https://www.jotform.com/assign/223433866490461/223433990427055' className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">FullName</span>
                                </label>
                                <input type="text" placeholder="Enter your Name" className="input input-bordered bg-neutral-focus text-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered bg-neutral-focus text-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered bg-neutral-focus text-white" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Text</span>
                                </label>
                                <textarea className=" bg-neutral-focus text-white"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"><a to='https://form.jotform.com/223433866490461'>Contact</a></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;