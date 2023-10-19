import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProduct, getProducts, getSortProduct } from '../../redux/ProductSlice';
import Loading from '../Loading'
import Product from './Product';
import ReactPaginate from 'react-paginate';

const Products = ({category,sort}) => {

  
  const dispatch = useDispatch();
  const {products , productsStatus} = useSelector(state => state.products)
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage =6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category){
      dispatch(getCategoryProduct(category));
    } else if(sort){
      dispatch(getSortProduct(sort))
    }
     else {
      dispatch(getProducts())
    }
  },[dispatch,category,sort])


  return (
    <div>
      {productsStatus == "LOADING" ? <Loading /> : 
      <>
      <ReactPaginate
      className='paginate font-bold'
        breakLabel="..."
        nextLabel=" > "
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=" < " 
        renderOnZeroPageCount={null}
      />
      <div className='flex flex-wrap'>
      {
        currentItems.map((product, index) => (
          <Product key={index} product={product}/>
        ))
      }
      </div>
      </>
      }
    </div>
  )
}

export default Products
