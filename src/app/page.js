import Image from "next/image";
import Main from "./components/Main";
import Header from "./components/Header";
import Button from "./components/subcomponents/Button";

export default function Home() {
  return (
    <div className="landingpage">
      <Header></Header>
      <Main></Main>
      <Button
        className="text-2xl font-medium border-[3px] border-white
        w-[250px] h-[70px]"
        name="Buy Now"
      ></Button>
    </div>
  );
}
