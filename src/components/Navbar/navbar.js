import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io5';
import { GrInstagram } from 'react-icons/gr'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavSocialLinks,
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
                    <NavItem>
                        <NavSocialLinks href="https://www.facebook.com/AstonCSS/" onMouseEnter={onHover} onMouseLeave={onHover}>
                            <IoLogoFacebook size="20" />
                        </NavSocialLinks>
                    </NavItem>
                    <NavItem>
                        <NavSocialLinks href="https://www.instagram.com/astoncomputersciencesociety/?hl=en" onMouseEnter={onHover} onMouseLeave={onHover}>
                            <GrInstagram size="20" />
                        </NavSocialLinks>
                    </NavItem>

                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
