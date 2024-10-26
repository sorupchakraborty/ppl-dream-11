import React from 'react';

import bannerImg from '../assets/banner-main.png'
const Banner = ({ addCoins }) => {
    return (
        <div className="container mx-auto bg-gray-950 bg-hero-pattern bg-cover bg-center text-white rounded-3xl">
            <div className="flex items-center justify-center py-10">
                <div className="text-center space-y-4 flex flex-col justify-center items-center">
                    <img src={bannerImg} alt="" />
                    <h1 className="text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-lg">Beyond Boundaries, Beyond Limits</p>
                    <button onClick={addCoins} className="bg-[#E7FE29] text-black px-4 py-2 rounded-lg shadow-md hover:bg-transparent hover:text-white border ">
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
