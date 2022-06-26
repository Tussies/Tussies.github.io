import React, {useState} from "react";
import { 
  NavbarContainer, 
  NavbarInnerContainer, 
  NavbarExtendedContainer, 
  LeftContainer, 
  NavbarLinkContainer, 
  NavbarLink, 
  Hamburger, 
  NavbarLinkExtended} from "../styles/Navbar.style";
import { Link } from "react-router-dom";

function Navbar() {

  const [extendNavbar, setExtendNavBar] = useState(false);

  return (
  <NavbarContainer extendNavbar={extendNavbar}> 
    <NavbarInnerContainer>
      <LeftContainer>
        <NavbarLinkContainer>
          <NavbarLink to="/"> Home </NavbarLink>
          <NavbarLink to="/Contact"> Contact </NavbarLink>
          <Hamburger onClick={() => {
            setExtendNavBar((currentValue => !currentValue));
          }}>
            {extendNavbar ? <>&#10005;</> : <>&#9776;</>}
          </Hamburger>
        </NavbarLinkContainer>
      </LeftContainer>
    </NavbarInnerContainer>
    {extendNavbar && (
      <NavbarExtendedContainer>
      <NavbarLinkExtended to="/"> Home </NavbarLinkExtended>
      <NavbarLinkExtended to="/Contact"> Contact </NavbarLinkExtended>
    </NavbarExtendedContainer>
    )}
  </NavbarContainer>
  );
}

export default Navbar;

// const Navbar = () => {

//   return (
//     <div className="navbar">
//         <span className="logo"> </span>
//         <div className='toggleButton'>
//             <i class="fa-solid fa-bars"></i>
//         </div>
//         <div className="links"> 
//             <a href="/"> Home </a>
//             <a href="/Contact"> Contact </a>
//         </div>
//     </div>
//   )
// }

// function Navbar() {
//     const [expandNavBar, setExpandNavBar] = useState(false);

//   return (
//     <div className="navbar" id={expandNavBar ? "open" : "close"}>
//         <div className='toggleButton'>
//             <button onClick={() => {
//                 setExpandNavBar((prev) => !prev);
//                 }}
//             >
//             <i class="fa-solid fa-bars"></i>
//             </button>
//         </div>
//         <div className="links"> 
//             <a href="/"> Home </a>
//             <a href="/Contact"> Contact </a>
//         </div>
//     </div>
//   )
// }

// export default Navbar