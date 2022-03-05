import Nav from 'react-bootstrap/Nav'
import './style.css'

function Rightbar() {
    return (
        <div className='rightbar-container'>
            <Nav className="justify-content-end nav-fonts">
                <Nav.Link href="/movies">What's the Potatometer®?</Nav.Link>
                <Nav.Link href="/critics">Critics</Nav.Link>
                <Nav.Link href="#">SIGN UP</Nav.Link>
                <Nav.Link href="#">LOG IN</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="/tv-shows">TV shows</Nav.Link>
                <Nav.Link href="/podcast">RT podcast</Nav.Link>
                <Nav.Link href="/new">New</Nav.Link>
                <Nav.Link href="/showtimes">Showtimes</Nav.Link>
            </Nav>
        </div>
    )
}

export default Rightbar