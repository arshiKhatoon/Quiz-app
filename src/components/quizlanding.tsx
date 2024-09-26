import { Spotlight } from "./ui/Spotlight"

export default function QuizLandingPage() {
  return (
    <div className=" min-h-screen dark:bg-black flex flex-col items-center justify-center text-white">
      {/* Icon and Title */}
      <Spotlight></Spotlight>
      <div className="flex flex-col items-center">
        <div className="bg-purple-700 rounded-full p-4 mb-4">
          <img
            src="/question-mark-icon.png" // Replace with the correct path to the icon image
            alt="Question Mark"
            className="w-16 h-16"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-center">
          Computer Science Basic Quiz 1
        </h1>
        <p className="text-center text-lg mb-6">
          Answer these simple questions correctly and earn coins
        </p>
      </div>

      {/* Difficulty Level and Question Count */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center mb-2">
          <span className="text-lg">Difficulty Level: </span>
          <span className="ml-2 bg-green-500 text-black px-2 py-1 rounded-md">Easy</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg">💡 10 Questions</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4 w-64">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300">
          Play again ⟳
        </button>
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300">
          Play with Friends 👥
        </button>
        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition duration-300">
          See Result ➡️
        </button>
      </div>
    </div>
  );
}