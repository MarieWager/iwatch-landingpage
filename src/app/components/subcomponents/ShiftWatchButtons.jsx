/* få at få en const ("funktion") frem tast: sfc */
"use client";
import React from "react";

const ShiftWatchButtons = ({ color, onClick, isActive = false }) => {
  return (
    <button
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()} // forhindrer fokus og scroll
      className={`
        ${color}
        ${isActive ? "h-9 w-9" : "h-7 w-7"}
        rounded-full
        border-2 border-white
        transition-all duration-300
        cursor-pointer
      `}
    />
  );
};

export default ShiftWatchButtons;





/* NOTE - 
ur og farve skal matche -> når valgt ur skal gældende farveknap være "aktiv" --> ved at gøres en smule større
---> lige nu er darkslate-knap markeret som "aktiv"
*/