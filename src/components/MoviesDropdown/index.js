import Nav from 'react-bootstrap/Nav'
import './style.css'

function MoviesDropdown() {
    return (
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
    )
}

export default MoviesDropdown