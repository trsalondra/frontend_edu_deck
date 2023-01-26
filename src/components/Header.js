import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Header() {
    return (
        <Navbar bg="info" variant="info" style={{margin:"0px 0px 16px 0px"}}>
            <Container>
                <Navbar.Brand href="http://localhost:3000">EduDeck</Navbar.Brand>

                <Nav>
                    <Nav.Link href="http://localhost:3000">Decks</Nav.Link>
                    <Nav.Link href="http://localhost:3000/create">Create</Nav.Link>
                </Nav>
            </Container>

        </Navbar>

    )
}