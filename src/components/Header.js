import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Header() {
    return (
        <div>
            <Navbar bg="info" variant="info">
                <Container style={{}}>
                    <Navbar.Brand href="http://localhost:3000">EduDeck</Navbar.Brand>
                </Container>

                <Nav>
                    <Nav.Link href="http://localhost:3000">Decks</Nav.Link>
                    <Nav.Link href="http://localhost:3000/create">Create</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}