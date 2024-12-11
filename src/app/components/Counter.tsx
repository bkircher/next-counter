"use client";

import React from "react";

import { useCounterStore } from "../store/counter";

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounterStore();

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
