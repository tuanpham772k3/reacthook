import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Tuấn Thành Đạt</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/context">Context</Nav.Link>
                        <NavDropdown title="Hiển thị" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/count">Bộ đếm</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/create">
                                Create User
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Delete User</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Update User
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
