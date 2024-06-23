import React from "react";
import Link from "next/link";
import PulsatingDot from "./Pulsatingdot";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Image from "next/image";

type MenuItemLink = {
  href: string;
  src: string;
  alt: string;
  text: string;
};

type MenuItemsProps = {
  handleHover: () => void;
  handleMouseLeave: () => void;
  isOpen: boolean;
  title: string;
  links: MenuItemLink[];
  paketler?: MenuItemLink[];
  customPacket?: MenuItemLink;
};

const MenuItems: React.FC<MenuItemsProps> = ({
  handleHover,
  handleMouseLeave,
  isOpen,
  title,
  links,
  paketler,
  customPacket,
}) => (
  <div className="cursor-pointer" onClick={handleHover} onMouseLeave={handleMouseLeave}>
    <span className="relative">
      {title}
      <PulsatingDot />
    </span>
    {isOpen && (
      <div className={`fixed top-0 left-0 w-screen h-screen bg-white z-50 flex justify-center items-center`}>
        <div className="w-full  max-w-screen-lg p-8 bg-gray-100 shadow-lg rounded-md">
  
          <div className="flex flex-col gap-8 mt-5">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="flex flex-col w-52">
                <div className="flex items-center justify-between mt-2">
                  <span className="truncate">{link.text}</span>
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </Link>
            ))}
          </div>
          {paketler && (
            <div className="mt-10">
              <span className="font-bold">Paketler</span>
              <div className="flex flex-wrap gap-8 mt-5">
                {paketler.map((paket, index) => (
                  <Link key={index} href={paket.href} className="flex flex-col w-52">
                    <div className="flex items-center justify-between mt-2">
                      <span className="truncate">{paket.text}</span>
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {customPacket && (
            <div className="mt-10">
              <Link href={customPacket.href} className="flex flex-col w-52">
                <div className="flex items-center justify-between mt-2">
                  <span className="truncate">{customPacket.text}</span>
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);

export default MenuItems;
