/* få at få en const ("funktion") frem tast: sfc */

const ShiftWatchButtons = ({ color }) => {
  return <button className={`border-2 border-[var(--snow)] rounded-full h-7 w-7 ${color}`}></button>;
};

export default ShiftWatchButtons;


/* NOTE - 
ur og farve skal matche -> når valgt ur skal gældende farveknap være "aktiv" --> ved at gøres en smule større
---> lige nu er darkslate-knap markeret som "aktiv"
*/