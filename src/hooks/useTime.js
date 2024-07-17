import { useState, useEffect } from 'react';

export const useTime = () => {
  const [time, setTime] = useState('');

  const checkTime = (i) => {
    return i < 10 ? '0' + i : i;
  };

  const updateTime = () => {
    const today = new Date();
    let hours = today.getHours();
    let minutes = checkTime(today.getMinutes());
    setTime(`${hours}:${minutes}`);
    // with seconds
    // let seconds = checkTime(today.getSeconds());
    // setTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000); // Update time every second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return { time };
};
