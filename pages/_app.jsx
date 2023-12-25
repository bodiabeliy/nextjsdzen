import { useRef } from 'react'
import { Provider } from 'react-redux'
import {store, wrapper} from "../shared/providers/store"

import { appWithTranslation } from 'next-i18next'
import Navbar from "../widgets/Navbar/Navbar";
import SideBar from "../widgets/Sidebar/Sidebar";

import "../styles/globals.css";

 function App({ Component, pageProps }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = store()
  }
  return (
    <>
    <Provider store={storeRef.current}>
      <Navbar />
      <div className="flex">
        <SideBar />
        <Component {...pageProps} />
      </div>
      </Provider> 
    </>
  );
}
export default appWithTranslation(wrapper.withRedux(App))
