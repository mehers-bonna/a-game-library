import React from 'react';
import { useNavigate } from 'react-router';

const GameCard = ({ game }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/game/${game.id}`);
    };
    return (
    <div onClick={handleClick} className="bg-white rounded-lg shadow-md overflow-hidden w-[350px] p-6 hover:shadow cursor-pointer hover:scale-105">
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-[350px] object-cover rounded-2xl"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{game.title}</h2>
        <p className="text-sm text-gray-500">{game.category}</p>
        <div className="my-3">
          <div className="flex text-yellow-400">
            {Array.from({ length: Math.floor(game.ratings) }).map((item, index) => (
                    <span key={index}>★</span>
                ))}
          </div>
          <span className=" text-gray-600">{game.ratings}</span>
        </div>
      </div>
    </div>
    );
};

export default GameCard;