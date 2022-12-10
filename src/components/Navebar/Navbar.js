import React from 'react';
import { Link } from 'react-router-dom';
import a from'../../assisset/images/banner/A.webp'
import a2 from '../../assisset/images/banner/download-removebg-preview.png'

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li className='text-white text-bold'><Link to='/'>Home</Link></li>
        
        <li className='text-white text-bold'><Link to='/contact'>Contact</Link></li>




    </React.Fragment>
    return (
        <div className="navbar bg-neutral flex justify-between">
            <div className='container max-auto flex justify-between'>
                <div className="navbar-start">
                    
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-white ">
                        <img className='w-15 h-10' src={a2} alt=''/>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Navbar;