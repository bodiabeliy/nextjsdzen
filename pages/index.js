"use client"
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Navbar from '../widgets/Navbar/Navbar';


export default function Home() {
  const [socket_state, setSocket_state] = useState('try connecting...');
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
          
        setSocket_state('connected successfully 👍');
      });
    }
  return (
    <>
      <div>
        <h1>socket state: {userCounter}</h1>
      </div>
    </>
  );
}
