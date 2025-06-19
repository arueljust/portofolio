import { Text, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <div>
        <h1 className="text-3xl font-bold text-pink-600">Portfolio</h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="px-4 hover:text-pink-600 duration-300">
          <a href="#hero">Home</a>
        </li>
        <li className="px-4 hover:text-pink-600 duration-300">
          <a href="#about">About</a>
        </li>
        <li className="px-4 hover:text-pink-600 duration-300">
          <a href="#projects">Projects</a>
        </li>
        <li className="px-4 hover:text-pink-600 duration-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <Text /> : <X />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl" onClick={handleClick}>
          <a href="#hero">Home</a>
        </li>
        <li className="py-6 text-4xl" onClick={handleClick}>
          <a href="#about">About</a>
        </li>
        <li className="py-6 text-4xl" onClick={handleClick}>
          <a href="#projects">Projects</a>
        </li>
        <li className="py-6 text-4xl" onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
