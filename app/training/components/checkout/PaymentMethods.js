import React from 'react'

const PaymentMethods = ({name,imgsrc,description,price}) => {
    return (
        <><div className="item">
            <div className="content">
                <div className="img-wrapper">
                    <img src={`/images/cart/${imgsrc}`} alt="" />
                    {/* src={`${process.env.PUBLIC_URL}/images/training/icon-flag.svg`} */}
                </div>

                <p>{name}<span>{description}</span></p>
            </div>
            <div className="price">
                <span>Pay Only</span>${price}
            </div>
        </div>
        </>
    )
}

export default PaymentMethods