import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'
import User, { Product, ProductPrice } from '../types/index';


export interface ProductState {
 products:any[]

}

const initialState: ProductState = {
  products:[]
}

export const productState = createSlice({
  
  name: 'product',
  initialState,
  reducers: {
    gettingProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { gettingProductsSuccess} = productState.actions

export const ProductSelector = (state:RootState) => state.ProductReducer.products



export default productState.reducer