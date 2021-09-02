import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './components/Question';

function App() {
  const [data, setData] = useState(null);
  {
    /* used to changed index -> data[0], which will move through the questions */
  }
  const [count, setCount] = useState(0);

  // incrementing function
  function increment() {
    if (count <= data.length) {
      setCount((prevCount) => prevCount + 1);
    }
  }

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        {/* data[0].question */}
        {!data ? <p>'Loading...'</p> : <Question q={data[count]} />}
        {/* 1) count increments b/c we are updating setCount; we are incrementing setCount w/ 'increment' function */}
        <button onClick={increment}>Next</button>
        {/* everytime you click the next button, it increments the number inside data brackets */}
      </header>
    </div>
  );
}

export default App;
