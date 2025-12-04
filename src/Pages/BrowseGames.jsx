import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

const BrowseGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filterCategory, setFilterCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

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

  // -------------------
  // FILTER + SORT LOGIC
  // -------------------

  let filteredGames = [...games];

  // Filter by category
  if (filterCategory !== "All") {
    filteredGames = filteredGames.filter(
      (game) => game.category === filterCategory
    );
  }

  // Sort by rating (Convert string → number)
  if (sortOrder === "asc") {
    filteredGames.sort((a, b) => Number(a.ratings) - Number(b.ratings));
  } 
  else if (sortOrder === "desc") {
    filteredGames.sort((a, b) => Number(b.ratings) - Number(a.ratings));
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-10">
        All Gaming Apps
      </h1>

      {/* Filter + Sort UI */}
      <div className="w-9/12 mx-auto flex flex-col md:flex-row justify-between mb-6 gap-4">

        {/* Category Filter */}
        <select
          className="border px-4 py-2 rounded-lg"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>

          {/* Make categories dynamic */}
          {[...new Set(games.map((g) => g.category))].map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="border px-4 py-2 rounded-lg"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort By Rating</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
      </div>

      {/* Display Games */}
      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mb-10">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default BrowseGames;
