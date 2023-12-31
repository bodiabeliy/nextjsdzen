"use client"
import { useRouter } from 'next/router';
import Image from 'next/image'
import Logo from "../../public/logo.png"
import { useEffect, useState } from 'react';

import Clock from "../../public/clock.png"
import io, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Navbar =() => {

    const {locale, locales, push,} = useRouter()
    const [currentTime, setCurrentTime] = useState<string>("")
    const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>| null>(null);
    const [userCounter, setUserCounter] = useState<number>(1);
    

    const {t} = useTranslation("common")
  
    useEffect(() => {
      fetch('api/socket');
      setSocket(io());
    }, []);
  
  
      if (socket) {
        socket.on('connect', () => {
          socket.on("users", (n:number)=> {
            setUserCounter(n)
        });
         
        })
      }

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false, 
                hour: "numeric", 
                minute: "numeric"
            }))
        }, 1000)
    })


    const changeLanguge = (setLang:string) => {
      
      push("/", undefined, {
        locale:setLang,
        // shallow:true
      })
    }
    return ( 
        <>
        <div className="w-full h-[70px] flex shadow items-center">

            <div className="flex w-[1400px] justify-betwwen m-auto items-center">
                <div className="w-full ">
                  <div className="flex items-center uppercase text-[#7cb342]">
                  <Image src={Logo.src} width={60} height={60} alt={'logo'}  />
                    <Link href={"/"}>Inventory</Link>
                  </div>
                </div>
                <div className="flex items-center">
                        {new Date().toDateString()}
                    <div className="flex items-center">
                        <Image src={Clock.src} width={30}  height={30} alt={'clock'} />
                    { currentTime }
                    </div>
                    <div className="ml-10 min-w-[90px]">
                        {t("sessions") +" "+ userCounter}
                    </div>
                </div>
                <span className='font-semibold w-[100px] text-right'> {locale}</span>
                {
                  locales?.map((l) => (
                    <button key={l} onClick={()=> changeLanguge(l)}>{l}</button>
                  ))
                }
            </div>
        </div>
        </>
    );
}
 
export default Navbar 