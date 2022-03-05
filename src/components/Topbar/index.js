import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Logo from './img/rotten-potatos.png'

import './style.css'

function Topbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img style={{ padding: '1em' }} src={Logo} alt='Rotten-Potatos logo'></img>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/movies">Movies</Nav.Link>
                    <Nav.Link href="/comments">comments</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/devs">Our TEAM</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Topbar