import styled from "styled-components";

export const GameBoardStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  //align-items: center;
  justify-content: center;
`;

export const SquareStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //margin: 5px;
  background: deeppink;
  font-weight: 600;
  font-size: 4rem;
  padding: 1rem;
  color: black;
  border-color: #605b56;
  width: 1.2em;
  height: 1.2em;
  line-height: 1.2em;
  float: left;
  border-style: solid;
  border-width: 1px 1px 0 0;
  border-radius: 5px;
  text-align: center;
  cursor: default;
  transition: background 0.3s;
  &:hover {
    background: #9a8297;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoardStyled = styled.div`
  background: #3a1c71; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #ffaf7b,
    #d76d77,
    #3a1c71
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #ffaf7b, #d76d77, #3a1c71);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Holder = styled.div`
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
