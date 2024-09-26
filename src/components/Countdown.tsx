"use client"; // Ensure this is a client component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct router import for Next.js

export default function CountdownCircleTimer() {
  const [counter, setCounter] = useState(3);
  const router = useRouter();

  useEffect(() => {
    // Only start the countdown when the counter is greater than 0
    if (counter > 0) {
      const countdownInterval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      // Clean up the interval on component unmount
      return () => clearInterval(countdownInterval);
    } else {
      // Navigate to the Quiz page once the counter hits 0
      router.push("/");
    }
  }, [counter, router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-white text-4xl mb-4">Quiz Starts in</h1>
        <div className="text-green-400 text-7xl font-bold">{counter}</div>
      </div>
    </div>
  );
}

