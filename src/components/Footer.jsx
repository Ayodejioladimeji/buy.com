import React from 'react'

const Footer = () => {
    return (
        <div className="text-center text-capitalize mx-auto py-4 footer">
            <h4>
                copyright &copy; {new Date().getFullYear()} BUY.COM
            </h4>
            <small className="layo">Developed By @LayoBright &#128526;</small>
        </div>
    )
}

export default Footer
