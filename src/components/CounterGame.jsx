import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";

const CounterGame = () => {
  const initialTime = 3000; // 5 seconds in milliseconds
  const [showCount, setShowCount] = useState(0);
  const [highest_count, setHighest_count] = useState(0);
  const [name, set_name] = useState("");
  const [show_name, set_show_name] = useState("");
  const [submitted_name, set_submitted_name] = useState(false);
  const [players, set_players] = useState({}); // Stores all players and their scores
  const [player_rounds, set_player_rounds] = useState([]); // Stores rounds for current player
  const [game_status, set_game_status] = useState(false);
  const [round_active, set_round_active] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) {
      if (timeLeft <= 0) {
        endRound(); // Automatically end the round when timer reaches 0
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => Math.max(prevTime - 10, 0));
    }, 10);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startGame = () => {
    setShowCount(0);
    set_game_status(true);
    set_round_active(false);
    setIsRunning(false);
    setTimeLeft(initialTime);
    set_player_rounds([]); // Reset rounds when starting a new game
  };

  const startRound = () => {
    setShowCount(0);
    set_round_active(true);
    setIsRunning(true);
    setTimeLeft(initialTime);
  };

  const endRound = () => {
    setIsRunning(false);
    set_round_active(false);

    // Save highest count
    if (showCount > highest_count) {
      setHighest_count(showCount);
    }

    // Add round score to current player rounds
    set_player_rounds(prevRounds => [...prevRounds, showCount]);

    setShowCount(0);
    setTimeLeft(initialTime);
  };

  const endGame = () => {
    set_game_status(false);
    set_round_active(false);
    setIsRunning(false);
    setTimeLeft(initialTime);
  
    // Save the rounds for the current player in the leaderboard
    set_players(prevPlayers => ({
      ...prevPlayers,
      [show_name]: [...player_rounds], // Store all rounds for this player
    }));
  
    set_show_name(""); 
    set_name(""); // ✅ Clears the input field
    set_submitted_name(false);
    set_player_rounds([]);
  };
  

  const handleClick = () => {
    if (round_active) {
      setShowCount(prevCount => prevCount + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    set_show_name(name);
    set_submitted_name(true);
  };

  const average = (numbers) => {
    return numbers.length > 0 
      ? numbers.reduce((sum, num) => sum + num, 0) / numbers.length 
      : 0;
  };
  

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl mb-10">Counter Game</h1>

      <h2 className="text-2xl">
        Time Left: {(timeLeft / 1000).toFixed(2)} seconds
      </h2>

      <div className="flex flex-col items-center space-y-4">
        {!submitted_name ? (
          <form onSubmit={handleSubmit}>
            <label>Enter Your Name: </label>
            <input 
              type="text"
              required
              className="text-black mr-4"
              value={name}
              onChange={(e) => set_name(e.target.value)}
            />
            <Buttons type="submit">Submit</Buttons>
          </form>
        ) : (
          <>
            <p className="text-xl font-semibold mb-2">Player: {show_name}</p>

            <Buttons onClick={handleClick} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white">
              Counter for fun: <span className="text-black hover:underline">{showCount}</span>
            </Buttons>

            {game_status ? (
              round_active ? (
                <Buttons 
                  onClick={endRound} 
                  className="px-4 py-2 bg-yellow-500 hover:bg-red-500 rounded text-white"
                >
                  End Round
                </Buttons>
              ) : (
                <Buttons 
                  onClick={startRound} 
                  className="px-4 py-2 bg-green-500 hover:bg-green-400 rounded text-white"
                >
                  Start Round
                </Buttons>
              )
            ) : (
              <Buttons 
                onClick={startGame} 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
              >
                Start Game
              </Buttons>
            )}

            {game_status && (
              <Buttons 
                onClick={endGame} 
                className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded text-white"
              >
                End Game
              </Buttons>
            )}

            {/* Show previous rounds for the current player */}
            <h2 className="mt-6 text-2xl">Previous Rounds:</h2>
            <ul className="list-disc mt-2">
              {player_rounds.length > 0 ? (
                player_rounds.map((score, index) => (
                  <li key={index}>Round {index + 1}: {score} clicks</li>
                ))
              ) : (
                <p>No rounds played yet.</p>
              )}
            </ul>
          </>
        )}

        {/* Show leaderboard only when the game is over */}
        {!game_status && Object.keys(players).length > 0 && (
          <>
            <h1>Leaderboard</h1>
            <div>
              {Object.entries(players).map(([key, scores]) => (
                <li key={key}>
                  <strong>{key}:</strong> {average(scores).toFixed(1)} clicks per round
                </li>
              ))}
            </div>
          </>
        )}
      </div>

      {submitted_name && <h2 className="mt-6 text-2xl">Average count: {average(player_rounds).toFixed(1)}</h2>}
    </div>
  );
};

export default CounterGame;
