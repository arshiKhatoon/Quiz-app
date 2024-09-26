'use client'

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "General Knowledge",
    description: "Challenge yourself with general knowledge questions.",
    link: "/quizsetting",
  },
  {
    title: "Arts & Literature",
    description: "Test your knowledge in the world of arts and literature.",
    link: "/quizsetting",
  },
  {
    title: "Film & TV",
    description: "Dive into the world of movies and television.",
    link: "/quizsetting",
  },
  {
    title: "Food & Drink",
    description: "Discover delicious trivia on food and drinks.",
    link: "/quizsetting",
  },
  {
    title: "Society & Culture",
    description: "Explore topics about society and culture.",
    link: "/quizsetting",
  },
  {
    title: "Geography",
    description: "Explore the world with geography questions.",
    link: "/quizsetting",
  },
];
