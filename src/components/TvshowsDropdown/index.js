import Nav from 'react-bootstrap/Nav'
import './style.css'

function TvshowsDropdown() {
    return (
        <div className='dropdown'>
            <Nav.Link href="/tv-shows">TV shows</Nav.Link>
            <div className='tvshows-dropdown-content'>
                <div className='dp-flex'>
                    <div className='dropdown-items'>
                        <p>COMING SOON...</p>
                    </div>
                    <div className='dropdown-imgs'>
                        <p>CERTIFIED FRESH PICKS</p>
                        {/* <div className='movie-poster'>
                            <img src={{}} alt='movie poster'></img>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TvshowsDropdown