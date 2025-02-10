import React from 'react';

const Notification = ({ onClose, activity }) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center animate-wiggle'>
      <div className='bg-white w-80 h-80 flex flex-col rounded-xl justify-center p-6 gap-y-4 items-center text-center sm:text-left relative shadow-lg shadow-stone-900/50'>
        <button className='absolute top-2 right-2 font-bold text-xl cursor-pointer' onClick={onClose}>x</button>
        <h1 className='text-2xl font-medium font-semibold self-start'>It's time to <span className='text-2xl font-medium font-semibold self-start text-red-500'>{activity }</span></h1>
        <p className='flex-grow flex items-start justify-center text-xl pt-6'>Your time is up, stay focused and you will succeed!</p>
        <p className='flex-grow flex items-start justify-center text-xl pt-20'>Have a nice study section!</p>
      </div>
    </div>
  );
}

export default Notification;