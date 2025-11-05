"use client";
import { useState } from "react";
import Image from "next/image";

const WatchBox = ({ imgName, color = "--darkslategrey", colorHover = "--darkslategreyHover", onClick, isActive }) => {
  const [bg, setBg] = useState(`var(${color})`);

  return (
    <div onClick={onClick} onMouseEnter={() => setBg(`var(${colorHover})`)} onMouseLeave={() => setBg(`var(${color})`)} style={{ backgroundColor: bg }} className={`relative flex items-center justify-center rounded-[10px] w-[131px] h-[70px] cursor-pointer transition-colors duration-300 ${isActive ? "border-2 border-white" : ""}`}>
      <Image src={imgName} alt="Picture of watch" width={90} height={90} className="object-contain mb-[35px] transition-transform duration-300 hover:scale-115" loading="eager" />
    </div>
  );
};

export default WatchBox;
