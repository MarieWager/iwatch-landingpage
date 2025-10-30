import Image from "next/image";
import { FaApple } from "react-icons/fa";

const NavMenu = () => {
  return (
    <nav className="menu">
      <FaApple className="apple-icon"/>
      <ul>
        <li>Mac</li>
        <li>iPhone</li>
        <li>iPad</li>
        <li>iWatch</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default NavMenu;
