import Image from "next/image";
import NavyImg from "../../../public/navy.png";



const Main = () => {
  return (
    <main className="main">
      <article>
        <h1>
          <b>The Perfect Moment</b>
        </h1>
        <h1>Between Past And Future.</h1>
      </article>
      <Image src="/navy.png" alt="Picture of iWatch" width={500} height={500} className="shadow-none transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400"/>
    </main>
  );
};

export default Main;
