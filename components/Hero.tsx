// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-black bg-[url('/main-banner.jpg')] bg-cover  bg-center max-lg:h-[900px] max-md:h-[750px]">
  <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10  bg-black bg-opacity-70 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
    <div className="h-[700px] w-full flex flex-col gap-y-5 max-lg:order-last col-span-2 p-6">
      <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
        <span className="text-red-500 ">NO HYPE</span>, JUST THE REAL DEAL
      </h1>
      <p className="text-white max-sm:text-sm">
        Bringing you the latest gadgets that’s built to impress. Whether you're upgrading your setup or looking for the hottest gadgets, we’ve got you covered with top-quality gear that stands out. Step into the future with innovation that’s bold, reliable, and ready for action.
      </p>
      <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
      <Link href={`/shop`}>
        <button className="bg-red-500 text-white font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-red-600">
          SHOP NOW
        </button>
      </Link>
      {/* <Link href={`#`}>
        <button className="bg-white text-red-500 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
          LEARN MORE
        </button>
        </Link> */}
      </div>
    </div>
  </div>
</div>

  );
};

export default Hero;
