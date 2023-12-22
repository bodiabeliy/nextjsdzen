"use client";

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import Order from '../types/index';


export interface OrderState {
 orders:Order[]
 productsByOrder:any[]
 orderTitle:any
}

const initialState: OrderState = {
  orders:[], 
  productsByOrder:[],
  orderTitle:""

}

export const orderState = createSlice({
  
  name: 'order',
  initialState,
  reducers: {
    gettingOrdersSuccess: (state, action: PayloadAction<Order[]>) => {      
       state.orders = action.payload
    },
    getProductsByOrderSuccess: (state, action:any) => {
      state.productsByOrder = action.payload
    },
    getOrderUnit: (state, action: PayloadAction<any>) => {      
      state.orderTitle = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { gettingOrdersSuccess, getProductsByOrderSuccess, getOrderUnit} = orderState.actions

export const OrderSelector = (state:RootState) => state.OrderReducer.orders
export const OrderUnitSelector = (state:RootState) => state.OrderReducer.orderTitle

export const ProductsByOrderSelector = (state:RootState) => state.OrderReducer.productsByOrder



export default orderState.reducer