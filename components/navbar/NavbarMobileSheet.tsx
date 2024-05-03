"use client";
import React, { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import IconButton from "../ui/IconButton";
import SheetModel from "../sheet/SheetModel";
import { NavLinks } from "@/utils/NavLinksData";

const NavbarMobileSheet = () => {
  const [open, setOpen] = useState(false);
  console.log("🚀 ~ NavbarMobileSheet ~ open:", open)
  return (
    <>
      <div className="block md:hidden">
        <IconButton icon={<FaAlignLeft />} onClick={() => {
          setOpen(!open)
        }} />
        {open && <SheetModel>
            <div className="flex flex-col gap-4 px-5 mt-10">
              {
                NavLinks.map(link => {
                  return <div className="flex items-center gap-2 w-full hover:bg-blue-500 px-4 py-2 cursor-pointer" key={Math.random()}>
                    {link.icon}
                    <p>{link.name}</p>
                  </div>
                })
              }
            </div>
          </SheetModel>}
      </div>
    </>
  );
};

export default NavbarMobileSheet;
