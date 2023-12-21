import dynamic from 'next/dynamic'
import Loader from "../../widgets/Loader/loading"

import getOrders from "../../shared/services/Orders";

  
const OrderScreen= dynamic(() => new Promise((resolve) => {
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ ИММИТАЦИИ ЗАГРУЗКИ ПРЕЛОАДЕРА!
  setTimeout(() => resolve(import('../../widgets/OrderScreen/OrderScreen')), 1500);
}), {
  loading: () => <Loader />,
  ssr: true,
})

const Orders = () => {
  
  
    return ( 
        <OrderScreen />
    );
}
 
export default Orders;