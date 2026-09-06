import React, { useState, useRef } from 'react';

export default function Timer(): React.JSX.Element {
  // 1. Explicitly type state as number | null
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);

  // 2. Type intervalRef to hold NodeJS.Timeout / number or null
  const intervalRef = useRef<number | null>(null);

  function handleStart(): void {
    setStartTime(Date.now());
    setNow(Date.now());

    // Clear existing timer if intervalRef.current exists
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    // Assign interval ID to ref
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop(): void {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}