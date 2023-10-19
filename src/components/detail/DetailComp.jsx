import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

import { addToCart } from '../../redux/CartSlice';
import { useEffect } from 'react';

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const cartItems = useSelector(state => state.cart.items);
  
  useEffect(() => {
    console.log("cartItems:", cartItems);
  }, [cartItems]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
      const productToAdd = {
        product: productDetail,
        quantity: quantity
      };
      dispatch(addToCart(productToAdd));
      setQuantity(0);
  };

  return (
    <div className='flex gap-10 my-10'>
      <img className="w-1/3 h-1/3 object-cover" src={productDetail?.image} alt='' />
      <div className=''>
        <div className='text-4xl font-bold'>{productDetail.title}</div>
        <div className='my-2'>{productDetail?.description}</div>
        <div className='text-2xl my-2 text-yellow-500 font-bold'>Rating: {productDetail?.rating?.rate}</div>
        <div className='text-2xl text-yellow-500'>Count: {productDetail?.rating?.count}</div>
        <div className='my-2 text-5xl text-green-500 font-bold'>Price: {productDetail?.price}</div>
        <div className='flex items-center my-5 text-4xl font-bold'>
          <div className='cursor-pointer' onClick={handleDecrement}>-</div>
          <input type='text' value={quantity} readOnly className='mx-2 w-10 text-center' />
          <div className='cursor-pointer' onClick={handleIncrement}>+</div>
        </div>
        <div className='border bg-gray-200 w-1/5 my-2 p-2 cursor-pointer text-center font-bold' onClick={handleAddToCart}>
          Add To Cart
        </div>
      </div>
    </div>
  );
}

export default DetailComp;
