import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 1240px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5%;

  @media screen and (max-width: 680px) {
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  color: #fff;
  font-weight: 400;
`;

export const Input = styled.input`
  height: 40px;
  width: 80%;
  outline: none;
  border: 2px solid #1b1212;
  padding: 0rem 0.5rem;
`;

export const Button = styled.button`
  font-size: 16px;
  height: 40px;
  width: 120px;
  background: #1b1212;
  color: #fff;
  font-weight: 500;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;
