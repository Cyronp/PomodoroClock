import React from 'react';

const Clock = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className='bg-stone-950 w-80 h-40 rounded-xl flex justify-center items-center shadow-lg shadow-stone-900/50'>
      <div className='bg-amber-950 w-70 h-30 p-4 rounded-md flex justify-center items-center'>
        <p className='font-clock text-7xl font-semibold text-red-900 tracking-wide'>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </div>
    </div>
  );
}

export default Clock;