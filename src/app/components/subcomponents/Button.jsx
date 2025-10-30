const Button = ({ name }) => {
  return (
    <button
      className="btn">
      <span>{name}</span>
    </button>
  );
};

export default Button;

/*** her er en meget lang og indviklet løsning til at få tekst hover til at matche baggrunden  *
 const BtnBuy = () => {
  return (
    <button
      className="
        group
        text-2xl font-poppins font-medium
        rounded-[100px] border-[3px] border-white
        w-[250px] h-[70px]
        flex items-center justify-center
        cursor-pointer
        bg-transparent text-white
        transition-all duration-300
        hover:bg-white
      "
    >
      <span
        className="
          transition-all duration-300
          group-hover:bg-gradient-to-r group-hover:from-[#c8dce5] group-hover:to-[#b6ccda]
          group-hover:bg-clip-text group-hover:text-transparent
        "
      >
        Buy Now
      </span>
    </button>
  );
};

export default BtnBuy;
*/
