// components
import Searchbar from '../Searchbar'
import Rightbar from '../Rightbar'

// bootstrap components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from './img/rotten-potatos.png'
import './style.css'

function Topbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} alt='Rotten-Potatos logo'></img>
                </Navbar.Brand>
                
                <Searchbar />
                <Rightbar />

            </Container>
        </Navbar>
    )
}

export default Topbar