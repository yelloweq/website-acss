import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarComponents';

function Navbar({ toggle }) {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    .acss()
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" onMouseEnter={onHover} onMouseLeave={onHover}>.about()</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="events" onMouseEnter={onHover} onMouseLeave={onHover}>.events()</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="join" onMouseEnter={onHover} onMouseLeave={onHover}>.join()</NavLinks>
                    </NavItem>

                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
