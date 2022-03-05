import Nav from "react-bootstrap/Nav"
// import React, {useState} from 'react'

function Topbar() {
    // const [searchTerm, setSearchTerm] = useState("")
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/comments">Comments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">idkyet</Nav.Link>
            </Nav.Item>
            {/* a suggestion for the search bar */}
            {/* <Nav.Item>
                <input 
                type="text" 
                placeholder="Search..."
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} />
            </Nav.Item> */}
        </Nav>
    )
}

export default Topbar