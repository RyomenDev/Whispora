import React from "react";
import AI_1Img from "../../assets/Blogs/AI_1.png";
import AI_2Img from "../../assets/Blogs/AI_2.png";
import AWSImg from "../../assets/Blogs/AWS.png";
import JS_1Img from "../../assets/Blogs/JS_1.png";
import MDesign from "../../assets/Blogs/MDesign.png";

const sideImages = [AI_1Img, AI_2Img, AWSImg, JS_1Img];

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white font-serif overflow-hidden">
      {/* Side Thumbnails with vertical lines */}
      {[
        { pos: "left-4 top-1/4", img: sideImages[0] },
        { pos: "left-28 bottom-24", img: sideImages[1] },
        { pos: "right-28 bottom-20", img: sideImages[2] },
        { pos: "right-4 top-1/4", img: sideImages[3] },
      ].map(({ pos, img }, i) => (
        <div
          key={i}
          className={`absolute ${pos} z-10 group transition-all duration-300`}
        >
          <div className="relative flex flex-col items-center">
            {/* Vertical Line (Left) */}
            <div className="absolute left-[-8px] top-0 h-full w-[2px] bg-white opacity-30" />
            {/* Vertical Line (Right) */}
            <div className="absolute right-[-8px] top-0 h-full w-[2px] bg-white opacity-30" />

            <div className="relative w-20 h-32 border border-white border-opacity-10 rounded">
              <img
                src={img}
                alt={`thumb-${i}`}
                className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30"
              />
              <img
                src={img}
                alt={`main-${i}`}
                className="relative w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-300 rounded shadow-md"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Center Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src={MDesign}
          alt="hero"
          className="w-full h-full object-cover brightness-[.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30" />
        <div className="absolute text-center max-w-2xl px-6 animate-fadeInUp">
          <h1 className="text-5xl sm:text-7xl font-bold mb-4">WHISPORA</h1>
          <p className="text-sm sm:text-base mb-2">
            Explore Stories, Trends & Insights — Curated for the Modern Reader
          </p>
          <p className="text-xs mb-6">04.16.2025 by Akash Mishra</p>
          <a
            href="#"
            className="uppercase text-xs border-b border-white hover:border-emerald-400 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
