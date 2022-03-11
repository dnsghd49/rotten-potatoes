import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

function Login(props) {
  return props.trigger ? (
    <div className="login-popup">
      <div className="login-popup-item">
        <FontAwesomeIcon
          className="fa-lg login-close-btn"
          onClick={() => props.setTrigger(false)}
          icon={faXmark}
        />
        <Form Form onSubmit={() => props.setTrigger(false)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Login;
