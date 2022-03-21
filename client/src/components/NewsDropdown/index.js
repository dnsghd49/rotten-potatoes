import Nav from 'react-bootstrap/Nav'
import './style.css'

function NewsDropdown() {
    return (
        <div className='dropdown'>
            <Nav.Link href="/news">News</Nav.Link>
            <div className='news-dropdown-content'>
                <div className='dp-flex'>
                    <div className='dropdown-items'>
                        <p>COMING SOON...</p>
                    </div>
                    <div className='dropdown-imgs'>
                        <p>REAL SOON...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDropdown