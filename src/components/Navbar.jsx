import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { useAppSelector } from "../redux/hooks";

const Navbar = ({ setShowCart }) => {
  const [menu, setMenu] = useState(false);
  const handleChanges = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const cartCount = useAppSelector((state) => state.cartReducer.length);
  return (
    <header className="h-[75px] fixed z-10 w-full">
      <section>
        <div className="flex flex-row items-center justify-between p-5 md:px-32 bg-primaryColor shadow-md">
          <div>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className=" text-3xl cursor-pointer font-semibold text-extraDarkColor">
                LOGO
              </h1>
            </Link>
          </div>
          <nav className=" hidden lg:flex flex-row items-center text-xl font-semibold text-extraDarkColor gap-8 ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black duration-300 cursor-pointer transition ease-in-out "
            >
              Home
            </Link>
            <Link
              to="shop"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black duration-300 cursor-pointer transition ease-in-out "
            >
              Shop
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black duration-300 cursor-pointer transition ease-in-out "
            >
              Features
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black duration-300 cursor-pointer transition ease-in-out "
            >
              Products
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black duration-300 cursor-pointer transition ease-in-out "
            >
              Review
            </Link>
          </nav>
          <div className="flex gap-5 items-center">
            <FaUser size={25} className=" text-darkColor cursor-pointer" />
            <div className=" text-darkColor cursor-pointer relative">
              <FaShoppingCart size={25} onClick={() => setShowCart(true)} />
              <div className=" absolute top-[-13px] right-[-10px] w-[22px] h-[20px] rounded-full bg-red-700 text-white text-sm place-items-center grid">
                {cartCount}
              </div>
            </div>
          </div>
          <div className=" lg:hidden flex items-center">
            {menu ? (
              <IoCloseOutline
                size={28}
                className=" cursor-pointer"
                onClick={handleChanges}
              />
            ) : (
              <AiOutlineMenu
                size={28}
                className=" cursor-pointer"
                onClick={handleChanges}
              />
            )}
          </div>
          <div
            className={`${
              menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute left-0 top-[75px] text-2xl font-semibold text-center pt-6 pb-3 gap-8 w-full h-fit transition-transform duration-300 bg-secondaryColor`}
          >
            <Link
              onClick={closeMenu}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black duration-300 cursor-pointer transition ease-in-out "
            >
              Home
            </Link>
            <Link
              onClick={closeMenu}
              to="shop"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black duration-300 cursor-pointer transition ease-in-out "
            >
              Shop
            </Link>
            <Link
              onClick={closeMenu}
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black duration-300 cursor-pointer transition ease-in-out "
            >
              Features
            </Link>
            <Link
              onClick={closeMenu}
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black duration-300 cursor-pointer transition ease-in-out "
            >
              Products
            </Link>
            <Link
              onClick={closeMenu}
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black duration-300 cursor-pointer transition ease-in-out "
            >
              Review
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
