import styled, { css } from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "transparent")};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

const Container = styled.div`
  text-align: center;
`;

const Buttons = () => {
  return (
    <Container>
      <Button primary>Primary</Button>
      <Button>Secondary</Button>
      <Button>Outline</Button>
    </Container>
  );
};

export default Buttons;
export { Button };
