import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'

// components
import MoviesDropdown from '../MoviesDropdown'
import TvshowsDropdown from '../TvshowsDropdown'
// import NewsDropdown from '../NewsDropdown'
import Signup from '../Signup'
import Login from '../Login'
// import Dashboard from '../Dashboard'

// posters
// import posterOne from ''
// import posterTwo from ''
// import posterThree from ''

function Rightbar() {
    const [signupPopup, setSignupPopup] = useState(false)
    const [loginPopup, setLoginPopup] = useState(false)
    const navigate = useNavigate();

    const routeShowtimes = () => {
        let path = "/showtimes";
        navigate(path);
    };
    
    return (
        <div className="rightbar-container">
            <Nav className="justify-content-end nav-fonts">
                <Nav.Link href="/comments">What's the Potatometer®?</Nav.Link>
                {/* <Nav.Link href="/movies">What's the Potatometer®?</Nav.Link> */}
                <Nav.Link href="/developers">Critics</Nav.Link>
                <Nav.Link onClick={() => setSignupPopup(true)}>SIGN UP</Nav.Link>
                <Nav.Link onClick={() => setLoginPopup(true)}>LOG IN</Nav.Link>
            </Nav>

            {/* signup/login popup */}
            <Signup trigger={signupPopup} setTrigger={setSignupPopup}/>
            <Login trigger={loginPopup} setTrigger={setLoginPopup} />
            <Nav className="justify-content-end">
                {/* this section is for movies dropdown */}
                <MoviesDropdown />

                {/* this section is for TV shows dropdown */}
                <TvshowsDropdown />

                <Nav.Link href="/podcast">RT podcast</Nav.Link>
                <Nav.Link onClick={routeShowtimes}>Showtimes</Nav.Link>
                <Nav.Link href="/developers">Our Team</Nav.Link>
            </Nav>
        </div>
    );
}

export default Rightbar;
