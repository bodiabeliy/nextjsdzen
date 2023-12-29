
import dynamic from 'next/dynamic'
import Loader from "../../widgets/Loader/loading"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
  
  
interface ProductScreenProps {
  pageTitle?:string;
}
const ProductScreen= dynamic<ProductScreenProps>(() => new Promise((resolve) => {
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ ИММИТАЦИИ ЗАГРУЗКИ ПРЕЛОАДЕРА!
  setTimeout(() => resolve(import('../../widgets/ProductsScreen/ProductsScreen')), 1500);
}), {
  loading: () => <Loader />,
  ssr: false,
})

export async function getStaticProps({ locale }:any) {  
  return {
    props: {
      ...(await serverSideTranslations((locale) as string, [
      "common", "products"
      ], null, ['en', 'ua'])),
    },
  }
}
const Products = () => {
    
    return ( 

        <>
        <ProductScreen />
        </>
     );
}
 
export default Products;