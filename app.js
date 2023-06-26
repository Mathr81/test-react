import React, { useState } from 'react';

function GuessingGame() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleGuess = () => {
    const userGuess = parseInt(guess);

    if (isNaN(userGuess)) {
      setMessage('Veuillez entrer un nombre valide.');
    } else if (userGuess === randomNumber) {
      setMessage('Félicitations ! Vous avez deviné le bon nombre.');
    } else if (userGuess < randomNumber) {
      setMessage('Le nombre que vous avez deviné est trop bas.');
    } else {
      setMessage('Le nombre que vous avez deviné est trop élevé.');
    }
  };

  return (
    <div>
      <h1>Jeu de devinette</h1>
      <p>Devinez un nombre entre 1 et 100 :</p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Devinez</button>
      <p>{message}</p>
    </div>
  );
}

export default GuessingGame;
