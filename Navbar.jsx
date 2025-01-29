import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { LiaDownloadSolid } from "react-icons/lia";
import Resume from "../assets/CV/AliResume.pdf";
const Navbar = () => {
  const [Active, setActive] = useState("");
  const [Toggle, setToggle] = useState(false);
  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center  fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
            {/* <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Ali Raza | &nbsp;
              <span className="sm:block hidden ">Mern Developer</span>
            </p> */}
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10 justify-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  Active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* making responsive for the mobile application */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={Toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!Toggle)}
            />
            <div
              className={`${
                !Toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4 ">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      Active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]  hover:text-white `}
                    onClick={() => {
                      setToggle(!Toggle);
                      console.log(Toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-500 py-2 px-6 rounded-xl outline-none text-white font-bold shadow-md w-fit flex items-center gap-1 hover:bg-violet-600 transition-colors"
            >
              <LiaDownloadSolid className="stroke-[2] w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
