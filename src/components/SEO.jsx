import React from 'react'
import {Helmet} from 'react-helmet'
import image from '../cart.png'
import Favicon from '../cart.png'

const SEO = ({title}) => {
    return (
        <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | Buy.com`}>
            <meta name="description" content="Buy.com is an E-commerce website where you can order and buy series of mobile devices" />
            <meta name="image" content={image} />
            <link rel="shortcut icon" href={Favicon}/>
        </Helmet>
    )
}

export default SEO
