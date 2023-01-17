import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { emailValidation } from "../common/validation";

export default function Login() {
  const [disable, setDisable] = useState(true);
  const [eVal, SetEval] = useState(true);

  const emailCheck = (e) => {
    if (emailValidation(e.target.value)) {
      setDisable(true);
      SetEval(true);
    } else {
      setDisable(false);
      SetEval(false);
    }
  };

  return (
    <>
      <Container>
        <h2>Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={emailCheck}
            />
            <Form.Text className="text-muted">
              {!eVal ? "that's Suck." : "good"}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">{"that's Suck."}</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={disable}>
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
}
