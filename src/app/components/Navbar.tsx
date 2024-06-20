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

const Navbar = () => {
  const [ürünlerOpen, setÜrünlerOpen] = useState(false);
  const [bizkimizOpen, setBizkimizOpen] = useState(false);
  const [bagisOpen, setBagisOpen] = useState(false);

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

  return (
    <div className="flex items-center justify-center w-full fixed z-10 left-0 top-0 py-[24px] px-[24px] gap-[32px]">
      <div className="w-[172px]">
        <BeijeLogo />
      </div>
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
            className={`absolute left-0 w-screen bg-gray-100 border border-gray-200 shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0`}
          >
          <span className="font-bold">Ürünler</span>
          <div className="flex gap-[24px] mt-5">
            <Link href="/product/pads">
              <Image src="/pads.webp" width={164} height={82} alt="beije Ped"></Image>
              <span>beije Ped</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/product/pantyliner">
              <Image src="/pantyliner.webp" width={164} height={82} alt="beije Günlük Ped"></Image>
              <span>beije Günlük Ped</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/product/tampons">
              <Image src="/tampons.webp" width={164} height={82} alt="beije Tampon"></Image>
              <span>beije Tampon</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/product/cup">
              <Image src="/cup.webp" width={164} height={82} alt="beije Kap"></Image>
              <span>beije Kap</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
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
                <span>Isı Bandı</span>
                <div className="flex justify-end">
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </Link>
            </div>
            <Link href="/product/custom-packet">
              <Image src="/custom-packet.webp" width={164} height={314} alt="Kendi Paketini Oluştur"></Image>
              <span>Kendi Paketini Oluştur</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
          </div>

          <span className="font-bold">Paketler</span>
          <span className="font-bold">Tüm Paketler</span>
          <ArrowForwardOutlinedIcon />
          <div className="flex gap-[24px] mt-5">
            <Link href="/product/popular">
              <Image src="/popular-packet.webp" width={164} height={82} alt="Popüler Paketler"></Image>
              <span>Popüler Paketler</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/product/pads">
              <Image src="/pads (1).webp" width={164} height={82} alt="Ped Paketleri"></Image>
              <span>Ped Paketleri</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/product/pantyliner">
              <Image src="/pantyliner (1).webp" width={164} height={82} alt="Günlük Ped Paketleri"></Image>
              <span>Günlük Ped Paketleri</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/product/tampons">
              <Image src="/tampons (1).webp" width={164} height={82} alt="Tampon Paketleri"></Image>
              <span>Tampon Paketleri</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/product/trial">
              <Image src="/trial-pack.webp" width={164} height={82} alt="Deneme Paketi"></Image>
              <span>Deneme Paketi</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
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
            className={`absolute left-0 w-screen bg-gray-100 border border-gray-200 shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0`}
          >
          <span className="font-bold">Biz Kimiz?</span>
          <div className="flex gap-[24px] mt-5">
            <Link href="/know-us/why-beije">
              <Image src="/why.webp" width={207} height={101} alt="Neden beije"></Image>
              <span>Neden beije</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/know-us/how-it-works">
              <Image src="/how.webp" width={207} height={101} alt="beije Nasıl Çalışır?"></Image>
              <span>beije Nasıl Çalışır?</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/know-us/price-policy">
              <Image src="/price.webp" width={207} height={101} alt="Fiyat Politikası"></Image>
              <span>Fiyat Politikası</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/know-us/faqs">
              <Image src="/faq.webp" width={207} height={101} alt="Sıkça Sorulan Sorular"></Image>
              <span>Sıkça Sorulan Sorular</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
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
            className={`absolute left-0 w-screen bg-gray-100 border border-gray-200 shadow-lg rounded-md transition-all duration-300 ease-in-out transform opacity-100 translate-y-0`}
          >
            <span className="font-bold">Bağış Kültürü</span>
          <div className="flex gap-[24px] mt-5">
            <Link href="/donation-culture">
              <Image src="/our-philosophy.webp" width={207} height={101} alt="Felsefemiz"></Image>
              <span>Felsefemiz</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/product/donation">
              <Image src="/donation-pad.webp" width={207} height={101} alt="Askıda Ped"></Image>
              <span>Askıda Ped</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            <Link href="/charity">
              <Image src="/charity.webp" width={207} height={101} alt="Bağış"></Image>
              <span>Bağış</span>
              <div className="flex justify-end">
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Link>
            </div>
          </div>
          )}
      </div>
      <div className="cursor-pointer">
        <span>Regl Testi!</span>
      </div>
      <div className="cursor-pointer">
        <span>Kendi Paketini Oluştur</span>
      </div>
      <div className="flex justify-end w-[172px] gap-[16px]">
        <div className="cursor-pointer">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="cursor-pointer">
          <PermIdentityOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
