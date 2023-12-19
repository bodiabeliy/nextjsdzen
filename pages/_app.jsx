import "../styles/globals.css"
import Navbar from "../widgets/Navbar/Navbar"
import SideBar from "../widgets/Sidebar/Sidebar"


// import dynamic from 'next/dynamic'
 
// const DynamicNavbar= dynamic(() => import('../widgets/Navbar/Navbar'), {
//   loading: () => <p>Loading...</p>,
//   ssr: false,
// })
export default function App({ Component, pageProps }) {
    return  (
      <>
      <Navbar />
      <div className="flex">
      <SideBar />
      <Component {...pageProps} />
      </div>
      </>
    )
    
  }