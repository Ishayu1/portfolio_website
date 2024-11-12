import React, { useState } from "react";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const CounterGame = () => {
  const [showCount, setShowCount] = useState(0);
  const [highest_count, setHighest_count] = useState(0);

  const handleClick = () => {
    setShowCount(showCount + 1);
  };

  const resetClick = () => {
    if (showCount > highest_count) {
      setHighest_count(showCount);
    }
    setShowCount(0);
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl mb-10">Counter Game</h1>
  
      <div className="flex flex-col items-center space-y-4">
        <Buttons onClick={handleClick} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white">
          Counter for fun: <span className="text-black hover:underline">{showCount}</span>
        </Buttons>
  
        <Buttons onClick={resetClick} className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded text-white">
          Reset count
        </Buttons>
      </div>
  
      <h2 className="mt-6 text-2xl">Highest count: {highest_count}</h2>
  
      {/* <Link to="/" className="text-cyan-400 hover:underline mt-12 block text-lg">
        Go back to Home
      </Link> */}
    </div>
  );
  
};

export default CounterGame;




