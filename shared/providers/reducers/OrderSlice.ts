"use client";

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import Order from '../types/index';


export interface OrderState {
 orders:Order[]
 order:Order;
 currentCurency:number

}

const initialState: OrderState = {
    order:{
      id: 0,
      title: '',
      date: '',
      description: '',
      products: [],
      totalSum: 0
    },
    orders:[], 
    currentCurency: 0
}

export const orderState = createSlice({
  
  name: 'order',
  initialState,
  reducers: {
    gettingOrdersSuccess: (state, action: PayloadAction<Order[]>) => {      
       state.orders = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { gettingOrdersSuccess} = orderState.actions

export const OrderSelector = (state:RootState) => state.OrderReducer.orders
export const OrdersOrderCurrentPricesSelector = (state:RootState) => state.OrderReducer.currentCurency



export default orderState.reducer