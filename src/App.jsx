import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Counter from './Components/Counter';

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);


  const handleSingleRan = () => {
    const updateSingleRan = counter + 1;
    setCounter(updateSingleRan);
  }
  const handleTwoRan = () => {
    const updateSingleRan = counter + 2;
    setCounter(updateSingleRan);
  }
  const handleThreeRan = () => {
    const updateSingleRan = counter + 3;
    setCounter(updateSingleRan);
  }
  const handleFourRan = () => {
    const updateSingleRan = counter + 4;
    setCounter(updateSingleRan);
  }
  const handleFiveRan = () => {
    const updateSingleRan = counter + 5;
    setCounter(updateSingleRan);
  }
  const handleSixRan = () => {
    const updateSingleRan = counter + 6;
    setCounter(updateSingleRan);
  }
  const handleDecrement = () => {
    const updateSingleRan = counter - 1;
    if (counter !== 0) {
      setCounter(updateSingleRan);
    }
  }
  const handleReset = () => {
    if (counter !== 0) {
      setCounter(0);
    }
  }

  return (
    <div className='bg-[#220556] h-[100vh] w-full flex flex-col items-center justify-center text-center'>
      <Navbar />
      <Counter handleSingleRan={handleSingleRan} handleTwoRan={handleTwoRan} handleThreeRan={handleThreeRan} handleFourRan={handleFourRan} handleFiveRan={handleFiveRan} handleSixRan={handleSixRan} handleDecrement={handleDecrement} handleReset={handleReset} counter={counter} />
    </div>
  );
};

export default App;



