import React from 'react';
import { IoLogoFacebook } from 'react-icons/io5';
import { GrInstagram, GrTwitter } from 'react-icons/gr';
import { FaDiscord } from "react-icons/fa";
import { SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBarSocialLink } from './SidebarComponents';

function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                ✕
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="join" onClick={toggle} spy={true} smooth={true} duration={500} offset={-48}>
                        .join()
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle} spy={true} smooth={true} duration={500} offset={-48}>
                        .about()
                    </SidebarLink>
                    <SidebarLink to="events" onClick={toggle} spy={true} smooth={true} duration={500} offset={-48}>
                        .events()
                    </SidebarLink>
                    <SideBarSocialLink href="https://www.facebook.com/AstonCSS/" >
                        <IoLogoFacebook size="50" />
                    </SideBarSocialLink>

                    <SideBarSocialLink href="https://www.instagram.com/astoncomputersciencesociety/?hl=en">
                        <GrInstagram size="50" />
                    </SideBarSocialLink>

                    <SideBarSocialLink href="https://twitter.com/astoncss?lang=en">
                        <GrTwitter size="50" />
                    </SideBarSocialLink>

                    <SideBarSocialLink href="https://discord.com/invite/7QgyHpYU9y">
                        <FaDiscord size="50" />
                    </SideBarSocialLink>
                    
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar
