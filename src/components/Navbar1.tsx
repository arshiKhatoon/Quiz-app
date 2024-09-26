import React from 'react';

const Navbar1: React.FC = () => {
  return (
    <nav className="  dark:bg-black text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">QUIZARD</div>
      <div className="space-x-4">
        <button className="hover:underline">Live Quiz</button>
        <button className="hover:underline">DEFAULT</button>
        <button className="hover:underline">Login</button>
        <button className="hover:underline">Register</button>
      </div>
    </nav>
  );
};

export default Navbar1;
