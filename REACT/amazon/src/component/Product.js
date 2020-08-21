import React from 'react'
import './css/Product.css'
import StarIcon from '@material-ui/icons/Star';
function Product({ id, title, price, rating, img}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {    Array(rating)
                        .fill()
                        .map((_)=>(
                            <p><StarIcon className="product__star"/></p>
                        ))
                    }
                 </div>
            </div>
           
                <img alt="" src={img} />
                <button>Add to Basket</button>
           
        </div>
    )
}

export default Product
