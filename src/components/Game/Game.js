import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Guess from "../Guess/Guess";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, logging the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess])
    console.log([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      <GuessResults guesses={guesses} />
      <Guess />
    </>
  );
}

export default Game;
