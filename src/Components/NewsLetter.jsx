import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            toast.success(`Thanks for subscribing with ${email}!`);
            setEmail('');
        } else {
            toast.error('Please enter your email.');
        }
    };

    return (
        <div className='my-10 w-9/12 mx-auto'>
            <Toaster position="top-right" reverseOrder={false} />
            <section className="bg-sky-100 py-16 rounded-full">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter</h2>
                    <p className="text-gray-600 mb-8">Get latest gaming updates and news directly in your inbox.</p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 rounded-md border border-gray-300 flex-1 text-black"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-purple-600 text-white rounded-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;
