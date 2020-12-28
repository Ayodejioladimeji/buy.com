import React, { Component } from 'react'
import { ProductConsumer } from '../../Context'
import Title from '../Title'
import CartColums from './CartColums'
import CartList from './CartList'
import EmptyCart from './EmptyCart'
import CartTotals from './CartTotals'


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <div className="mt-5">
                                    <Title name="My" title="cart"/>
                                    <CartColums/>
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                                </div>
                            )
                        }
                        else{
                            return(
                                <EmptyCart/>
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
