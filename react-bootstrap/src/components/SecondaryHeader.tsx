import Nav from "react-bootstrap/Nav";

const SecondaryHeader = () => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="/">Link 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Link 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Link 3</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SecondaryHeader;
