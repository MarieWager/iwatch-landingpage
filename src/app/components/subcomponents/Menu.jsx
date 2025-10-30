import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";

const Menu = () => {
  return (
    <div>
      <nav className="menu">
        <FaApple className="apple-icon" />
        <ul>
          <li>Mac</li>
          <li>iPhone</li>
          <li>iPad</li>
          <li>iWatch</li>
          <li>Support</li>
        </ul>
        <div className="flex items-center justify-center gap-4">
          <LuSearch className="icon" />
          <span>|</span>
          <LuShoppingBag className="icon" />
        </div>
      </nav>
    </div>
  );
};

export default Menu;
