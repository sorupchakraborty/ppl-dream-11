import { useState } from 'react';
import heroBg from '../assets/bg-shadow.png';
const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email) {
            localStorage.setItem('subscribedEmail', email);
            alert('Subscribed successfully!');
        }
    };

    return (
        <div className="max-w-[60%] rounded-xl  mx-auto text-black py-14 bg-cover bg-center bg-gray-100" style={{backgroundImage:`url(${heroBg})`}}>
            <h2 className="text-center text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <div className="flex justify-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-2 py-1 md:px-4 md:py-2 rounded-l-lg outline-none" />
                <button
                    onClick={handleSubscribe}
                    className="bg-yellow-400 text-black px-2 py-1 md:px-4 md:py-2 rounded-r-lg hover:bg-yellow-500">Subscribe
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
