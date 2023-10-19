import React from 'react'
import { useDispatch,  } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../redux/CartSlice';

const Cart = ({cartItem}) => {
    const dispatch = useDispatch();

  const incHandle = (productId) => {
    dispatch(increaseQuantity({ productId }));
  };

  const decHandle = (productId) => {
    dispatch(decreaseQuantity({ productId }));
  };
  

  return (
    <div className='mb-5 p-10 flex flex-row border-2 border-gray-300 rounded-2xl'>
      <img className='basis-1/4 w-[200px] h-[200px] object-contain m-auto' src={cartItem.product?.image} alt=""/>
            <div className='basis-1/2 flex justify-between flex-col'>
              <h3 className='font-bold text-2xl pb-3'>{cartItem.product?.title}</h3>
              <span>{cartItem.product?.description}</span>
              <div className=''>
              <span className='text-2x1 font-bold rounded-md top-0 right-0 bg-black text-white p-1 m-1 '>{cartItem.product?.price} $</span>
              </div>
            </div>
              <div className='basis-1/4 flex flex-col items-end justify-start gap-5 ekleme  ve fiyat'>
                <div className='flex flex-row gap-3'>
                  <div onClick={() => decHandle(cartItem.product.id)} className='bg-gray-200 px-2 font-bold'>-</div>
                  <span className='font-bold '>x{cartItem.quantity}</span>
                  <div onClick={() => incHandle(cartItem.product.id)} className='bg-gray-200 px-2 font-bold'>+</div>
                </div> 
                <div className=''>
                <span className='text 2x1 font-bold rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{(cartItem.product?.price * cartItem.quantity)} $</span>                                                                            
                </div>
              </div>
    </div>
  )
}
export default Cart
