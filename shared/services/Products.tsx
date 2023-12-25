
import http from './api/index';
import { AppDispatch } from '../providers/store';
import { gettingProductsSuccess } from '../providers/reducers/ProductSlice';

export default async function getProducts(dispatch:AppDispatch) {
    try {        
        const response = await http.get(`api/products`);
        dispatch(gettingProductsSuccess(response.data))
        
    } catch (error) {
       throw Error(`heppend error by getting orders!  ${error}`) 
    }
     
 }