import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const Banner = () => {
    const slides = [
    { id: 1, image: banner1 },
    { id: 2, image: banner2 },
    { id: 3, image: banner3 },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-5xl font-bold py-8'>We Build <br /> Gaming Apps</h1>
        <p className='text-[11px] md:text-sm text-gray-600'>
          An engaging online library for discovering and supporting game developers. <br />
          Users can browse indie games, see detailed information, and install if you like them.
        </p>
      </div>
      <div className='py-10'>
        <div className="relative md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence>
            <motion.img
              key={slides[index].id}
              src={slides[index].image}
              alt="Banner"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;