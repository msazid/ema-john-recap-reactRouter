import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
    <div className="sticky top-0 bg-gray-700 px-12 py-2 flex justify-center md:justify-between">
        <div className="hidden md:block lg:block">
            <Link to="/">
                <img className='w-20' src={logo} alt="" />
            </Link>
        </div>
        <div className="flex gap-4 text-base">
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/products'>Products</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </div>
    </div>
    );
};

export default Header;