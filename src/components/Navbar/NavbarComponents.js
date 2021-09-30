import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom'
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
    justify-content: space-between;
    height: 48px;
    padding: 0 24px;
    width: 100%;
    max-width: 1100px;
    z-index: 1;

`
export const NavLogo = styled(LinkRouter)`
    color: #3399FF;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.25rem;
    display: flex;
    align-items: top;
    margin-left: 24px;
    font-weight: 700;
    text-decoration: none;
    z-index: 999;

`

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 45%);
        font-size: 1.5rem;
        cursor: pointer;
        color: #dbdbdbdb;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 24px;
    
    @media screen and (max-width: 786px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 32px;

    &:hover {
        color: #3399FF
        transition: color 300ms ease;
    }

`

export const NavLinks = styled(LinkScroll)`
    color: #dbdbdbdb;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: 1rem;

    cursor: pointer;

    &:hover {
        color: #3399FF;
        transition: 500ms ease-in-out;

    }
    &:active {
        color: #dbdbdb;
    }
`