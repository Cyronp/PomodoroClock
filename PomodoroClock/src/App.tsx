import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import Alarm from './assets/alarm.mp3';
import Clock from './components/Clock';
import Buttons from './components/Buttons';
import Title from './components/Title';
import Notification from './components/Notification';
import Footer from './components/Footer';

const App: React.FC = () => {
  const workTime = 25 * 60; 
  const restTime = 5 * 60; 
  const [time, setTime] = useState<number>(workTime);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isWorkMode, setIsWorkMode] = useState<boolean>(true); 
  const [playSound] = useSound(Alarm, { volume: 0.7 });
  const [notification, setNotification] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(updateCountdown, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (time === 0) {
      playSound();
      setNotification(true);
      if (isWorkMode) {
        setTime(restTime);
        setIsActive(false);
        setIsWorkMode(false);
      } else {
        setTime(workTime);
        setIsActive(false);
        setIsWorkMode(true);
      }
    }
  }, [time, isWorkMode, playSound]);

  function updateCountdown() {
    setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
  }

  function startTimer() {
    setIsActive(true);
  }

  function stopTimer() {
    setIsActive(false);
  }

  function resetTimer() {
    setIsActive(false);
    setTime(isWorkMode ? workTime : restTime);
  }

  function closeNotification() {
    setNotification(false);
  }

  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen bg-slate-900'>
      <Title />
      <Clock time={time} />
      {notification && <Notification onClose={closeNotification} activity={isWorkMode ? 'Study' : 'Rest'} />}
      <div className='mt-4'>
        <Buttons startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} />
      </div>
      <Footer />
    </div>
  );
}

export default App;