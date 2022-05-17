import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 680px) {
  }
`;

export const QuestionCont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-bottom: 10px;
`;

export const Question = styled.h6`
  font-size: 16px;
  font-weight: 500;
`;

export const Button = styled.button`
  font-size: 16px;
  height: 36px;
  width: 100px;
  border-radius: 0.5rem;
  background: #1b1212;
  color: #fff;
  font-weight: 500;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;
// export const Heading = styled.h2``;
// export const Heading = styled.h2``;
// export const Heading = styled.h2``;
// export const Heading = styled.h2``;
