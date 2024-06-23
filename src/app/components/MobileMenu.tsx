import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import MenuItems from "./MenuItems";

type MenuItemLink = {
  href: string;
  src: string;
  alt: string;
  text: string;
};

type MenuItem = {
  title: string;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: MenuItemLink[];
  paketler?: {
    href: string;
    src: string;
    alt: string;
    text: string;
  }[];
  customPacket?: {
    href: string;
    src: string;
    alt: string;
    text: string;
  };
};
  
  type MobileMenuProps = {
    menuOpen: boolean;
    handleMenuToggle: () => void;
    menuItems: MenuItem[];
    handleHover: (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => void;
    handleMouseLeave: () => void;
  };
  
  const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, handleMenuToggle, menuItems, handleHover, handleMouseLeave }) => 
    {
 
        return (
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
                    paketler={item.paketler} // Pass paketler
                    customPacket={item.customPacket} // Pass customPacket
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
      };


export default MobileMenu;
