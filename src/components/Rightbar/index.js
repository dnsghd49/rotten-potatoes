import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'

// components
import MoviesDropdown from '../MoviesDropdown'
import TvshowsDropdown from '../TvshowsDropdown'
import NewsDropdown from '../NewsDropdown'
import Signup from '../Signup'
import Login from '../Login'

// posters 
// import posterOne from ''
// import posterTwo from ''
// import posterThree from ''

function Rightbar() {
    const [signupPopup, setSignupPopup] = useState(false)
    const [loginPopup, setLoginPopup] = useState(false)

    return (
        <div className='rightbar-container'>
            <Nav className="justify-content-end nav-fonts">
                <Nav.Link href="/movies">What's the Potatometer®?</Nav.Link>
                <Nav.Link href="/critics">Critics</Nav.Link>
                <Nav.Link onClick={() => setSignupPopup(true)}>SIGN UP</Nav.Link>
                <Nav.Link onClick={() => setLoginPopup(true)}>LOG IN</Nav.Link>
            </Nav>
                {/* signup popup */}
            <Signup trigger={signupPopup} setTrigger={setSignupPopup}>
                <FontAwesomeIcon className='fa-lg close-btn' onClick={() => setSignupPopup(false)} icon={faXmark} />
            </Signup>

                {/* login popup */}
            <Login trigger={loginPopup} setTrigger={setLoginPopup}>
                <FontAwesomeIcon className='fa-lg close-btn' onClick={() => setLoginPopup(false)} icon={faXmark} />
            </Login>

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