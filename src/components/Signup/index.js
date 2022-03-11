import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { getUsers, createUser, deleteUser } from './backend/controllers/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'


// name password email
function Signup(props) {
    const [users, setUsers] = useState(false);
    
    useEffect(() => {
      getUser();
    }, []);
    
    function getUser() {
      fetch('http://localhost:3001')
        .then(response => {
          return response.text();
        })
        .then(data => {
          setUsers(data);
        });
    }
    
    function createUser() {
      let name = prompt('Enter user name');
      let email = prompt('Enter user email');
      let password = prompt('Enter user password');
      fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getUser();
        });
    }
    
    function deleteUser() {
      let id = prompt('Enter user id');
      fetch(`http://localhost:3001/users/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getUser();
        });
    }
    return (props.trigger) ? (
        <div className='signup-popup'>
            <div className='popup-item'>
                {props.children}
                <div>
                    {users ? users : 'There is no merchant data available'}
                    <br />
                    <button onClick={createUser}>Add user</button>
                    <br />
                    <button onClick={deleteUser}>Delete user</button>
                </div>
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