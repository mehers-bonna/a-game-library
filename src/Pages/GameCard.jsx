import React from 'react';

const GameCard = ({ game }) => {
    return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[350px] p-6 hover:shadow cursor-pointer hover:scale-105">
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-[350px] object-cover rounded-2xl"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{game.title}</h2>
        <p className="text-sm text-gray-500">{game.category}</p>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: Math.floor(game.ratings) }).map((_, idx) => (
              <svg
                key={idx}
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-gray-600">{game.ratings}</span>
        </div>
      </div>
    </div>
    );
};

export default GameCard;