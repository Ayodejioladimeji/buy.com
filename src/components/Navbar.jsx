import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import logo from '../logo.svg'
import { MdLocalGroceryStore } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import styled from "styled-components" 
import {ButtonContainer} from './Button'



export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <MdLocalGroceryStore style={{color:'white', fontSize:30}}/>
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Buy.com</Link>
                    </li>
                </ul>

                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <GiShoppingBag className="mr-1"/>
                        my bag
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav
`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`

