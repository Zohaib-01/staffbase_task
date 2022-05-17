import React from "react";
import {
  MainContainer,
  QuestionCont,
  Question,
  Button,
} from "./SingleQuestion.elements";

const SingleQuestion = ({ question }) => {
  const handleAnswerClick = () => {
    console.log("click");
  };
  return (
    <MainContainer>
      <QuestionCont>
        <Question>{question}</Question>
        <Button onClick={handleAnswerClick}>Answer</Button>
      </QuestionCont>
    </MainContainer>
  );
};

export default SingleQuestion;
