import Nav from "react-bootstrap/Nav"

function Topbar() {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">Link</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Topbar