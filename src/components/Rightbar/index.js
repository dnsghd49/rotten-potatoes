import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'
import './style.css'

// components
import MoviesDropdown from '../MoviesDropdown'
import TvshowsDropdown from '../TvshowsDropdown'
import NewsDropdown from '../NewsDropdown'
import Signup from '../Signup'

// posters 
// import posterOne from ''
// import posterTwo from ''
// import posterThree from ''

function Rightbar() {
    const [signupPopup, setSignupPopup] = useState(false)
    // const [loginPopup, setLoginPopup] = useState(false)

    return (
        <div className='rightbar-container'>
            <Nav className="justify-content-end nav-fonts">
                <Nav.Link href="/movies">What's the Potatometer®?</Nav.Link>
                <Nav.Link href="/critics">Critics</Nav.Link>
                <Nav.Link onClick={() => setSignupPopup(true)}>SIGN UP</Nav.Link>
                <Nav.Link href="/login">LOG IN</Nav.Link>
            </Nav>
            <Signup trigger={signupPopup} setTrigger={setSignupPopup}>
                <button className='close-btn' onClick={() =>setSignupPopup(false)}>close</button>
            </Signup>

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