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
                <div className='dropdown'>
                    <Nav.Link href="/movies">Movies</Nav.Link>
                    <div className='dropdown-content'>
                        <div className='dp-flex'>
                            <div className='dropdown-items'>
                                <p>col</p>
                                <Nav.Link href="/tv-shows">TV shows</Nav.Link>
                                <Nav.Link href="/podcast">RT podcast</Nav.Link>
                                <Nav.Link href="/tv-shows">TV shows</Nav.Link>
                                <Nav.Link href="/podcast">RT podcast</Nav.Link>
                                <Nav.Link href="/tv-shows">TV shows</Nav.Link>
                            </div>
                            <div className='dropdown-items'>
                                <p>col</p>
                                <Nav.Link href="/tv-shows">TV shows</Nav.Link>
                                <Nav.Link href="/podcast">RT podcast</Nav.Link>
                                <Nav.Link href="/tv-shows">TV shows</Nav.Link>
                                <Nav.Link href="/podcast">RT podcast</Nav.Link>
                                <Nav.Link href="/tv-shows">TV shows</Nav.Link>
                                <Nav.Link href="/podcast">RT podcast</Nav.Link>
                                <Nav.Link href="/tv-shows">TV shows</Nav.Link>
                            </div>
                            <div className='dropdown-items'>
                                <p>col</p>
                                <Nav.Link href="/tv-shows">TV shows</Nav.Link>
                                <Nav.Link href="/podcast">RT podcast</Nav.Link>
                            </div>
                            <div className='dropdown-imgs'>
                                <p>CERTIFIED FRESH PICKS</p>
                                <div className='movie-poster'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Nav.Link href="/tv-shows">TV shows</Nav.Link>
                <Nav.Link href="/podcast">RT podcast</Nav.Link>

                <Nav.Link href="/new">News</Nav.Link>
                <Nav.Link href="/showtimes">Showtimes</Nav.Link>
            </Nav>
        </div>
    )
}

export default Rightbar