import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedGame = data.find((g) => g.id === id);
        setGame(selectedGame || null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!game) return <p className="text-center mt-10">Game not found</p>;

  return (
    <div className="min-h-screen bg-white py-16 px-4 flex justify-center">
      <div className="max-w-4xl w-full bg-white border border-gray-200 p-10 rounded-3xl shadow-xl">

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          {game.title}
        </h1>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-[650px] h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="mt-10 space-y-3 text-lg text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">Developer:</span> {game.developer}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Category:</span> {game.category}
          </p>

          {/* Ratings */}
          <p className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Ratings:</span>
            <span className="text-yellow-400 text-xl">
              {Array.from({ length: Math.floor(game.ratings) }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </span>
            <span className="text-gray-600">({game.ratings})</span>
          </p>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-800 leading-relaxed text-[17px]">
          {game.description}
        </p>

        {/* Download Button */}
        <div className="mt-12 text-center">
          <a
            href={game.downloadLink}
            target="_blank"
            className="px-8 py-3 bg-purple-600 text-white text-lg rounded-xl shadow-md hover:bg-gray-800 transition-all duration-300"
          >
            Download
          </a>
        </div>

      </div>
    </div>
  );
};

export default GameDetails;
