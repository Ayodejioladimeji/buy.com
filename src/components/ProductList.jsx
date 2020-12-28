import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'

import {ProductConsumer} from '../Context'
import Latest from './Latest'
import Footer from './Footer'

export default class ProductList extends Component {
    render() {
        return (
            <>
                <div className="py-5 mt-50 listing">
                    <div className="container-fluid">
                        <Title name="new" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return(
                                        value.products.map((product)=>{
                                            return(
                                                <Product product={product} key={product.id}/>
                                            )
                                        })
                                    )
                                }}
                            </ProductConsumer>
                        </div>

                        <Title name="latest" title="products"/>

                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return(
                                        value.products.map((product)=>{
                                            return(
                                                <Latest product={product} key={product.id}/>
                                            )
                                        })
                                    )
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
