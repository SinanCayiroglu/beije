"use client";
import React, { useState } from "react";
import MyIcon from "./MyIcon";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

const Footer = () => {
  

  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const placeholderEmail = "halide.edip@adivar.com";

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (email === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };
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
            e-gazetemiz
            <br />
            döngü’ye abone ol!
          </span>
          <div className="flex items-center relative w-full">
      {/* Email input */}
      <div className="relative w-full">
        <label
          className={`absolute left-3 transition-all ${
            isFocused || email ? '-top-4 text-sm' : 'top-3 text-base'
          } text-white text-opacity-60`}
          htmlFor="email"
        >
          e-mail adresin
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFocused || email ? placeholderEmail : ''}
          className="rounded p-2 text-white text-opacity-60 w-full border border-gray-500"
          style={{ backgroundColor: "rgb(38, 38, 38)" }}
        />
        <fieldset
          aria-hidden="true"
          className="absolute inset-0 border border-gray-500 rounded pointer-events-none"
        >
          <legend
            className={`px-2 transition-all ${
              isFocused || email ? 'text-sm' : 'hidden'
            }`}
          >
           
          </legend>
        </fieldset>
      </div>

      {/* Submit button */}
      <button className="rounded-3xl bg-white p-2 ml-2 font-bold hover:bg-gray-800">
        Gönder
      </button>
    </div>
          <span className="text-sm text-white text-opacity-60 mb-20 mt-5">
            Abone olarak, beije KVKK ve Gizlilik Politikası&apos;nı kabul ediyor
            ve beije&apos;den haber almayı
            <br /> onaylıyorum.
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-5 ml-20">
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
          <div className="flex flex-col ml-5 gap-5">
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
        <div className="flex flex-col gap-5 ml-5">
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
        <div className="flex mt-10">
          <div>
            <span className="text-white text-opacity-60 text-sm">
              2024 beije. Tüm hakları saklıdır.
            </span>
          </div>
          <div className="flex gap-5 text-sm">
            <Link href="/know-us/kvkk">
              <span className="text-white text-opacity-60 ml-20">KVKK</span>
            </Link>
            <Link href="/front/forms/KVKK.Başvuru.Formu.pdf">
              <span className="text-white text-opacity-60 ">
                KVKK Başvuru Formu
              </span>
            </Link>
            <Link href="/know-us/membership-agreement">
              <span className="text-white text-opacity-60 ">
                Üyelik Sözleşmesi
              </span>
            </Link>
            <Link href="/know-us/privacy">
              <span className="text-white text-opacity-60 ">
                Gizlilik Politikası
              </span>
            </Link>
            <Link href="/know-us/cookies">
              <span className="text-white text-opacity-60 ">
                Çerez Politikası
              </span>
            </Link>
            <Link href="/know-us/test-results">
              <span className="text-white text-opacity-60 ">
                Test Sonuçları
              </span>
            </Link>
          </div>
          <div className="flex ml-10">
            <Link href="/en/custom-packet">
              <span className="text-white text-opacity-60 text-sm">EN </span>
            </Link>
            <span className="text-white text-opacity-60"> | </span>
            <Link href="/custom-packet">
              <span className="text-white text-opacity-60 text-sm"> TR</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 gap-1">
          <Image
            src="/card-troy.d69829d3.svg"
            width={48}
            height={24}
            alt="troy"
          ></Image>
          <Image
            src="/card-mastercard.2bedc059.svg"
            width={48}
            height={24}
            alt="troy"
          ></Image>
          <Image
            src="/card-visa.9f651691.svg"
            width={48}
            height={24}
            alt="troy"
          ></Image>
          <Image
            src="/card-american-express.af29b018.svg"
            width={48}
            height={24}
            alt="troy"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Footer;
