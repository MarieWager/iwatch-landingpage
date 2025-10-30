import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import Button from "./Button";


const Menu = () => {
  return (
    <div>
      <div className="grid grid-cols-2"></div>

      <nav className="menu">
        <FaApple className="apple-icon" />
        
        <div className="menu-btns">
                <Button name="Mac"></Button>
        
                <Button name="iPhone"></Button>
        
                <Button name="iPad"></Button>
        
                <Button name="iWatch"></Button>
        
                <Button name="Support"></Button>
              </div>

        <div className="flex items-center justify-end gap-4">
          <LuSearch className="icon" />
          <span>|</span>
          <LuShoppingBag className="icon" />
        </div>
      </nav>
    </div>
  );
};

export default Menu;

