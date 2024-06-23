import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import MenuItems from "./MenuItems";

type MenuItemProps ={
    menuOpen: boolean;
    handleMenuToggle: () => void;
    menuItems: MenuItemProps[];
    handleHover: (setOpen: boolean) => void;
    handleMouseLeave: () => void;
}

const MobileMenu = ({ menuOpen, handleMenuToggle, menuItems, handleHover, handleMouseLeave }:MenuItemProps) => (
  <div className="flex items-center md:hidden">
    <button onClick={handleMenuToggle} className="text-2xl z-30">
      {menuOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
    {menuOpen && (
      <div className="absolute top-0 left-0 w-full h-screen bg-white z-20 flex flex-col items-center gap-[32px] pt-24 md:hidden">
        {menuItems.map((item) => (
          <MenuItems
            key={item.title}
            handleHover={() => handleHover(item.setOpen)}
            handleMouseLeave={handleMouseLeave}
            isOpen={item.isOpen}
            title={item.title}
            links={item.links}
          />
        ))}
        <Link href="/" className="text-lg">
          Regl Testi!
        </Link>
        <Link href="/" className="text-lg">
          Kendi Paketini Oluştur
        </Link>
      </div>
    )}
  </div>
);

export default MobileMenu;
