import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Product } from '../types/index';


export interface ProductState {
 products:Product[]
 filteredProductsLength:number

}

const initialState: ProductState = {
  products:[],
  filteredProductsLength:0
}

export const productState = createSlice({
  
  name: 'product',
  initialState,
  reducers: {
    gettingProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    setFilteredProductsLength: (state, action: PayloadAction<number>) => {
      state.filteredProductsLength = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { gettingProductsSuccess, setFilteredProductsLength} = productState.actions

export const ProductSelector = (state:RootState) => state.ProductReducer.products
export const FilteredProductsLengthSelector = (state:RootState) => state.ProductReducer.filteredProductsLength



export default productState.reducer