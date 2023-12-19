
import dynamic from 'next/dynamic'
import Loader from "../../widgets/Loader/loading"
  
const ProductScreen= dynamic(() => new Promise((resolve) => {
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ ИММИТАЦИИ ЗАГРУЗКИ ПРЕЛОАДЕРА!
  setTimeout(() => resolve(import('../../widgets/ProductsScreen/ProductsScreen')), 1500);
}), {
  loading: () => <Loader />,
  ssr: true,
})

const Products = () => {
    
    return ( 

        <>
        <ProductScreen />
        </>
     );
}
 
export default Products;