import Link from "next/link";

const quizzes = [
  { id: 1, name: "General Knowledge Quiz", description: "Test your general knowledge across various topics!" },
  { id: 2, name: "Science Trivia", description: "Challenge yourself with science-related questions!" },
  { id: 3, name: "History Quiz", description: "How much do you know about world history?" },
  { id: 4, name: "Geography Quiz", description: "Explore the world through geography-based questions." },
  { id: 5, name: "Pop Culture Quiz", description: "Fun questions about pop culture and entertainment." },
  // Add more quizzes as needed
];

export default function QuizzesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Available Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">{quiz.name}</h2>
            <p className="text-sm text-gray-500 mt-2">{quiz.description}</p>
            <Link href={`/quizzes/${quiz.id}`}>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
