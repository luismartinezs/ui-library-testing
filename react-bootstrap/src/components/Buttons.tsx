import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Buttons = () => {
  return (
    <Row className="mx-0">
      <Button as={Col} variant="primary">
        Primary
      </Button>
      <Button as={Col} variant="secondary" className="mx-2">
        Secondary
      </Button>
      <Button as={Col} variant="outline">
        Outline
      </Button>
    </Row>
  );
};

export default Buttons;
