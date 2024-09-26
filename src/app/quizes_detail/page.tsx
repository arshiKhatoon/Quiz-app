// pages/index.tsx

import Countdown from "@/components/Countdown";
import Navbar1 from "@/components/Navbar1";

import { CardHoverEffectDemo } from "@/components/QuizCard";
import QuizLandingPage from "@/components/quizlanding";

/*import React from "react";

const quizzes = [
  {
    title: "Computer Science Basic Quiz 1",
    questions: 10,
    plays: 428,
  },
  {
    title: "Computer Science Basic Quiz 2",
    questions: 10,
    plays: 120,
  },
  {
    title: "General Introduction Quiz 1",
    questions: 10,
    plays: 76,
  },
  {
    title: "General Introduction Quiz 2",
    questions: 10,
    plays: 25,
  },
  {
    title: "General Introduction Quiz 3",
    questions: 10,
    plays: 9,
  },
];

const QuizPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar *
      <nav className=" dark:bg-black p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">QUIZARD</h1>
        <div className="space-x-4">
          <button className="text-white">Live Quiz</button>
          <button className="text-white">Login</button>
          <button className="text-white">Register</button>
        </div>
      </nav>

      {/* Main Content *
      <div className="container mx-auto p-6">
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Enter Game Code"
            className="border border-gray-300 rounded-lg p-2 w-1/3"
          />
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2">Join Game</button>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Computer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quizzes.map((quiz, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl">{quiz.title}</h3>
              <p>{quiz.questions} Qs</p>
              <p>{quiz.plays} Plays</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Physics</h2>
        {/* Placeholder for Physics quizzes; you can add more items here similar to above 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add Physics quizzes here 
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
*/
export default function Page(){
return(
  <>
  <Navbar1></Navbar1>
<CardHoverEffectDemo></CardHoverEffectDemo>
<QuizLandingPage></QuizLandingPage>
<Countdown></Countdown>
  </>
)

} 