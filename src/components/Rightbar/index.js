import Nav from 'react-bootstrap/Nav'
import './style.css'

// components
import MoviesDropdown from '../MoviesDropdown'
import TvshowsDropdown from '../TvshowsDropdown'
import NewsDropdown from '../NewsDropdown'

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
                {/* this section is for movies dropdown */}
                <MoviesDropdown />

                {/* this section is for TV shows dropdown */}
                <TvshowsDropdown />

                <Nav.Link href="/podcast">RT podcast</Nav.Link>

                {/* this section is for TV shows dropdown */}
                <NewsDropdown />
                
                <Nav.Link href="/showtimes">Showtimes</Nav.Link>
            </Nav>
        </div>
    )
}

export default Rightbar