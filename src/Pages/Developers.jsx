import React, { useEffect, useState } from 'react';

const Developers = () => {
    const [developers, setDevelopers] = useState([]);

     useEffect(() => {
    fetch('/games.json')
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);
    return (
         <div className="w-8/12 mx-auto mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Developer Spotlight
      </h1>

      <div className="grid gap-10">
        {developers.map((dev) => (
          <div
            key={dev.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden p-6 md:p-8"
          >
            {/* Left side image */}
            <div className="w-full md:w-1/2">
              <img
                src={dev.coverPhoto}
                alt={dev.developer}
                className="rounded-xl w-full h-[500px] object-cover"
              />
            </div>

            {/* Right side text */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {dev.developer}
              </h2>
              <p className="text-gray-600 mb-3">
                Creator of{" "}
                <span className="font-semibold text-indigo-600">
                  {dev.title}
                </span>
              </p>
              <p className="text-gray-500 text-sm mb-4">{dev.description}</p>
              <a
                href={dev.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg font-medium transition"
              >
                Visit Game
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Developers;