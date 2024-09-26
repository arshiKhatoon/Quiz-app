"use client";
import React, { useState } from 'react';

const GameCode: React.FC = () => {
  const [code, setCode] = useState('');

  const handleJoin = () => {
    // Handle the game joining functionality here
    alert(`Joining game with code: ${code}`);
  };

  return (
    
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg text-center my-0 w-70">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter Game Code"
        className="p-2 rounded border border-gray-300 focus:outline-none"
      />
      <button
        onClick={handleJoin}
        className="bg-black text-white p-2 rounded ml-4"
      >
        Join Game
      </button>
    </div>
  );
};

export default GameCode;
