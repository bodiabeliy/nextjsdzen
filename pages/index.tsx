import dynamic from 'next/dynamic'
import Loader from '../widgets/Loader/loading';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
 

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

export async function getStaticProps({ locale }:any) {  
return {
  props: {
    ...(await serverSideTranslations((locale) as string, [
    "common", "home"
    ], null, ['en', 'ua'])),
  },
}
}



export default function Home() {

 
  return (
    <>
      <div>
        <HomeScreen />
      </div>
    </>
  );
}
