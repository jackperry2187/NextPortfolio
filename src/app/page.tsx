'use client';

import { useState } from "react";
import Image from "next/image";
import me from '../../public/images/profile_1.png';

const HomePage = () => {
  const [firstName, setFirstName] = useState("Jackson");
  const [lastName, setLastName] = useState("Perry");
  // TODO: implement the cool typewriter kinda thing into this and also make it way better

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <div className="lg:flex">
        <div className="flex flex-grow flex-col items-center place-content-center p-2">
          <h1 className="text-7xl">{firstName} {lastName}</h1>
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
