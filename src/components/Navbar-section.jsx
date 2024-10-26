import React from 'react';
import logo from '../assets/logo.png'
import coin from '../assets/doller.png'
import heroBg from '../assets/bg-shadow.png';

const Navbar = ({ coins }) => {
    return (
        <nav className=" container mx-auto flex justify-between items-center px-8 py-4">
            <div className="flex items-center space-x-4">
                <img src={logo} className="h-10" />
            </div>
            <div className='flex items-center gap-8'>
                <div><ul className="hidden md:flex space-x-6">
                    <li className="hover:text-green-600 font-bold text-[#131313B3]">Home</li>
                    <li className="hover:text-green-600 font-bold text-[#131313B3]">Fixture</li>
                    <li className="hover:text-green-600 font-bold text-[#131313B3]">Teams</li>
                    <li className="hover:text-green-600 font-bold text-[#131313B3]">Schedules</li>
                </ul></div>
                <div className="border px-4 py-2 rounded-xl text-black font-bold flex justify-between items-center md:gap-2">
                    {coins} Coins
                    <img src={coin} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
