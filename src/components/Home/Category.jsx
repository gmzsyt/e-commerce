import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/CategorySlice';

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories)
  
  
  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])


  return (
    <div className='w-1/6 bg-gray-100 p-4 max-h-screen'>
      <div className='border-b  pb-0.5 test-x1 font-bold p-2'>CATEGORIES</div>
      {
        categories.map((category,index)=>(
          <div onClick = {()=> {setCategory(category)}}    className = 'text-lg mt-2 cursor-pointer  hover:bg-gray-200 p-2' key={index}>{category}</div>
        ))
      }
    </div>
  )
}

export default Category
