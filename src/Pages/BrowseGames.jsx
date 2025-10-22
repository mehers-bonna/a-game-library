import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

const BrowseGames = () => {
   const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/games.json')
      .then(res => res.json())
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
        <h1 className='text-4xl font-bold text-center py-10'>All Gaming Apps</h1>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
    </div>
  );
};

export default BrowseGames;