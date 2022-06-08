import React from 'react'
import ProductReviewCard from './ProductReviewCard';
import "./ProductReviews.css"

const ProductReviews = ({productReviews}) => {
  return (
    <div className='product-reviews'>
        {
            productReviews.map((item,index)=>{
                return(
                    <ProductReviewCard key={item.name} index={index} name={item.name} image={item.image} review={item.review} price={item.price} />
                )
            })
        }
    </div>
  )
}

export default ProductReviews