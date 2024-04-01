import { CgArrowTopRightO } from "react-icons/cg"; 
import { AiOutlineMenu } from "react-icons/ai"; 
import React from "react";
import { Button } from "./style";

const Navbar = () => {
  return (
    <div className="w-full rounded-2xl border border-[var(--black-neutral3)] glass py-[10px] px-5 flex items-center justify-between">
      <span className="text-white text-4xl active:text-[aqua]">
        <AiOutlineMenu />
      </span>

      <div className="flex text-white gap-4 items-center justify-center">
        <button className="active:text-[aqua]">Let's Talk</button>
        <Button className="flex items-center text-3xl"><CgArrowTopRightO /></Button>
      </div>
    </div>
  );
};

export default Navbar;
