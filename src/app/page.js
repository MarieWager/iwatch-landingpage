import Image from "next/image";
import Main from "./components/Main";
import Header from "./components/Header";
import BtnBuy from "./components/ButtonBuy";

export default function Home() {
  return (
    <div className="landingpage">
      <Header></Header>
      <Main></Main>
      <BtnBuy></BtnBuy>
    </div>
  );
}
