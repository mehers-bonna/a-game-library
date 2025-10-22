import React from 'react';

const NewsLetter = () => {
    return (
        <div className='mb-10'>
            <section className="bg-purple-50 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter</h2>
                    <p className="text-gray-600 mb-8">Get latest gaming updates and news directly in your inbox.</p>
                    <form className="flex flex-col sm:flex-row gap-3 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-md border border-gray-300 flex-1"
                        />
                        <button className="px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;