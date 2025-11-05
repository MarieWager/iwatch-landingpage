import { FaApple } from "react-icons/fa";
import { LuSearch, LuShoppingBag } from "react-icons/lu";
import Button from "./Button";

const Menu = () => {
  return (
    <nav className="menu flex items-center justify-between">
      <FaApple className="apple-icon text-xl" />

      <div className="menu-btns flex gap-4">
        <Button name="Mac" /> {/* Bevarer .btn CSS + hover */}
        <Button name="iPhone" /> {/* Bevarer .btn CSS + hover */}
        <Button name="iPad" /> {/* Bevarer .btn CSS + hover */}
        <Button name="iWatch" variant="iwatch" defaultStyle={false} /> {/* Special knap */}
        <Button name="Support" /> {/* Bevarer .btn CSS + hover */}
      </div>

      <div className="flex items-center gap-4">
        <LuSearch className="icon text-lg" />
        <span>|</span>
        <LuShoppingBag className="icon text-lg" />
      </div>
    </nav>
  );
};

export default Menu;
