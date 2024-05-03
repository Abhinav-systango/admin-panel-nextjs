"use client";
import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaStream } from "react-icons/fa";
import NavbarMobileSheet from "./NavbarMobileSheet";
import Input from "../ui/Input";
import IconButton from "../ui/IconButton";
import VerticalSeparator from "../ui/VerticalSeparator";

const Navbar = () => {
  // const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  return (
    <div className="flex h-full w-full gap-5 my-4 max-md:items-center">
      <Input type="text" placeholder="Search"></Input>
      <div className="hidden md:flex gap-3 ">
        <IconButton icon={<FaRegBell />}/>
        <IconButton icon={<FaCog />}/>
      </div>

      <div className="hidden md:block">
        <VerticalSeparator />
      </div>

      <NavbarMobileSheet />
      
      <div className="flex gap-3 items-center ml-auto">
        <div className="">
          <p className="text-primary text-xs">Hello,</p>
          <p className="w-[max-content]">User Name</p>
        </div>
        <div className="h-9 w-9 rounded-full border-2">
        <img src="https://github.com/shadcn.png" className=" rounded-full"/>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
