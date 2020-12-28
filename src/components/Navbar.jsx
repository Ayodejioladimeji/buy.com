import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { MdLocalGroceryStore } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import styled from "styled-components" 
import {ButtonContainer} from './Button'
import { ProductConsumer } from '../Context';



export default class Navbar extends Component {
    render() {
        return (
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 w-100">
                    <Link to="/">
                        <MdLocalGroceryStore style={{color:'white', fontSize:30}}/>
                    </Link>

                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Buy.com</Link>
                        </li>
                    </ul>

                    <ProductConsumer>
                        {(value)=>(
                            <Link to="/cart" className="ml-auto">
                                <ButtonContainer length>
                                    <GiShoppingBag className="bag"/>
                                    <span className="length">{value.cart.length}</span>
                                </ButtonContainer>
                            </Link>
                        )}
                    </ProductConsumer>
                </NavWrapper>
           
        )
    }
}


const NavWrapper = styled.nav
`
position:fixed;
z-index:2;
top:0;
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
    font-weight:bold;
}
`

