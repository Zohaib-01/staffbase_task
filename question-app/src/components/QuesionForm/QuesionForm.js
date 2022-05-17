import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Input, MainContainer, Button } from "./QuesionForm.elements";

const QuesionForm = ({ inputText, setInputText, questions, setQuestions }) => {
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestions([...questions, { question: inputText, id: uuidv4() }]);
    setInputText("");
  };

  return (
    <MainContainer>
      <Form>
        <Input type="text" value={inputText} onChange={handleInputChange} />
        <Button type="submit" onClick={handleSubmit}>
          Add Question
        </Button>
      </Form>
    </MainContainer>
  );
}; 

export default QuesionForm;
