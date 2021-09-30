import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';


export const SidebarContainer = styled.aside`
    display: flex;
    position: fixed;
    z-index: 998;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    justify-content: end;
    align-items: end;
    top: 0%;
    right: 0;
    transition: 500ms ease-in-out;
    transition-timing-function: cubic-bezier(.86,-0.1,.07,1);
    opacity: ${({ isOpen }) => (isOpen ? '94%' : '0')};
    right: ${({ isOpen }) => (isOpen) ? '0' : '-100%'};
    padding-top: 8rem;
    padding-bottom: 4rem;
    padding-right: 1rem;


`

export const CloseIcon = styled(FaTimes)`
    color: #fff;

`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`

export const SidebarWrapper = styled.div`
    color: #fff;

`

export const SidebarMenu = styled.ul`
    display:flex;
    justify-content: end;
    text-align: end;
    flex-direction: column;
    
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: right;
    font-size: 2.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 500ms ease-in-out;
    }

`

