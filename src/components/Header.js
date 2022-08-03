import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <Nav className="header">
                <Link to="/">
                    <Nav.Item as="h1" className="p-2 ps-3">
                        Pokedex
                    </Nav.Item>
                </Link>
            </Nav>
        );
    };
}

export default Header;