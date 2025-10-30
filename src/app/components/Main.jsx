import Image from "next/image";
import NavyImg from "../../../public/navy.png";
import ShiftWatchButtons from "./subcomponents/ShiftWatchButtons";

const Main = () => {
  return (
    <main className="main">
      <article>
        <h1>
          <b>The Perfect Moment</b>
        </h1>
        <h1>Between Past And Future.</h1>
      </article>

      <Image src={NavyImg} alt="Picture of iWatch" loading="eager" />

      <div className="shiftBtnContaioner">
        <ShiftWatchButtons color="bg-[var(--darkslategrey)] h-9 w-9 shadow-[0px_3px_4px_rgba(0,_0,_0,_0.2)]" />

        <p>• • • • •</p>

        <ShiftWatchButtons color="bg-[var(--turquoise)]" />

        <p>• • • • •</p>

        <ShiftWatchButtons color="bg-[var(--mistyrose)]" />
      </div>
    </main>
  );
};

export default Main;

/*
En anden måde at indlejre et img på:
      <Image src="/navy.png" alt="Picture of iWatch" width={500} height={500} />


*/
