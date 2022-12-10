import React from 'react';
import { Link } from 'react-router-dom';
import html from '../../assisset/images/banner/icons8-html-5.svg'
import CSS from '../../assisset/images/banner/icons8-css3.svg'
import BOOT from '../../assisset/images/banner/icons8-bootstrap.svg'
import TALWIND from '../../assisset/images/banner/icons8-tailwind-css.svg'
import META from '../../assisset/images/banner/icons8-material-ui.svg'
import DAI from '../../assisset/images/banner/icons8-daisy-64.png'
import react from '../../assisset/images/banner/icons8-react.svg'
import tyoes from '../../assisset/images/banner/icons8-typescript.svg'
import js from '../../assisset/images/banner/icons8-javascript.svg'
import node from '../../assisset/images/banner/icons8-node-js.svg'
import ex from '../../assisset/images/banner/icons8-express-js.svg'
import Axiosx from '../../assisset/images/banner/icons8-axis-64.png'
import JWT from '../../assisset/images/banner/icons8-json-web-token.svg'
import SendGrid from '../../assisset/images/banner/icons8-sendgrid.svg'
import Stripe from '../../assisset/images/banner/icons8-stripe.svg'
import API from '../../assisset/images/banner/icons8-rest-api-30.png'
import mongo from '../../assisset/images/banner/icons8-mongodb.svg'
import Nodemailer from '../../assisset/images/banner/icons8-mailer-48.png'
import Redux from '../../assisset/images/banner/icons8-redux.svg'

const Skill = () => {
    return (
        <div className='bg-neutral-focus'>
            <div className='p-5 '>
                <h2 className='text-white text-3xl text-bold text-center'>My Skills</h2>
                <div className='lg:grid grid-cols-2 gap-4 mt-5 pt-5'>
                    <div className="card bg-blue-400 text-primary-content">
                        <h3 className='text-white text-3xl text-bold text-center pt-5'>Frontend Development</h3>
                        <div className='lg:grid grid-cols-2 gap-4 p-5'>
                            <div className='justify-content-center '>
                                <ul className="menu w-56 p-2 rounded-box">
                                    <li>
                                        <Link >
                                            <img className='text-center' src={html} alt=''/>
                                            <h2 className='text-center'>HTML5</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={CSS} alt=''/>
                                            <h2 className='text-center'>CSS3</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={BOOT} alt=''/>
                                            <h2 className='text-center'>BOOTSTRAP</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={react} alt=''/>
                                            <h2 className='text-center'>React Query</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={js} alt=''/>
                                            <h2 className='text-center'>JavaScript</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={react} alt=''/>
                                            <h2 className='text-center'>ReactBootstrap</h2>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <ul className="menu w-56 p-2 rounded-box">
                                    <li>
                                        <Link >
                                            <img className='text-center' src={TALWIND} alt=''/>
                                            <h2 className='text-center'>TAILWIND CSS</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={META} alt=''/>
                                            <h2 className='text-center'>Material-UI</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={DAI} alt=''/>
                                            <h2 className='text-center'>DaisyUI</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={react} alt=''/>
                                            <h2 className='text-center'>ReactNative</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={tyoes} alt=''/>
                                            <h2 className='text-center'>TypeScript</h2>
                                        </Link>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className="card bg-blue-400 text-primary-content">
                        <h3 className='text-white text-3xl text-bold text-center pt-5'>Backend Development</h3>

                        <div className='lg:grid grid-cols-2 gap-4 p-5'>
                            <div className='justify-content-center '>
                                <ul className="menu w-56 p-2 rounded-box">
                                    <li>
                                        <Link >
                                            <img className='text-center' src={node} alt=''/>
                                            <h2 className='text-center'>Node.JS</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={ex} alt=''/>
                                            <h2 className='text-center'>Express.js</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={Axiosx} alt=''/>
                                            <h2 className='text-center'>Axios</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={mongo} alt=''/>
                                            <h2 className='text-center'>MongoDB</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={Nodemailer} alt=''/>
                                            <h2 className='text-center'>Nodemailer</h2>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <ul className="menu w-56 p-2 rounded-box">
                                    <li>
                                        <Link >
                                            <img className='text-center' src={JWT} alt=''/>
                                            <h2 className='text-center'>JWT</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={SendGrid} alt=''/>
                                            <h2 className='text-center'>SendGrid</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={Stripe} alt=''/>
                                            <h2 className='text-center'>Stripe.js</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={API} alt=''/>
                                            <h2 className='text-center'>Rest API</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <img className='text-center' src={Redux} alt=''/>
                                            <h2 className='text-center'>Redux</h2>
                                        </Link>
                                    </li>
                                </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;