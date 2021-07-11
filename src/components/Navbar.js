import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../technodelogo.png";
//import styled from "styled-components";
import CustomButton from './CustomButton'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(()=>{
    showButton()
  },[])
  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" onClick={closeMobileMenu}>
            <img alt="store" src={LogoImg} className="navbar-brand"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active " : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Product</Link>
            </li>
         
            <li className="nav-item">{false ? <Link to="/sign-up" className="nav-links-mobile nav-links" onClick={closeMobileMenu}>Sign Up</Link> :
              <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                <span className="mr-2">
                  <i className="fas fa-cart-plus"> My Cart</i>
                </span>
              </Link>}

            </li>
            <li className="nav-item">

            </li>
          </ul>
          {button && <CustomButton buttonStyle='btn--outline'>SIGN UP</CustomButton>}
        </div>
      </nav>
    </>
    // <React.Fragment>
    //   <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
    //     <Link to="/" className="navbar-logo">
    //       <img alt="store" src={LogoImg} className="navbar-brand"></img>
    //     </Link>
    //     <ul className="navbar-nav align-items-center">
    //       <li className="nav-item ml-5">
    //         <Link to="/" className="nav-link">
    //           Home
    //         </Link>
    //       </li>{" "}
    //       <li className="nav-item ml-5">
    //         <Link to="/products" className="nav-link">
    //           products
    //         </Link>
    //       </li>
    //     </ul>
    //     <Link to="/cart" className="ml-auto">
    //       <ButtonContainer>
    //         <span className="mr-2">
    //           <i className="fas fa-cart-plus">my cart</i>
    //         </span>
    //       </ButtonContainer>
    //     </Link>
    //   </NavWrapper>
    // </React.Fragment>
  );
}
// const NavWrapper = styled.nav`
//   background: var(--mainBlue);
//   .nav-link {
//     color: var(--mainWhite) !important;
//     font-size: 1.3rem;
//     text-transform: capitalize !important;
//   }
// `;

export default Navbar;
