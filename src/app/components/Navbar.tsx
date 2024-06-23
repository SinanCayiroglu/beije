"use client";
import Link from "next/link";
import React, { useState } from "react";
import BeijeLogo from "./logo";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PulsatingDot from "./Pulsatingdot";
import Image from "next/image";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useSelector } from "react-redux";
import { RootState } from "../redux/storage";
import MobileMenu from "./MobileMenu";

// Define TypeScript types
type MenuItem = {
  title: string;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: {
    href: string;
    src: string;
    alt: string;
    text: string;
    extra?: JSX.Element;
  }[];
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

type NavbarProps = {};
const Navbar: React.FC<NavbarProps> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart)

  const [ürünlerOpen, setÜrünlerOpen] = useState(false);
  const [bizkimizOpen, setBizkimizOpen] = useState(false);
  const [bagisOpen, setBagisOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHover = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    setÜrünlerOpen(false);
    setBizkimizOpen(false);
    setBagisOpen(false);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setÜrünlerOpen(false);
    setBizkimizOpen(false);
    setBagisOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems: MenuItem[] = [
    {
      title: "Ürünler",
      isOpen: ürünlerOpen,
      setOpen: setÜrünlerOpen,
      links: [
        { href: "/product/pads", src: "/pads.webp", alt: "beije Ped", text: "beije Ped" },
        { href: "/product/pantyliner", src: "/pantyliner.webp", alt: "beije Günlük Ped", text: "beije Günlük Ped" },
        { href: "/product/tampons", src: "/tampons.webp", alt: "beije Tampon", text: "beije Tampon" },
        { href: "/product/cup", src: "/cup.webp", alt: "beije Kap", text: "beije Kap" },
        { href: "/product/heating-patch", src: "/heating-patch.webp", alt: "Isı Bandı", text: "Isı Bandı", extra: <PulsatingDot /> },
      ],
      paketler: [
        { href: "/product/popular", src: "/popular-packet.webp", alt: "Popüler Paketler", text: "Popüler Paketler" },
        { href: "/product/pads", src: "/pads (1).webp", alt: "Ped Paketleri", text: "Ped Paketleri" },
        { href: "/product/pantyliner", src: "/pantyliner (1).webp", alt: "Günlük Ped Paketleri", text: "Günlük Ped Paketleri" },
        { href: "/product/tampons", src: "/tampons (1).webp", alt: "Tampon Paketleri", text: "Tampon Paketleri" },
        { href: "/product/trial", src: "/trial-pack.webp", alt: "Deneme Paketi", text: "Deneme Paketi" },
      ],
      customPacket: {
        href: "/product/custom-packet",
        src: "/custom-packet.webp",
        alt: "Kendi Paketini Oluştur",
        text: "Kendi Paketini Oluştur",
      },
    },
    {
      title: "Biz Kimiz?",
      isOpen: bizkimizOpen,
      setOpen: setBizkimizOpen,
      links: [
        { href: "/know-us/why-beije", src: "/why.webp", alt: "Neden beije", text: "Neden beije" },
        { href: "/know-us/how-it-works", src: "/how.webp", alt: "beije Nasıl Çalışır?", text: "beije Nasıl Çalışır?" },
        { href: "/know-us/price-policy", src: "/price.webp", alt: "Fiyat Politikası", text: "Fiyat Politikası" },
        { href: "/know-us/faqs", src: "/faq.webp", alt: "Sıkça Sorulan Sorular", text: "Sıkça Sorulan Sorular" },
      ],
    },
    {
      title: "Bağış Kültürü",
      isOpen: bagisOpen,
      setOpen: setBagisOpen,
      links: [
        { href: "/donation-culture", src: "/our-philosophy.webp", alt: "Felsefemiz", text: "Felsefemiz" },
        { href: "/product/donation", src: "/donation-pad.webp", alt: "Askıda Ped", text: "Askıda Ped" },
        { href: "/charity", src: "/charity.webp", alt: "Bağış", text: "Bağış" },
      ],
    },
  ];
  

  return (
    <div className="flex items-center justify-center w-full fixed z-10 left-0 top-0 py-[24px] px-[24px] gap-[32px]">
      <div className="w-[172px]">
        <BeijeLogo />
      </div>
      <div className="hidden md:flex gap-[32px]">
      {menuItems.map((menuItem, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onMouseEnter={() => menuItem.setOpen(true)}
          onMouseLeave={() => menuItem.setOpen(false)}
        >
          <span className="relative">{menuItem.title}{menuItem.title === "Ürünler" && (<PulsatingDot/>)}</span>
          {menuItem.isOpen && (
            <div
              className={`absolute pt-10 flex  left-0 w-screen bg-gray-100 shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0`}
            >
              <div className="mx-auto">
                {menuItem.title === "Ürünler" && (
                  <>
                    <span className="font-bold">Ürünler</span>
                    <div className="flex gap-[24px] mt-5">
                      {menuItem.links.map((link, linkIndex) => (
                        <Link key={linkIndex} href={link.href} className="flex flex-col relative">
                          <Image src={link.src} width={164} height={82} alt={link.alt} />
                          <div className="flex">
                            <span>{link.text}</span>
                            <div className="ml-auto">
                              <KeyboardArrowRightOutlinedIcon />
                            </div>
                          </div>
                          {link.extra && link.extra}
                        </Link>
                        
                      ))}
                    </div>
                    <div className="flex flex-col mt-10">
                      <div className="flex">
                        <span className="font-bold">Paketler</span>
                        <span className="font-bold ml-auto">
                          Tüm Paketler
                          <ArrowForwardOutlinedIcon />
                        </span>
                      </div>
                      <div className="flex gap-[24px] mt-5">
                        {menuItem.paketler &&
                          menuItem.paketler.map((paket, paketIndex) => (
                            <Link key={paketIndex} href={paket.href}>
                              <Image src={paket.src} width={164} height={82} alt={paket.alt} />
                              <div className="flex">
                                <span>{paket.text}</span>
                                <div className="ml-auto">
                                  <KeyboardArrowRightOutlinedIcon />
                                </div>
                              </div>
                            </Link>
                          ))}
                      </div>
                      
                    </div>
                  </>
                )}
                {menuItem.title !== "Ürünler" && (
                  <div className="flex gap-[24px] mt-5">
                    {menuItem.links.map((link, linkIndex) => (
                      <Link key={linkIndex} href={link.href}>
                        <Image src={link.src} width={207} height={101} alt={link.alt} />
                        <div className="flex">
                          <span>{link.text}</span>
                          <div className="ml-auto">
                            <KeyboardArrowRightOutlinedIcon />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                
              </div>
              {menuItem.title === "Ürünler" && (
             
             <div className="flex mt-10">
             {menuItem.customPacket && (
               <Link href={menuItem.customPacket.href}>
                 <Image src={menuItem.customPacket.src} width={164} height={314} alt={menuItem.customPacket.alt} />
                 <div className="link-text flex">
                   <span>{menuItem.customPacket.text}</span>
                   <div className="ml-auto">
                     <KeyboardArrowRightOutlinedIcon />
                   </div>
                 </div>
               </Link>
             )}
                </div>)}
            </div>
          )}
        </div>
      ))}
        <div className="cursor-pointer">
          <Link href="/quiz">Regl Testi!</Link>
        </div>
        <div className="cursor-pointer">
          <Link href="/custom-packet">Kendi Paketini Oluştur</Link>
        </div>
      </div>
      
      <div className="flex justify-end w-[172px] gap-[16px]">
      <div className="cursor-pointer relative">
        <Link href="/cart">
          <span className="">
            <ShoppingCartOutlinedIcon />
          </span>
          {cartItems.length > 0 && (
            <span className="absolute bottom-4 left-4 bg-green-800 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    
        <div className="cursor-pointer">
          <Link href="/login">
          <PermIdentityOutlinedIcon />
          </Link>
        </div>
        <div className="flex items-center md:hidden">

      </div>
      </div>
      <MobileMenu
        menuOpen={menuOpen}
        handleMenuToggle={handleMenuToggle}
        menuItems={menuItems}
        handleHover={handleHover}
        handleMouseLeave={handleMouseLeave}
      />
        
    </div>
  );
};

export default Navbar;
