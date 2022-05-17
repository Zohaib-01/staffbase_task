import styled from "styled-components";

export const MainContainer = styled.div`
  height: 64px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  background: #1b1212;
  padding: 0% 5%;

  @media screen and (max-width: 680px) {
  }
`;

export const Heading = styled.h2`
  font-size: 18px;
  color: #fff;
  font-weight: 400;
`;
