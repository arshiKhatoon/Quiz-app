"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { categoryOptions, difficultyOptions } from "@/constants";


const QuizSettings = () => {
  const router = useRouter();
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [limit, setLimit] = useState([10]);

  const handleQuizStart = () => {
    router.push(
      `/questions?category=${category}&difficulty=${difficulty}&limit=${limit[0]}`
    );
  };

  return (
    <div className="  min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white   ">

      <Select value={category} onValueChange={(value) => setCategory(value)}>
        <SelectTrigger className="w-full md:max-w-xs xl:max-w-md  ">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categoryOptions.map((category) => (
            <SelectItem value={category.value} key={category.value}>
              {category.option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      

      <Select
        value={difficulty}
        onValueChange={(value) => setDifficulty(value)}
      >
        <SelectTrigger className="w-full md:max-w-xs xl:max-w-md my-6 ">
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent>
          {difficultyOptions.map((difficulty) => (
            <SelectItem value={difficulty.value} key={difficulty.value}>
              {difficulty.option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-sm lg:text-sm font-semibold my-3">
        Total Questions: {limit[0]}
      </p>
      <Slider
        value={limit}
        onValueChange={(value) => setLimit(value)}
        max={50}
        step={5}
        min={5}
        className="w-full md:max-w-xs xl:max-w-md my-3"
      />
      <Button disabled={!difficulty || !category} onClick={handleQuizStart}>
        Start Quiz
      </Button>
      
      
    </div>
  );
};

export default QuizSettings;