'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import me from '../../public/images/profile_1.png';

const HomePage = () => {
  const [firstName, setFirstName] = useState("_");
  const [lastName, setLastName] = useState("_");
  let [timeRan, setTimeRan] = useState(0);
  let [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: undefined | NodeJS.Timeout = undefined;
    if(isActive) {
      interval = setInterval(() => {
        setTimeRan(timeRan => timeRan + 1);
      }, 150);
    }
    else clearInterval(interval);

    return () => clearInterval(interval);
  }, [isActive, timeRan]);

  useEffect(() => {
    if(timeRan >= 7) setIsActive(false);
    if(timeRan <= 7) setFirstName('Jackson'.substring(0, timeRan) + (timeRan < 7 ? '_' : ''));
    if(timeRan <= 5) setLastName('Perry'.substring(0, timeRan) + (timeRan < 5 ? '_' : ''));
  }, [timeRan]);
  // TODO: implement the cool typewriter kinda thing into this and also make it way better

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <div className="lg:flex">
        <div className="flex flex-grow flex-col items-center place-content-center p-2">
          <h1 className="text-7xl">
            {firstName} {lastName}
          </h1>
          <h4 className="text-xl text-slate-400">Mid-Level Full Stack Web Engineer and Minecraft Mod Developer</h4>
        </div>
        <div className="flex flex-grow flex-col items-center p-2">
          <Image src={me} alt="profile_picture" className="max-w-100 w-3/4 h-auto p-1 bg-white border border-white"/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
