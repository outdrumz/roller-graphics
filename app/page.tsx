import React from 'react';
import Image from 'next/image';

export default function Home() {
    return (
      <div>
        <div className="min-h-screen flex flex-col">
        <header className="top-0 left-0 z-20 p-4 w-full flex items-center">

            <h1 className="flex flex-col">
              <span className="block">Roller</span>
              <span className="block -mt-2 sm:-mt-2 md:-mt-1">Graphics</span>
              <div className="flex justify-between mt-1 sm:mt-1 md:mt-2 max-w-full">
                <div className="w-8 h-4 -mt-0.5 sm:w-8 sm:h-4 md:w-12 md:h-7 bg-orange-951"></div>
                <div className="w-8 h-4 -mt-0.5 sm:w-8 sm:h-4 md:w-12 md:h-7 bg-red-951"></div>
                <div className="w-8 h-4 -mt-0.5 sm:w-8 sm:h-4 md:w-12 md:h-7 bg-blue-951"></div>
              </div>
            </h1>
            <div>
            <div className="w-12 sm:w-12 md:w-16">
              <Image
                  src="/static/indianroller.png"
                  layout="responsive"
                  width={212}
                  height={352}
                  alt="logo image"
                  priority={true}
                  className="object-contain"
                  />
            </div>
            </div>

            <nav className="ml-auto space-x-1 md:space-x-5 -mt-6">
              <a href="#lineup" className="hidden md:inline hover:underline">LINEUP</a>
              <a href="#documentation" className="hidden md:inline hover:underline">DOCUMENTATION</a>
              <a href="#demo" className="hidden md:inline hover:underline">DEMO</a>
              <a href="#login" className="hidden md:inline hover:underline">LOGIN</a>
              <a href="#register" className="hidden md:inline hover:underline">REGISTER</a>
              </nav>
          
        </header>
        <main>
            <video className="w-full" autoPlay>
                            <source src="/static/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
            </video>
        </main>
        <footer>
          <p className="text-white text-center">© 2024 My Website</p>
        </footer>
        </div>

      </div>
    );
} 