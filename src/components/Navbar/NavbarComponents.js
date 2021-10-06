import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: transparent;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 200ms all ease;
    }
`
export const NavbarContainer = styled.div`
    display:flex;
    align-items: top;

    justify-content: space-between;
    height: 48px;
    padding: 16px 25px;
    width: 100%;
    max-width: 80rem;
    z-index: 1;

`
export const NavLogo = styled(LinkRouter)`
    color: #3399FF;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-content: top;
    margin-left: 25px;
    font-weight: 700;
    text-decoration: none;
    z-index: 999;

`

export const MobileIcon = styled.div`
    display: none;
    opacity: ${({ isOpen }) => (isOpen) ? '0' : '100'};
    transition: 1s ease-in-out;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.5rem;
        cursor: pointer;
        color: #dbdbdbdb;
        padding: 0.8rem;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: top;
    list-style: none;
    text-align: center;
    margin-right: 25px;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 32px;
    justify-content: center;

    &:hover {
        color: #28625E
        transition: color 300ms ease;
    }

`

export const NavLinks = styled(LinkScroll)`
    color: #dbdbdbdb;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-left: 1rem;

    cursor: pointer;

    &:hover {
        color: #28625E;
        transition: 500ms ease-in-out;

    }

    &:active {
        color: #000;
    }
   
`

export const NavSocialLinks = styled.a`
    color: #3399FF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
    cursor: pointer;

    &:hover {
        color: #dbdbdb;
        transition: 500ms ease-in-out;

    }
`