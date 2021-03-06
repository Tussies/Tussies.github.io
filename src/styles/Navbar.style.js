import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh": "80px")};
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    flex: 100%;
    display: flex;
`;

export const NavbarInnerContainer = styled.div `
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: whitesmoke;
    font-size: x-large;
    margin-top: 40px;
    text-decoration: none;
    margin-left: 30px;
    transition: all 0.1s ease 0s;

    @media (max-width: 700px) {
        display: none;

    }

    &:hover {
        color: #17b6a9;
    }

    &:focus {
        color: rgba(259, 146, 90, 0.9);
    }
`;

export const Hamburger = styled.button`
    color: whitesmoke;
    font-size: 300%;
    cursor: pointer;
    background: none;
    border: none;
    margin-top: 16px;
    margin-left: 20px;

    @media (min-width: 700px) {
        display: none;
    }

    &:hover {
        color: #17b6a9;
    }
    
    &:focus {
        color: rgba(259, 146, 90, 0.9);
    }
`

export const NavbarExtendedContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
    color: whitesmoke;
    font-size: x-large;
    margin-top: 40px;
    text-decoration: none;

    &:active {
        color: #17b6a9;
    }    
`;