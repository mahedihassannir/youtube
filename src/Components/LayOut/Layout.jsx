import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import { FaHome, FaTablet, FaUserFriends, FaUsers } from 'react-icons/fa';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <div className='mt-8 ml-7'>
                <Link className='text-4xl pl-4  text-gray-600  p-2 mt-3 pt-4' to="/"><FaHome></FaHome></Link>
                <Link className='text-4xl pl-4  text-gray-600  p-2 mt-3 pt-4' to="/Friends"><FaUserFriends></FaUserFriends></Link>
                <Link className='text-4xl pl-4  text-gray-600  p-2 mt-3 pt-4' to="/Group"><FaUsers></FaUsers></Link>
                <Link className='text-4xl pl-4  text-gray-600  p-2 mt-3 pt-4' to="/Tv"><FaTablet></FaTablet></Link>

            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Layout;