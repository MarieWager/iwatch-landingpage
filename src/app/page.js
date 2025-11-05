import Image from "next/image";
import Main from "./components/Main";
import Header from "./components/Header";
import Button from "./components/subcomponents/Button";
import WatchesContainer from "./components/WatchesContainer";


export default function Home() {
  return (
    <div className="landingpage">
      <Header></Header>
      <Main></Main>
      
    </div>
  );
}


/*

<Button
        name="Buy Now"
        className="text-2xl font-medium border-[3px] border-white
        w-[250px] h-[70px]"
      ></Button>
      <WatchesContainer></WatchesContainer>


*/