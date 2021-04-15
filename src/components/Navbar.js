
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LogoImg  from '../amazon-icon.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/"><img alt="store" src={LogoImg} className="navbar-brand"></img></Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">products</Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus">
              my cart
            </i>
            </span>
          </ButtonContainer>
        </Link>
        </NavWrapper>
      </React.Fragment>
    );
  }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
  color:var(--mainWhite) !important;
  font-size:1.3rem;
  text-transform:capitalize !important;
}
`;

export default Navbar;
