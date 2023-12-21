
import { useDispatch } from 'react-redux';
import http from './api/index';
import { gettingOrdersSuccess } from '../providers/reducers/OrderSlice';
import { AppDispatch } from '../providers/store';

export default async function getOrders(dispatch:AppDispatch) {
    try {        
        const response = await http.get(`api/orders`);
        dispatch(gettingOrdersSuccess(response.data))
        
    } catch (error) {
       throw Error(`heppend error by getting orders!  ${error}`) 
    }
     
 }