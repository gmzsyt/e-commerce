import React from 'react'
import {useSelector } from 'react-redux'
import Cart from '../components/cart/Cart';

const Carts = () => {
  const cartItems = useSelector(state => state.cart);
  return (
    <div>
      <div className='mt-10 '>
        { cartItems.items.map((cartItem) => 
          <div key={cartItem.product.id}  >
            <Cart cartItem={cartItem}/>
            </div>  
          )}
      </div>
      <div className='mt-3 bg-gray-300'> </div>
      <div className='flex justify-between'>
       <h4 className='font-bold text-4xl'>Total</h4>
       <h4 className='font-bold text-4xl'>{cartItems.totalPrice} $</h4>
     </div>
    </div> 
  )
}

export default Carts
