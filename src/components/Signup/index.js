import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'

// const errMessage = document.getElementById('Button');
// if(typeof errors != 'undefined') {
//     errors.forEach(error) => {
//     <li>{error.message}</li>
// }}
// name password email
function Signup(props) {
    return (props.trigger) ? (
        <div className='signup-popup'>
            <div className='popup-item'>
                {props.children}
                <ul>
                    {/* {errMessage} */}
                </ul>
                <FontAwesomeIcon className='fa-lg close-btn' onClick={() => props.setTrigger(false)} icon={faXmark} />
                <Form onSubmit={() => props.setTrigger(true)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password2" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    ) : ""
}

export default Signup