import { useState, useEffect } from 'react';

const STORAGE_KEY = 'boxless_lp_countdown_end';
const DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function getEndTime() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const end = parseInt(stored, 10);
    if (end > Date.now()) return end;
  }
  const end = Date.now() + DURATION_MS;
  localStorage.setItem(STORAGE_KEY, end.toString());
  return end;
}

export function useCountdown() {
  const [endTime] = useState(getEndTime);
  const [timeLeft, setTimeLeft] = useState(() => endTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = endTime - Date.now();
      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, totalMs: timeLeft };
}
