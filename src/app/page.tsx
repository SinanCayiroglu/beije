"use client";
import Link from "next/link";
import { useState } from "react";
import Slider from "./components/Slider";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Image from "next/image";

export default function Home() {
  const [underlinePosition, setUnderlinePosition] = useState({
    left: 0,
    width: 0,
  });

  const handleButtonClick = (index:any) => {
    const buttons = document.querySelectorAll(".button-item");
    const button = buttons[index - 1];

    if (button && button.parentElement) {
      const parentRect = button.parentElement.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      setUnderlinePosition({
        left: buttonRect.left - parentRect.left,
        width: buttonRect.width,
      });
    }
  };

  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const x = e.clientX - this.offsetLeft;
      const y = e.clientY - this.offsetTop;
      const ripples = document.createElement("span");
      ripples.className =
        "ripple left-1/2 top-1/2 absolute bg-black/[.06] opacity-25 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple";
      this.appendChild(ripples);
      setTimeout(() => ripples.remove(), 1000);
    });
  });

  return (
    <div className="mt-20 px-24 max-w-[1152px] mx-auto ">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div>
          <span>Kendi Paketini Oluştur</span>
          <Link href="/knowus/howitworks">
            <span className="ml-20">Nasıl Çalışır?</span>
          </Link>
          </div>
          <span className="mt-10">Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.</span>
          <div className="gap-10 relative">
        <button
          className="button-item p-5 overflow-hidden relative group focus:ring-opacity-50 transition-all duration-300"
          onClick={() => handleButtonClick(1)}
        >
          beije Ped
        </button>
        <button
          className="button-item p-5 relative group overflow-hidden focus:ring-opacity-50 transition-all duration-300"
          onClick={() => handleButtonClick(2)}
        >
          beije Günlük Ped
        </button>
        <button
          className="button-item p-5 overflow-hidden relative group transition-all duration-300"
          onClick={() => handleButtonClick(3)}
        >
          beije Tampon
        </button>
        <div
          className="absolute bottom-0 left-0 h-1 bg-gray-800 transition-all duration-300"
          style={{
            left: `${underlinePosition.left}px`,
            width: `${underlinePosition.width}px`,
          }}
        ></div>
      </div>
      <div className="mt-10">
        <Slider title="Standart Ped" min={0} max={60} step={10} />
        <Slider title="Süper Ped" min={0} max={60} step={10} />
        <Slider title="Süper+ Ped" min={0} max={60} step={10} />
      </div>
        </div>
        <div className="flex flex-col rounded bg-white p-10">
          <span className="font-bold text-2xl">Özel Paketin</span>
          <span className="custom-shadow pt-10"><AutorenewIcon />2 ayda 1 gönderim</span>
          <Image src="/packet.webp" width={402} height={180} alt="özel paket"></Image>
        </div>
      </div>
      
    </div>
  );
}
