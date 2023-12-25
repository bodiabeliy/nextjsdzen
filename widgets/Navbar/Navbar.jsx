"use client"
import { useRouter } from 'next/router';
import Image from 'next/image'
import Logo from "../../public/logo.png"
import { useEffect, useState } from 'react';

import Clock from "../../public/clock.png"
import io from 'socket.io-client';

const Navbar =() => {

  const {locale, locales, push} = useRouter()
    const [currentTime, setCurrentTime] = useState("")
    const [socket, setSocket] = useState(null);
    const [userCounter, setUserCounter] = useState(1);


  
    useEffect(() => {
      fetch('api/socket');
      setSocket(io());
    }, []);
  
  
      if (socket) {
        socket.on('connect', () => {
          socket.on("users", (n)=> {
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


    const changeLanguge = (setLang) => {
      push("/", undefined, {
        locale:setLang
      })
    }
    return ( 
        <>
        <div className="w-full h-[70px] flex shadow items-center">

            <div className="flex w-[1400px] justify-betwwen m-auto items-center">
                <div className="w-full ">
                  <div className="flex items-center uppercase text-[#7cb342]">
                  <Image src={Logo.src} width={60} height={60} alt={'logo'}  />
                    <span>Inventory</span>
                  </div>
                </div>
                <div className="flex items-center">
                        {new Date().toDateString()}
                    <div className="flex items-center">
                        <Image src={Clock.src} width={30}  height={30} alt={'clock'} />
                    { currentTime }
                    </div>
                    <div className="ml-10 min-w-[75px]">
                        {"sessions: " + userCounter}
                    </div>
                </div>
                <span className='font-semibold w-[100px] text-right'> {locale}</span>

            </div>
        </div>
        </>
    );
}
 
export default Navbar 