import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 1240px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 0px;

  @media screen and (max-width: 680px) {
  }
`;

export const Heading = styled.h2`
  font-size: 18px;
  color: #fff;
  font-weight: 400;
`;
