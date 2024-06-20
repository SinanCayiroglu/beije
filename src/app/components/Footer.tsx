"use client";
import React from "react";
import MyIcon from "./MyIcon";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(38, 38, 38)" }}
      className="py-[80px] px-[144px]"
    >
        <div className="flex">

        
      <div className="flex flex-col">
        <Link href="/">
          <MyIcon />
        </Link>
        <span className="text-white text-opacity-60 mt-10">
          Arayı açmayalım!
        </span>
        <span className="text-white text-opacity-60 mb-10">
          beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık
          e-gazetemiz döngü’ye abone ol!
        </span>
        <div className="flex w-full">
          <input
            type="email"
            name="email"
            placeholder="halide.edip@adivar.com"
            className="rounded p-2"
          />
          <button className="rounded-2xl bg-white p-1 ml-2">Gönder</button>
        </div>
        <span className="text-sm text-white text-opacity-60">
          Abone olarak, beije KVKK ve Gizlilik Politikası&apos;nı kabul ediyor ve
          beije&apos;den haber almayı onaylıyorum.
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-5">
          <Link href="/product/peds" className="text-white">
            beije Ped
          </Link>
          <Link href="/product/peds" className="text-white">
            beije Günlük Ped
          </Link>
          <Link href="/product/peds" className="text-white">
            beije Tampon
          </Link>
          <Link href="/product/peds" className="text-white">
            beije Store
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <Link href="/product/peds" className="text-white">
            Blog
          </Link>
          <Link href="/product/peds" className="text-white">
            Sıkça Sorulan Sorular
          </Link>
          <Link href="/product/peds" className="text-white">
            Biz Kimiz?
          </Link>
          <Link href="/product/peds" className="text-white">
            Quiz
          </Link>
        </div>
        </div>
        <div className="flex flex-col gap-5">
          <Link href="https://www.facebook.com/beijewomen/">
            <FacebookOutlinedIcon className="text-white text-opacity-60" />
            <span className="text-white ml-2">Facebook</span>
          </Link>

          <Link href="https://www.instagram.com/beijewomen/">
            <InstagramIcon className="text-white text-opacity-60" />
            <span className="text-white ml-2">İnstagram</span>
          </Link>
          <Link href="https://twitter.com/beijewomen">
            <TwitterIcon className="text-white text-opacity-60" />
            <span className="text-white ml-2">Twitter</span>
          </Link>
          <Link href="https://tr.linkedin.com/company/beije-tr">
            <LinkedInIcon className="text-white text-opacity-60" />
            <span className="text-white ml-2">Linkedin</span>
          </Link>
          <Link href="https://open.spotify.com/user/ma20bga4ewhwt96kx1p92f2uv">
            <span className="text-white ml-2">Spotify</span>
          </Link>
        </div>
      
      </div>
      <div>
        <hr />
        <div className="flex mt-10 gap-5">
          <div>
            <span className="text-white text-opacity-60">
              2024 beije. Tüm hakları saklıdır.
            </span>
          </div>
          <div>
            <span className="text-white text-opacity-60 ml-20">KVKK</span>
            <span className="text-white text-opacity-60 ">
              KVKK Başvuru Formu
            </span>
            <span className="text-white text-opacity-60 ">
              Üyelik Sözleşmesi
            </span>
            <span className="text-white text-opacity-60 ">
              Gizlilik Politikası
            </span>
            <span className="text-white text-opacity-60 ">
              Çerez Politikası
            </span>
            <span className="text-white text-opacity-60 ">Test Sonuçları</span>
          </div>
          <div>
            <span>EN</span>
            <span>TR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
