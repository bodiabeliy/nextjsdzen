"use client";

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import Order, { Product } from '../types/index';


export interface OrderState {
 orders:Order[]
 productsByOrder:Product[]
 orderTitle:Order
}

const initialState: OrderState = {
  orders:[], 
  productsByOrder:[],
  orderTitle:{
    id: 0,
    title: '',
    date: '',
    description: '',
    products: [],
    totalSum: 0
  }

}

export const orderState = createSlice({
  
  name: 'order',
  initialState,
  reducers: {
    gettingOrdersSuccess: (state, action: PayloadAction<Order[]>) => {      
       state.orders = action.payload
    },
    getProductsByOrderSuccess: (state, action:PayloadAction<Product[]>) => {
      state.productsByOrder = action.payload
    },
    getOrderUnit: (state, action: PayloadAction<Order>) => {      
      state.orderTitle = action.payload
    },
    removeOrderSuccess: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter((order:Order) => order.id !=action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { gettingOrdersSuccess, getProductsByOrderSuccess, getOrderUnit, removeOrderSuccess} = orderState.actions

export const OrderSelector = (state:RootState) => state.OrderReducer.orders
export const OrderUnitSelector = (state:RootState) => state.OrderReducer.orderTitle

export const ProductsByOrderSelector = (state:RootState) => state.OrderReducer.productsByOrder



export default orderState.reducer