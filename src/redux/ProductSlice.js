import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../utils/status";


const initialState = {
    products : [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk("getProducts" , async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = response.json();
    return data;
})

export const getCategoryProduct = createAsyncThunk("getCategoryProduct" , async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  const data = response.json();
  return data;
})

export const getSortProduct = createAsyncThunk("getSortProduct", async (sort) => {
  const sortFunction = (a, b) => (sort === "desc" ? b.price - a.price : a.price - b.price);

  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    const sortedProducts = data.sort(sortFunction);
    return sortedProducts;
  } catch (error) {
    console.error("Error while sorting products:", error);
    throw error;
  }
});
export const getDetailProduct = createAsyncThunk("getDetails" , async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = response.json();
    return data;
})

export const getSerachProduct = createAsyncThunk("getSerach" , async (searh) =>{
  
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data =await response.json();
    const searchedProducts = data.filter(product => product.title.toUpperCase().includes(searh));
    console.log(searchedProducts);
    return searchedProducts;
  } catch (error) {
    console.error('Hata:', error);
}
})
const productsSlice = createSlice({
    name: 'products',   
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.ERROR;
      })
      
      .addCase(getDetailProduct.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload; 
      })      
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.productDetailStatus = STATUS.ERROR;
      })
      .addCase(getCategoryProduct.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProduct.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProduct.rejected, (state, action) => {
        state.productsStatus = STATUS.ERROR;
      })   
      .addCase(getSortProduct.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getSortProduct.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
         state.products = action.payload;
      })
      .addCase(getSortProduct.rejected, (state, action) => {
        state.productsStatus = STATUS.ERROR;
      })
      .addCase(getSerachProduct.pending, (state, action) =>{
        state.productsStatus = STATUS.LOADING
      })
      .addCase(getSerachProduct.fulfilled, (state, action) =>{
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload
      })
      .addCase(getSerachProduct.rejected, (state, action) =>{
        state.productsStatus = STATUS.ERROR
      })
     }
   })

export default productsSlice.reducer