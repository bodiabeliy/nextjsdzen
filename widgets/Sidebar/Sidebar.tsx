import Link from "next/link";

const SideBar = () => {
    return ( 
        <>
        <div className="w-[250px] h-[calc(100vh-70px)] shadow-2xl">
           <div className="flex w-full">
              <ul className="w-full text-center	">
                <Link href={"/products"}>Products</Link>
                <Link href={"/orders"}>Orders</Link>
              </ul>
           </div>
        </div>
        </>
     );
}
 
export default SideBar;