"use client";
import Link from "next/link";
import React, { useState } from "react";
import BeijeLogo from "./logo";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PulsatingDot from "./Pulsatindot";
import Image from "next/image";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cart)

  const [ürünlerOpen, setÜrünlerOpen] = useState(false);
  const [bizkimizOpen, setBizkimizOpen] = useState(false);
  const [bagisOpen, setBagisOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleÜrünlerHover = () => {
    setÜrünlerOpen(true);
    setBizkimizOpen(false);
    setBagisOpen(false);
  };

  const handleBizkimizHover = () => {
    setBizkimizOpen(true);
    setÜrünlerOpen(false);
    setBagisOpen(false);
  };

  const handleBagisHover = () => {
    setBagisOpen(true);
    setÜrünlerOpen(false);
    setBizkimizOpen(false);
  };

  const handleMouseLeave = () => {
    setÜrünlerOpen(false);
    setBizkimizOpen(false);
    setBagisOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-center w-full fixed z-10 left-0 top-0 py-[24px] px-[24px] gap-[32px]">
      <div className="w-[172px]">
        <BeijeLogo />
      </div>
      <div className="hidden md:flex gap-[32px]">
        <div
          className=" cursor-pointer"
          onMouseEnter={handleÜrünlerHover}
          onMouseLeave={handleMouseLeave}
        >
          <span className="relative">
            Ürünler
            <PulsatingDot />
          </span>
          {ürünlerOpen && (
            <div
              className={`absolute pt-10 flex left-0 w-screen bg-gray-100  shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0`}
            >
              <div className="mx-auto">
                <span className="font-bold">Ürünler</span>
                <div className="flex gap-[24px] mt-5">
                  <Link href="/product/pads" className="flex flex-col">
                    <Image
                      src="/pads.webp"
                      width={164}
                      height={82}
                      alt="beije Ped"
                    />
                    <div className="flex">
                      <span className="">beije Ped</span>

                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>

                  <Link href="/product/pantyliner">
                    <Image
                      src="/pantyliner.webp"
                      width={164}
                      height={82}
                      alt="beije Günlük Ped"
                    ></Image>
                    <div className="flex">
                      <span>beije Günlük Ped</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/tampons">
                    <Image
                      src="/tampons.webp"
                      width={164}
                      height={82}
                      alt="beije Tampon"
                    ></Image>
                    <div className="flex">
                      <span>beije Tampon</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/cup">
                    <Image
                      src="/cup.webp"
                      width={164}
                      height={82}
                      alt="beije Kap"
                    ></Image>
                    <div className="flex">
                      <span>beije Kap</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <div className="relative">
                    <Link href="/product/heating-patch">
                      <Image
                        src="/heating-patch.webp"
                        width={164}
                        height={82}
                        alt="Isı Bandı"
                      ></Image>
                      <PulsatingDot />
                      <div className="flex">
                        <span>Isı Bandı</span>
                        <div className="ml-auto">
                          <KeyboardArrowRightOutlinedIcon />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex mt-10">
                  <span className="font-bold">Paketler</span>
                  <span className="font-bold ml-auto">
                    Tüm Paketler
                    <ArrowForwardOutlinedIcon />
                  </span>
                </div>

                <div className="flex gap-[24px] mt-5">
                  <Link href="/product/popular">
                    <Image
                      src="/popular-packet.webp"
                      width={164}
                      height={82}
                      alt="Popüler Paketler"
                    ></Image>
                    <div className="flex">
                      <span>Popüler Paketler</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/pads">
                    <Image
                      src="/pads (1).webp"
                      width={164}
                      height={82}
                      alt="Ped Paketleri"
                    ></Image>
                    <div className="flex">
                      <span>Ped Paketleri</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/pantyliner">
                    <Image
                      src="/pantyliner (1).webp"
                      width={164}
                      height={82}
                      alt="Günlük Ped Paketleri"
                    ></Image>
                    <div className="flex">
                      <span>Günlük Ped Paketleri</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/tampons">
                    <Image
                      src="/tampons (1).webp"
                      width={164}
                      height={82}
                      alt="Tampon Paketleri"
                    ></Image>
                    <div className="flex">
                      <span>Tampon Paketleri</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/trial">
                    <Image
                      src="/trial-pack.webp"
                      width={164}
                      height={82}
                      alt="Deneme Paketi"
                    ></Image>
                    <div className="flex">
                      <span>Deneme Paketi</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex mt-10 ml-[25px]">
                <Link href="/product/custom-packet">
                  <Image
                    src="/custom-packet.webp"
                    width={164}
                    height={314}
                    alt="Kendi Paketini Oluştur"
                  ></Image>
                  <div className="flex">
                    <span>Kendi Paketini Oluştur</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="cursor-pointer"
          onMouseEnter={handleBizkimizHover}
          onMouseLeave={handleMouseLeave}
        >
          <span>Biz Kimiz?</span>
          {bizkimizOpen && (
            <div
              className={`absolute pt-10 left-0 w-screen bg-gray-100  shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0`}
            >
              <span className="font-bold">Biz Kimiz?</span>
              <div className="flex  gap-[24px] mt-5">
                <Link href="/know-us/why-beije">
                  <Image
                    src="/why.webp"
                    width={207}
                    height={101}
                    alt="Neden beije"
                  ></Image>
                  <div className="flex">
                    <span>Neden beije</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
                <Link href="/know-us/how-it-works">
                  <Image
                    src="/how.webp"
                    width={207}
                    height={101}
                    alt="beije Nasıl Çalışır?"
                  ></Image>
                  <div className="flex">
                    <span>beije Nasıl Çalışır?</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
                <Link href="/know-us/price-policy">
                  <Image
                    src="/price.webp"
                    width={207}
                    height={101}
                    alt="Fiyat Politikası"
                  ></Image>
                  <div className="flex">
                    <span>Fiyat Politikası</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
                <Link href="/know-us/faqs">
                  <Image
                    src="/faq.webp"
                    width={207}
                    height={101}
                    alt="Sıkça Sorulan Sorular"
                  ></Image>
                  <div className="flex">
                    <span>Sıkça Sorulan Sorular</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="cursor-pointer"
          onMouseEnter={handleBagisHover}
          onMouseLeave={handleMouseLeave}
        >
          <span>Bağış Kültürü</span>
          {bagisOpen && (
            <div
              className={`absolute left-0 pt-10 w-screen bg-gray-100  shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0`}
            >
              <span className="font-bold">Bağış Kültürü</span>
              <div className="flex gap-[24px] mt-5">
                <Link href="/donation-culture">
                  <Image
                    src="/our-philosophy.webp"
                    width={207}
                    height={101}
                    alt="Felsefemiz"
                  ></Image>
                  <div className="flex">
                    <span>Felsefemiz</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
                <Link href="/product/donation">
                  <Image
                    src="/donation-pad.webp"
                    width={207}
                    height={101}
                    alt="Askıda Ped"
                  ></Image>
                  <div className="flex">
                    <span>Askıda Ped</span>
                    <div className="flex justify-end">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
                <Link href="/charity">
                  <Image
                    src="/charity.webp"
                    width={207}
                    height={101}
                    alt="Bağış"
                  ></Image>
                  <div className="flex">
                    <span>Bağış</span>
                    <div className="flex justify-end">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
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
        <button onClick={handleMenuToggle} className="text-2xl z-30">
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      </div>
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-20 flex flex-col items-center gap-[32px] pt-24 md:hidden">
          <div
          className=" cursor-pointer"
          onMouseEnter={handleÜrünlerHover}
          onMouseLeave={handleMouseLeave}
        >
          <span className="relative text-lg">
            Ürünler<KeyboardArrowRightOutlinedIcon />
            <PulsatingDot />
          </span>
          {ürünlerOpen && (
            <div
              className={`absolute pt-10 flex left-0 w-screen bg-gray-100  shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0`}
            >
              <div className="mx-auto">
                <span className="font-bold">Ürünler</span>
                <div className="flex gap-[24px] mt-5">
                  <Link href="/product/pads" className="flex flex-col">
                    <Image
                      src="/pads.webp"
                      width={164}
                      height={82}
                      alt="beije Ped"
                    />
                    <div className="flex">
                      <span className="">beije Ped</span>

                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>

                  <Link href="/product/pantyliner">
                    <Image
                      src="/pantyliner.webp"
                      width={164}
                      height={82}
                      alt="beije Günlük Ped"
                    ></Image>
                    <div className="flex">
                      <span>beije Günlük Ped</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/tampons">
                    <Image
                      src="/tampons.webp"
                      width={164}
                      height={82}
                      alt="beije Tampon"
                    ></Image>
                    <div className="flex">
                      <span>beije Tampon</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/cup">
                    <Image
                      src="/cup.webp"
                      width={164}
                      height={82}
                      alt="beije Kap"
                    ></Image>
                    <div className="flex">
                      <span>beije Kap</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <div className="relative">
                    <Link href="/product/heating-patch">
                      <Image
                        src="/heating-patch.webp"
                        width={164}
                        height={82}
                        alt="Isı Bandı"
                      ></Image>
                      <PulsatingDot />
                      <div className="flex">
                        <span>Isı Bandı</span>
                        <div className="ml-auto">
                          <KeyboardArrowRightOutlinedIcon />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex mt-10">
                  <span className="font-bold">Paketler</span>
                  <span className="font-bold ml-auto">
                    Tüm Paketler
                    <ArrowForwardOutlinedIcon />
                  </span>
                </div>

                <div className="flex gap-[24px] mt-5">
                  <Link href="/product/popular">
                    <Image
                      src="/popular-packet.webp"
                      width={164}
                      height={82}
                      alt="Popüler Paketler"
                    ></Image>
                    <div className="flex">
                      <span>Popüler Paketler</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/pads">
                    <Image
                      src="/pads (1).webp"
                      width={164}
                      height={82}
                      alt="Ped Paketleri"
                    ></Image>
                    <div className="flex">
                      <span>Ped Paketleri</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/pantyliner">
                    <Image
                      src="/pantyliner (1).webp"
                      width={164}
                      height={82}
                      alt="Günlük Ped Paketleri"
                    ></Image>
                    <div className="flex">
                      <span>Günlük Ped Paketleri</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/tampons">
                    <Image
                      src="/tampons (1).webp"
                      width={164}
                      height={82}
                      alt="Tampon Paketleri"
                    ></Image>
                    <div className="flex">
                      <span>Tampon Paketleri</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                  <Link href="/product/trial">
                    <Image
                      src="/trial-pack.webp"
                      width={164}
                      height={82}
                      alt="Deneme Paketi"
                    ></Image>
                    <div className="flex">
                      <span>Deneme Paketi</span>
                      <div className="ml-auto">
                        <KeyboardArrowRightOutlinedIcon />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex mt-10 ml-[25px]">
                <Link href="/product/custom-packet">
                  <Image
                    src="/custom-packet.webp"
                    width={164}
                    height={314}
                    alt="Kendi Paketini Oluştur"
                  ></Image>
                  <div className="flex">
                    <span>Kendi Paketini Oluştur</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="cursor-pointer"
          onMouseEnter={handleBizkimizHover}
          onMouseLeave={handleMouseLeave}
        >
          <span>Biz Kimiz?<KeyboardArrowRightOutlinedIcon /></span>
          {bizkimizOpen && (
            <div
              className={`absolute pt-10 left-0 w-screen bg-gray-100  shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0`}
            >
              <span className="font-bold">Biz Kimiz?<KeyboardArrowRightOutlinedIcon /></span>
              <div className="flex  gap-[24px] mt-5">
                <Link href="/know-us/why-beije">
                  <Image
                    src="/why.webp"
                    width={207}
                    height={101}
                    alt="Neden beije"
                  ></Image>
                  <div className="flex">
                    <span>Neden beije</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
                <Link href="/know-us/how-it-works">
                  <Image
                    src="/how.webp"
                    width={207}
                    height={101}
                    alt="beije Nasıl Çalışır?"
                  ></Image>
                  <div className="flex">
                    <span>beije Nasıl Çalışır?</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
                <Link href="/know-us/price-policy">
                  <Image
                    src="/price.webp"
                    width={207}
                    height={101}
                    alt="Fiyat Politikası"
                  ></Image>
                  <div className="flex">
                    <span>Fiyat Politikası</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
                <Link href="/know-us/faqs">
                  <Image
                    src="/faq.webp"
                    width={207}
                    height={101}
                    alt="Sıkça Sorulan Sorular"
                  ></Image>
                  <div className="flex">
                    <span>Sıkça Sorulan Sorular</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="cursor-pointer"
          onMouseEnter={handleBagisHover}
          onMouseLeave={handleMouseLeave}
        >
          <span>Bağış Kültürü<KeyboardArrowRightOutlinedIcon /></span>
          {bagisOpen && (
            <div
              className={`absolute left-0 pt-10 w-screen bg-gray-100  shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0`}
            >
              <span className="font-bold">Bağış Kültürü</span>
              <div className="flex gap-[24px] mt-5">
                <Link href="/donation-culture">
                  <Image
                    src="/our-philosophy.webp"
                    width={207}
                    height={101}
                    alt="Felsefemiz"
                  ></Image>
                  <div className="flex">
                    <span>Felsefemiz</span>
                    <div className="ml-auto">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
                <Link href="/product/donation">
                  <Image
                    src="/donation-pad.webp"
                    width={207}
                    height={101}
                    alt="Askıda Ped"
                  ></Image>
                  <div className="flex">
                    <span>Askıda Ped</span>
                    <div className="flex justify-end">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
                <Link href="/charity">
                  <Image
                    src="/charity.webp"
                    width={207}
                    height={101}
                    alt="Bağış"
                  ></Image>
                  <div className="flex">
                    <span>Bağış</span>
                    <div className="flex justify-end">
                      <KeyboardArrowRightOutlinedIcon />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
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

export default Navbar;
