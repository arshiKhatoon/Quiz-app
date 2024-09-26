'use client';
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-gradient-to-r from-indigo-900 to-purple-900">
      
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(255, 255, 255, 0.2)"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          Play Quiz
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Welcome to Quizard, where knowledge meets fun! Unleash your intellect with our captivating quizzes spanning various topics. Challenge yourself, compete with friends, and embark on a journey of discovery. Quizard - Where every question unlocks a world of possibilities!
        </p>
        
        <div className="mt-6">
          <Link href="/start">
            <Button
              borderRadius="1.75rem"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition-colors duration-300 ease-in-out shadow-lg"
            >
              Start Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
