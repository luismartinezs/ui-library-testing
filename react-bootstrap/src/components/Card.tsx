import Card from "react-bootstrap/Card";

const BaseCard = () => {
  return (
    <Card style={{ width: "26rem" }}>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/random/400x200"
      />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          Nisi ullamco laboris ullamco amet ex sit nulla nostrud occaecat in
          incididunt ut in. Et cupidatat occaecat sit ipsum ad duis ex dolor
          dolore. Ipsum nostrud nulla proident occaecat do eu excepteur minim
          magna veniam et voluptate dolor. Duis in nulla ex ad. Dolor ad aute
          pariatur laboris. Proident cillum ipsum anim sunt aliqua quis aute
          laborum est anim.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BaseCard;
