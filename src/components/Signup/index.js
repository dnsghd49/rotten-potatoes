import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'


// name password email
function Signup(props) {
    return (props.trigger) ? (
        <div className='signup-popup'>
            <div className='signup-popup-item'>
                {props.children}
                <FontAwesomeIcon className='fa-lg signup-close-btn' onClick={() => props.setTrigger(false)} icon={faXmark} />
                <Form onSubmit={() => props.setTrigger(true)} action="/users/signup" method="POST">
                    <Form.Group className="mb-3 signup-label" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3 signup-label" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3 signup-label" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 signup-label" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Your Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    ) : ""
}

export default Signup;
