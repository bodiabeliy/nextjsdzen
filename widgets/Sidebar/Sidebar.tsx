import Link from "next/link";
import Image from 'next/image'

import ProfileIcon from "../../public/user-32-32.png"
import { useTranslation } from "next-i18next";

const SideBar = () => {
   const {t} = useTranslation("common")
   
    return ( 
        <>
        <div className="w-[250px] h-[calc(100vh-70px)] shadow-2xl flex-col items-center justify-center">
           <div className="flex w-full flex-col items-center justify-center mt-5  h-[400px]">
            <Image src={ProfileIcon.src} width={70} height={70} alt={"profile image"}/>
              <ul className="w-full flex text-center	flex-col items-center justify-center">
                <Link className=" mt-3 hover:underline  hover:decoration-[#8bc34a] hover:underline-offset-4" href={"/products"}>{t("productLink")}</Link>
                <Link className=" mt-3 hover:underline  hover:decoration-[#8bc34a] hover:underline-offset-4" href={"/orders"}>{t("orderLink")}</Link>
              </ul>
           </div>
        </div>
        </>
     );
}
 
export default SideBar;