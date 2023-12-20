
"use client"
import { useEffect, useState } from "react";
import TableComponent from "../../components/Table/Table";
import { OrdersSelector, testT } from "../../shared/providers/reducers/OrderSlice";
import { useDispatch, useSelector } from "react-redux";
import getOrders from "../../shared/services/Orders";



 const OrderScreen =() => {
    const orders = getOrders()

    
    
    
    return ( 
        <>
        <TableComponent />
        </>
     );
}
 
export default OrderScreen;