import dynamic from 'next/dynamic'
import Loader from "../../widgets/Loader/loading"
  
const OrderScreen= dynamic(() => new Promise((resolve) => {
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ ИММИТАЦИИ ЗАГРУЗКИ ПРЕЛОАДЕРА!
  setTimeout(() => resolve(import('../../widgets/OrderScreen/OrderScreen')), 1500);
}), {
  loading: () => <Loader />,
  ssr: false,
})

const Orders = () => {
  
  
    return ( 
        <OrderScreen />
    );
}
 
export default Orders;