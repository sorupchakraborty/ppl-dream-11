import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-gray-900 text-white py-8 ">
            <div className="flex justify-center mb-4">
                <img src="/src/assets/footer-logo-png.png" alt="Footer Logo" />
            </div>
            <div className='flex flex-col md:flex-row md:justify-around items-center '>
                <div className='max-w-[50%] md:max-w-[20%] my-4 md:my-0'>
                    <h5 className='font-bold text-xl'>About Us</h5>
                    <p className='text-sm'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className='my-4 md:my-0'>
                    <h5 className='font-bold text-xl'>Quick Links</h5>
                    <ul className="">
                        <li className="hover:text-yellow-400 cursor-pointer text-sm">Home</li>
                        <li className="hover:text-yellow-400 cursor-pointer text-sm">Services</li>
                        <li className="hover:text-yellow-400 cursor-pointer text-sm">About</li>
                        <li className="hover:text-yellow-400 cursor-pointer text-sm">Contact</li>
                    </ul>
                </div>
                <div>
                    <h5 className='font-bold text-xl'>Subscribe</h5>
                    <p className=' max-w-[50%] md:max-w-[60%] text-sm pb-2'>Subscribe to our newsletter for the latest updates.</p>
                    <div>
                        <input type="email"
                            placeholder='Enter your email'
                            className="px-2 py-1 md:px-4 md:py-2 rounded-l-lg "
                        />
                        <button className='bg-yellow-400 text-black px-2 py-1 md:px-4 md:py-2 rounded-r-lg hover:bg-yellow-500'>Subscribe</button>

                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
