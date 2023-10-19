import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`products/${product.id}`)} className='w-[350px] mt-0 mx-3 p-3 m-4 border rounded-md relative hover:shadow-lg cursor-pointer hover:border-gray-400'>
        <div className='text 2x1 font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1 '>{product?.price} $</div>
        <img className='w-[200px] h-[200px] object-contain m-auto' src={product.image} alt=''/>
        <div className='text-center px-3 mt-2 font-bold'>{product.title}</div>
    </div>
  )
}

export default Product
