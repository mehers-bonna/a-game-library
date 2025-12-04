import React, { useEffect, useState } from 'react';

const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-14">
        Developer Spotlight
      </h1>

      {/* Developer List */}
      <div className="max-w-6xl mx-auto space-y-14">
        {developers.map((dev) => (
          <div
            key={dev.id}
            className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden 
                       hover:shadow-2xl transition-all duration-300 p-8 md:flex md:items-center"
          >
            {/* Left Image */}
            <div className="md:w-1/2">
              <img
                src={dev.coverPhoto}
                alt={dev.developer}
                className="w-full h-[420px] object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {dev.developer}
              </h2>

              <p className="text-gray-700 text-lg mb-3">
                Creator of{" "}
                <span className="font-semibold text-purple-600">{dev.title}</span>
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                {dev.description}
              </p>

              <a
                href={dev.downloadLink}
                target="_blank"
                className="inline-block bg-purple-600 text-white px-7 py-3 rounded-xl 
                           text-lg shadow-md transition-all duration-300"
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
