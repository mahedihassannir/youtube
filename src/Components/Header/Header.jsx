import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaFacebook, FaHome, FaUserFriends, FaUsers, FaTablet } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between md:px-20 items-center pt-3 h-10 '>
                <Link className='mt-3' to="/">
                    <FaFacebook className='text-4xl '></FaFacebook>
                </Link>
                <ul className='flex gap-5'>
                    <Link className='text-4xl pl-4 hover:bg-gray-200 text-gray-600 hover:border-2 p-2 mt-3 pt-4' to="/"><FaHome></FaHome></Link>
                    <Link className='text-4xl pl-4 hover:bg-gray-200 text-gray-600 hover:border-2 p-2 mt-3 pt-4' to="/Friends"><FaUserFriends></FaUserFriends></Link>
                    <Link className='text-4xl pl-4 hover:bg-gray-200 text-gray-600 hover:border-2 p-2 mt-3 pt-4' to="/Group"><FaUsers></FaUsers></Link>
                    <Link className='text-4xl pl-4 hover:bg-gray-200 text-gray-600 hover:border-2 p-2 mt-3 pt-4' to="/Tv"><FaTablet></FaTablet></Link>
                    
                </ul>
                <Link className='text-4xl pt-3' to="/Profile"><FaUserCircle></FaUserCircle></Link>
            </nav>
        </div>
    );
};

export default Header;