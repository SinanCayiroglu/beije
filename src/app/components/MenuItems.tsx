import React from "react";
import Link from "next/link";
import PulsatingDot from "./PulsatinDot";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Image from "next/image";

const MenuItems = ({ handleHover, handleMouseLeave, isOpen, title, links }) => (
  <div className="cursor-pointer" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
    <span className="relative">
      {title}
      <PulsatingDot />
    </span>
    {isOpen && (
      <div className="absolute pt-10 left-0 w-screen bg-gray-100 shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0">
        <div className="mx-auto">
          <span className="font-bold">{title}</span>
          <div className="flex gap-[24px] mt-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="flex flex-col">
                <Image src={link.src} width={164} height={82} alt={link.alt} />
                <div className="flex">
                  <span>{link.text}</span>
                  <div className="ml-auto">
                    <KeyboardArrowRightOutlinedIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

export default MenuItems;
