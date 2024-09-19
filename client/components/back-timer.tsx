import { useEffect, useState } from 'react';

interface IBackTimerProps {
  time: Date;
}

export const BackTimer = ({ time }: IBackTimerProps) => {
  let intervalId: NodeJS.Timeout | null = null;
  const [currentTime, setCurrentTime] = useState('');

  function updateCountdown(): void {
    const now = new Date();
    const remainingTime = time.getTime() - now.getTime();

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    setCurrentTime(
      `${days > 0 ? `${days.toString().padStart(2, '0')} : ` : ''}${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`,
    );
  }

  useEffect(() => {
    intervalId = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, []);

  return <span className="text-4xl font-extrabold">{currentTime}</span>;
};
