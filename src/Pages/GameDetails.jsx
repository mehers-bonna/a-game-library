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
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!game) return <p className="text-center mt-10">Game not found</p>;
    return (
         <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">{game.title}</h1>
            <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-[600px] h-[500px] object-cover rounded-2xl my-5 "
            />
            <p className="text-gray-600 mb-2"><strong>Developer:</strong> {game.developer}</p>
            <p className="text-gray-600 mb-2"><strong>Category:</strong> {game.category}</p>
            <p className="text-yellow-400 mb-2">
                {Array.from({ length: Math.floor(game.ratings) }).map((item, index) => (
                    <span key={index}>★</span>
                ))} {game.ratings}
            </p>
            <p className="mt-4">{game.description}</p>
            <a
                href={game.downloadLink}
                
                className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg"
            >
                Download
            </a>
        </div>
    );
};

export default GameDetails;