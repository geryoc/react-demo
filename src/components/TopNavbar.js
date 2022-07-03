import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function TopNavbar() {
    return (
        <Navbar bg="light" expand="lg">;
            <Container>
                <Navbar.Brand href="#home">MovieTicket</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#peliculas">Peliculas</Nav.Link>
                        <Nav.Link href="#teatros">Teatros</Nav.Link>
                        <Nav.Link href="#shows">Shows</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
