import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'
import { ProductConsumer } from '../Context'


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-2 my-4">
                <div className="card">

                    <ProductConsumer>
                        {(value)=>(
                            <div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top"/>
                                </Link>

                                <button className="cart-btn" disabled={inCart ? true : false} onClick={()=>{value.addToCart(id); value.openModal(id)}}>
                                    {inCart ? (<p className="text-capitalize mb-0" disabled>in cart</p>) : (<span>add to cart</span>)}
                                </button>
                            </div>
                        )}
                       
                    </ProductConsumer>

                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <p className="align-self-center mb-0 foot">{title}</p>
                        <h5 className="text-blue font-italic mb-0 foot">
                            <span className="mr-1">₦</span>
                            {price.toLocaleString()}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    } 
}


Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};


const ProductWrapper = styled.div
`
.card{
    border-color:transparent;
    transition:all 1s linear;
}

.card-footer{
    background:var(--mainDark);
    border-top:transparent;
    transition:all 1s linear;
    color:var(--mainWhite);
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }

    .card-footer{
        background:rgba(247,247,247);
        color:var(--mainDark);
    }
}

.img-container{
    position:relative;
    overflow:hidden;
}

.card-img-top{
    transition:all 1s linear;
}

.img-container:hover .card-img-top{
    transform:scale(1.2);
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.4rem 2.6rem;
    background:var(--mainBlue);
    border:none;
    color:var(--mainWhite);
    border-radius:0.5rem 0.5rem 0 0;
    font-size:1rem;
    display:flex;
    align-items:center;
    transform:translate(105%);
    transition:all 1s linear;
    &:focus{
        outline:none;
    }
}

.img-container:hover .cart-btn{
    transform:translate(0%);
}

.cart-btn:hover{
    color:var(--style );
    cursor:pointer;
}

.foot{
    font-size:1rem;
}

`
;