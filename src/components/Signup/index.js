import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// name password email
function Signup(props) {
    return (
        // <div className='popup'>
        //     <div className='popup-inner'>
        //         <button className='close-btn' onClick={props.setTrigger(false)}>X</button>
        //         {props.children}
                <Form action="/users/sign-up" method="POST">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        //     </div>
        // </div>
    )
}

export default Signup