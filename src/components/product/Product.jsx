import React from 'react'
import './Product.css'
import ProdcutImg from '../../img/prodcutimg.png'
function Product({ productImg, productdescp,pdemo }) {
  return (
    // <div className='p-container'>
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-descp">{productdescp}</div>
      </div>
      <a href={pdemo} target="_blank">
        <img src={productImg} alt="" className="p-img" />
      </a>
    </div>
    // {/* {productdemo && <div className="p-demo">{productdemo}</div>} */}
    // </div>
    
  )
}

export default Product