// src/hooks/useCountdown.ts
import { useState, useEffect, useMemo } from 'react';

export const useCountdown = (initialSeconds: number, storageKey: string) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  const deadline = useMemo(() => {
    if (typeof window === 'undefined') return 0;
    const saved = localStorage.getItem(storageKey);
    const now = Date.now();
    
    if (saved) {
      const savedTime = parseInt(saved);
      if (savedTime < now) {
        const newDeadline = now + initialSeconds * 1000;
        localStorage.setItem(storageKey, newDeadline.toString());
        return newDeadline;
      }
      return savedTime;
    }

    const newDeadline = now + initialSeconds * 1000;
    localStorage.setItem(storageKey, newDeadline.toString());
    return newDeadline;
  }, [initialSeconds, storageKey]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = Math.floor((deadline - now) / 1000);

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft(0);
        setIsExpired(true);
      } else {
        setTimeLeft(distance);
        setIsExpired(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const formatTime = () => {
    if (timeLeft === null) return "--:--";
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return { timeLeft, formattedTime: formatTime(), isExpired, isReady: timeLeft !== null };
};