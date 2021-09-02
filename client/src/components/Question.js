import React, { useState } from 'react';

const mockQuestion = {
  id: 1,
  title: 'What Department of the Armed Forces was Grace Hopper enlisted in?',
  choices: ['Army', 'Navy', 'Air Force'],
  correct: 'Navy',
  correctDescription:
    'Right Answer: Navy.  Grace Hopper enlisted when she was 36 years old (too old) and was 4 feet 11 inches tall (too short)',
};
// mockQuestion is just a default

// destructure the props directly, then you can set a default prop
// don't add ()'s to onGuess
// q = properties of a single question b/c I specified it as so below
const Question = ({ q = mockQuestion, onGuess }) => {
  // scores the guesses they made
  const [guessState, setGuessState] = useState('');

  return (
    <div>
      <h3>{q.title}</h3>
      {/* has to be in curly braces*/}
      {q.choices.map((item, index) => {
        return (
          <button
            onClick={() => {
              setGuessState(item);
            }}
          >
            {item}
          </button>
        );
      })}
      {/* can't have an if/else statement w/in jsx*/}
      {guessState === q.correct ? q.correctDescription : 'Try again'}
      {/* ^ don't use brackets around q.whatever when already inside brackets */}

      {/* {JSON.stringify(q, null, 2)} */}
      {/* ^this prints out the question data */}
    </div>
  );
};

export default Question;
