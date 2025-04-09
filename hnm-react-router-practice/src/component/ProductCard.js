import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }

  return (
    <div className="product-card" onClick={showDetail}>
        <div className="product-card-img-container">
          <img className="product-card-img" src={item?.img} alt={item?.title} />
        </div>
        <div>{item?.choice?"Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new?"New Item":""}</div>
    </div>
  )
}

export default ProductCard