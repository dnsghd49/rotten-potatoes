
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

function Login(props) {
  let navigate = useNavigate();
  const loginRedirect = () => {
    let path = `/dashboard`;
    navigate(path);
  };

  return props.trigger ? (
    <div className="login-popup">
      <div className="login-popup-item">
        <FontAwesomeIcon
          className="fa-lg login-close-btn"
          onClick={() => props.setTrigger(false)}
          icon={faXmark}
        />
        <Form className="login-form" onSubmit={() => props.setTrigger(false)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="login-label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="login-label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={loginRedirect}>
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