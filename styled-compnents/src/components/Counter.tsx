import React from "react";
import styled from "styled-components";
import { Button } from "./Buttons";

//  Styled components: stateless

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
`;
const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;

// Stateful components: style-less

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <StyledCounter>
      <Paragraph>{count}</Paragraph>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </StyledCounter>
  );
};

export default Counter;
