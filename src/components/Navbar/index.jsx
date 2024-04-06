import { CgArrowTopRightO } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";
import { Button, Li } from "./style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const mobile = useSelector(state => state.navbar.mobile)

  return (
    <div className="w-full rounded-2xl border border-[var(--black-neutral3)] glass py-[10px] px-5 flex items-center justify-between">
      {mobile ? (
        <span className="text-white text-4xl active:text-[aqua]">
          <AiOutlineMenu />
        </span>
      ) : (
        <Link to={"/"} className="font-bold text-[20px] text-white">
          Salimov<span className="text-[aqua]">ONE</span>
        </Link>
      )}
      {!mobile && (
        <ul className="navLinks flex gap-2 text-white">
          <Li>
            <Link to={"/"}>Home</Link>
          </Li>
          <Li>
            <Link to={"/about"}>About</Link>
          </Li>
          <Li>
            <Link to={"/blog"}>Blog</Link>
          </Li>
          <Li>
            <Link to={"/contact"}>Contact</Link>
          </Li>
        </ul>
      )}

      <div className="flex text-white gap-4 items-center justify-center">
        <button className="active:text-[aqua]">Let's Talk</button>
        <Button className="flex items-center text-3xl">
          <CgArrowTopRightO />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
