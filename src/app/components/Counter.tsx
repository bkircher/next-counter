"use client";

import React, { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "counter-storage";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    if (storedValue !== null) {
      const parsedValue = Number.parseInt(storedValue, 10);
      if (!Number.isNaN(parsedValue)) {
        setCount(parsedValue);
      }
    }

    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, String(count));
  }, [count, hasHydrated]);

  const increment = useCallback(() => {
    setCount((current) => current + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((current) => current - 1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Counter</h1>
      <p className="text-4xl font-semibold mb-6">{count}</p>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="px-6 py-2 bg-blue-500 text-white font-medium text-lg rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-6 py-2 bg-red-500 text-white font-medium text-lg rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
