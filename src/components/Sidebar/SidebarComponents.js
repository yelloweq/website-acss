import styled from 'styled-components';
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
    transition: 1s cubic-bezier(.86,0,0.6,1);
    opacity: ${({ isOpen }) => (isOpen ? '95%' : '0')};
    right: ${({ isOpen }) => (isOpen) ? '0' : '-100%'};
    padding-top: 8rem;
    padding-bottom: 4rem;
    padding-right: 1rem;


`

// export const CloseIcon = styled(FaTimes)`
//     color: #3399FF;



// `

export const Icon = styled.div`
    position: absolute;
    display:flex;
    width: 48px;
    height: 48px;
    margin: 2px 4px;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    color: #3399FF;
    &:hover {
        color: #dbdbdb;
    }

`

export const SidebarWrapper = styled.div`
    color: #fff;

`

export const SidebarMenu = styled.ul`
    display:block;
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
export const SideBarSocialLink = styled.a`
    display: inline-block;
    align-items: center;
    justify-content: center;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #3399FF;
    cursor: pointer;
    margin: 0 0 0 2rem;

    &:hover {
        color: #dbdbdb;
        transition: 500ms ease-in-out;
    }
`

