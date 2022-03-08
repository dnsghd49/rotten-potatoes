import Nav from 'react-bootstrap/Nav'
import './style.css'

// posters 
// import posterOne from ''
// import posterTwo from ''
// import posterThree from ''

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
                                <p>MOVIES IN THEATERS</p>
                                <Nav.Link href="/tv-shows">Opening This Week</Nav.Link>
                                <Nav.Link href="/podcast">Top Box Office</Nav.Link>
                                <Nav.Link href="/tv-shows">Coming Soon to Theaters</Nav.Link>
                                <Nav.Link href="/podcast">Weekend Earnings</Nav.Link>
                                <Nav.Link href="/tv-shows">Certified Fresh Movies</Nav.Link>
                            </div>
                            <div className='dropdown-items'>
                                <p>ON DVD & STREAMING</p>
                                <Nav.Link href="/tv-shows">VUDU</Nav.Link>
                                <Nav.Link href="/podcast">Netflix Streaming</Nav.Link>
                                <Nav.Link href="/tv-shows">iTunes</Nav.Link>
                                <Nav.Link href="/podcast">Amazon and Amazon Prime</Nav.Link>
                                <Nav.Link href="/tv-shows">Top DVD & Streaming</Nav.Link>
                                <Nav.Link href="/podcast">Certified Fresh Movies</Nav.Link>
                                <Nav.Link href="/tv-shows">Browse All</Nav.Link>
                            </div>
                            <div className='dropdown-items'>
                                <p>MORE</p>
                                <Nav.Link href="/tv-shows">Top Movies</Nav.Link>
                                <Nav.Link href="/podcast">Trailers</Nav.Link>
                            </div>
                            <div className='dropdown-imgs'>
                                <p>CERTIFIED FRESH PICKS</p>
                                <div className='movie-poster'>
                                    <img src={{}} alt='movie poster'></img>
                                    <img src={{}} alt='movie poster'></img>
                                    <img src={{}} alt='movie poster'></img>
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