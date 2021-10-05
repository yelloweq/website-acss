import React, { useState } from 'react';
import { IoLogoFacebook, IoEllipsisVertical } from 'react-icons/io5';
import { FaDiscord } from "react-icons/fa";
import { GrInstagram, GrTwitter } from 'react-icons/gr';
import { animateScroll as scroll } from 'react-scroll';
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

function Navbar({ toggle, isOpen }) {


    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    .acss()
                </NavLogo>
                <MobileIcon onClick={toggle} isOpen={isOpen}>
                    <IoEllipsisVertical size="30" />
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
                    <NavItem>
                        <NavSocialLinks href="https://twitter.com/astoncss?lang=en" onMouseEnter={onHover} onMouseLeave={onHover}>
                            <GrTwitter size="20" />
                        </NavSocialLinks>
                    </NavItem>
                    <NavItem>
                        <NavSocialLinks href="https://discord.com/invite/7QgyHpYU9y" onMouseEnter={onHover} onMouseLeave={onHover}>
                            <FaDiscord size="20" />
                        </NavSocialLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer >
        </Nav >
    )
}

export default Navbar
