import React from 'react';

const Buttons = ({ startTimer, stopTimer, resetTimer }) => {
  return (
    <>
      <button className='cursor-pointer w-20 h-10 bg-neutral-950 rounded-lg text-gray-300 font-semibold mr-4 ml-4 font-clock shadow-lg shadow-stone-900/50' onClick={startTimer}>Start</button>
      <button className='cursor-pointer w-20 h-10 bg-neutral-950 rounded-lg text-gray-300 font-semibold mr-4 font-clock shadow-lg shadow-stone-900/50' onClick={stopTimer}>Stop</button>
      <button className='cursor-pointer w-20 h-10 bg-neutral-950 rounded-lg text-gray-300 font-semibold mr-4 font-clock shadow-lg shadow-stone-900/50' onClick={resetTimer}>Reset</button>
    </>
  );
}

export default Buttons;