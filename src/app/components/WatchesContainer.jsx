import Image from "next/image";
import WatchBox from "./subcomponents/WatchBox";
import NavyImg from "../../../public/navy.png";
import GreenImg from "../../../public/green.png";
import CoralImg from "../../../public/coral.png";


const WatchesContainer = () => {
    return (
      <section className="flex gap-4 justify-end pt-8">
        <WatchBox imgName={NavyImg} color="--darkslategrey" colorHover={"--darkslategreyHover"} />
        <WatchBox imgName={GreenImg} color="--turquoise" colorHover={"--turquoiseHover"} />
        <WatchBox imgName={CoralImg} color="--mistyrose" colorHover={"--mistyroseHover"} />
      </section>
    );
}
 
export default WatchesContainer;