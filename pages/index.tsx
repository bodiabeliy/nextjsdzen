import dynamic from 'next/dynamic'
import Loader from '../widgets/Loader/loading';
 

interface HomeScreenProps {
  pageTitle?:string;
}
const HomeScreen= dynamic<HomeScreenProps>(() => new Promise((resolve) => {
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ ИММИТАЦИИ ЗАГРУЗКИ ПРЕЛОАДЕРА!
  setTimeout(() => resolve(import('../widgets/HomeScreen/HomeScreen')), 1500);
}), {
  loading: () => <Loader />,
  ssr: false,
})



export default function Home() {
 
  return (
    <>
      <div>
        <HomeScreen />
      </div>
    </>
  );
}
