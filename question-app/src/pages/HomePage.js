import React, { useEffect, useState } from "react";
import { Header, QuestionForm, Questions } from "../components/index";

const HomePage = () => {
  const [inputText, setInputText] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: 112333,
      question: "What food have you never tried?",
    },
    {
      id: 112334,
      question: "What's something that you never seem to get tired of doing?",
    },
    {
      id: 112336,
      question: "Are you currently where you want to be in life?",
    },
    {
      id: 112337,
      question: "What food have you never tried?",
    },
    {
      id: 112338,
      question: "What food have you never tried?",
    },
  ]);

  useEffect(() => {}, [questions]);

  return (
    <div>
      <Header />
      <QuestionForm
        inputText={inputText}
        setInputText={setInputText}
        questions={questions}
        setQuestions={setQuestions}
      />

      <Questions questions={questions} />
    </div>
  );
};

export default HomePage;
