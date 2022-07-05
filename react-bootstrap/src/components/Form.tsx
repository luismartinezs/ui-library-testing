import React from "react";

import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const BaseForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <FloatingLabel controlId="floatingTextarea2" label="Essay">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "5rem" }}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Fruit</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Select file</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" id="checkbox1" label="Is going" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Start date</Form.Label>
        <Form.Control type="date" placeholder="Start date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Number of tentacles (10-100)</Form.Label>
        <Form.Control type="number" min="10" max="100" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check inline type="radio" name="drone" id="radio1" label="Huey" />
        <Form.Check
          inline
          type="radio"
          name="drone"
          id="radio2"
          label="Dewey"
        />
        <Form.Check
          inline
          type="radio"
          name="drone"
          id="radio3"
          label="Louie"
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
};

export default BaseForm;
