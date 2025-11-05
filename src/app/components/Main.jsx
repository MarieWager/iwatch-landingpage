"use client";
import { useState } from "react";
import Image from "next/image";
import WatchBox from "./subcomponents/WatchBox";
import NavyImg from "../../../public/navy.png";
import GreenImg from "../../../public/green.png";
import CoralImg from "../../../public/coral.png";
import ShiftWatchButtons from "./subcomponents/ShiftWatchButtons";
import Button from "./subcomponents/Button";

const Main = () => {
  const [activeImg, setActiveImg] = useState(NavyImg);

  const colorToImg = {
    "--darkslategrey": NavyImg,
    "--turquoise": GreenImg,
    "--mistyrose": CoralImg,
  };

  const imgToColor = {
    [NavyImg.src]: "--darkslategrey",
    [GreenImg.src]: "--turquoise",
    [CoralImg.src]: "--mistyrose",
  };

  const handleClick = (color) => {
    setActiveImg(colorToImg[color]);
  };

  return (
    <main className="grid grid-cols-[2fr_1fr_auto] grid-rows-[auto_auto_auto] gap-5">
      <article className="self-center">
        <h1>
          <b>The Perfect Moment</b>
        </h1>
        <h1>Between Past And Future.</h1>
      </article>

      <Image
        src={activeImg}
        alt="Picture of iWatch"
        loading="eager"
        width={500}
        height={500}
        style={{
          display: "block",
          width: "100%",
          height: "115%",
          margin: "-7px 0px",
          objectFit: "cover",
        }}
      />

      <div className="shiftBtnContaioner flex items-center gap-2 mt-4">
        <ShiftWatchButtons color="bg-[var(--darkslategrey)] shadow-[0px_3px_4px_rgba(0,_0,_0,_0.2)]" isActive={activeImg === NavyImg} onClick={() => handleClick("--darkslategrey")} />
        <p>• • • • •</p>
        <ShiftWatchButtons color="bg-[var(--turquoise)] shadow-[0px_3px_4px_rgba(0,_0,_0,_0.2)]" isActive={activeImg === GreenImg} onClick={() => handleClick("--turquoise")} />
        <p>• • • • •</p>
        <ShiftWatchButtons color="bg-[var(--mistyrose)] shadow-[0px_3px_4px_rgba(0,_0,_0,_0.2)]" isActive={activeImg === CoralImg} onClick={() => handleClick("--mistyrose")} />
      </div>

      <Button name="Buy Now" className="text-2xl font-medium border-[3px] border-white w-[250px] h-[70px]"></Button>

      {/* WatchBox-sektion i sidste row */}
      <section className="row-start-3 row-end-4 col-start-2 col-end-3 flex gap-4 justify-center pt-8">
        <WatchBox imgName={NavyImg} color="--darkslategrey" colorHover={"--darkslategreyHover"} isActive={activeImg === NavyImg} onClick={() => handleClick("--darkslategrey")} />
        <WatchBox imgName={GreenImg} color="--turquoise" colorHover={"--turquoiseHover"} isActive={activeImg === GreenImg} onClick={() => handleClick("--turquoise")} />
        <WatchBox imgName={CoralImg} color="--mistyrose" colorHover={"--mistyroseHover"} isActive={activeImg === CoralImg} onClick={() => handleClick("--mistyrose")} />
      </section>
    </main>
  );
};

export default Main;

/*
En anden måde at indlejre et img på:
      <Image src="/navy.png" alt="Picture of iWatch" width={500} height={500} />


*/
