import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(tentativeGuess);
    if (tentativeGuess.length !== 5) {
      alert("Please enter 5 letters");
      return;
    }
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          minLength={5}
          maxLength={5}
          value={tentativeGuess}
          onChange={(e) => {
            const userGuess = e.target.value.toUpperCase();
            setTentativeGuess(userGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
