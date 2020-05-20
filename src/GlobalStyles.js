import styled from "styled-components";

export const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: deeppink;
  color: black;
  border: black 1px solid;
  font-weight: 600;
  font-size: 4rem;
  padding: 1rem;
  height: 100px;
  width: 100px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoardStyled = styled.div`
  background: linear-gradient(#c1c1c1, #c1c1c1, #c3c3c3);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Holder = styled.div`
  background: black;
  padding: 1rem;
`;

export const StatusBar = styled.div`
  height: 50px;
  font-size: 3rem;
  font-weight: 600;
  font-family: "Fira Code Medium", serif;
  margin-bottom: 1rem;
`;

export const JoinButton = styled.button`
  font-family: "Fira Code Medium", serif;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
  height: 2rem;
  width: 5rem;
`;
