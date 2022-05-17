import React from "react";
import { MainContainer } from "./Questions.element";
import SingleQuestion from "../SingleQuestion/SingleQuestion";

const Questions = ({ questions }) => {
  return (
    <MainContainer>
      {questions.map((ques) => (
        <SingleQuestion key={ques.id} question={ques.question} />
      ))}
    </MainContainer>
  );
};

export default Questions;
