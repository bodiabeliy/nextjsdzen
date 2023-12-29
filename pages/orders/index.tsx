import dynamic from 'next/dynamic'
import Loader from "../../widgets/Loader/loading"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
  
interface OrderScreenProps {
  pageTitle?:string;
}
const OrderScreen= dynamic<OrderScreenProps>(() => new Promise((resolve) => {
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ ИММИТАЦИИ ЗАГРУЗКИ ПРЕЛОАДЕРА!
  setTimeout(() => resolve(import('../../widgets/OrderScreen/OrderScreen')), 1500);
}), {
  loading: () => <Loader />,
  ssr: false,
})

export async function getStaticProps({ locale }:any) {  
  return {
    props: {
      ...(await serverSideTranslations((locale) as string, [
      "common", "orders"
      ], null, ['en', 'ua'])),
    },
  }
}

const Orders = () => {  
    return ( 
        <OrderScreen />
    );
}
 
export default Orders;