"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Slider from "./components/Slider";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Image from "next/image";

export default function Home() {
  const [underlinePosition, setUnderlinePosition] = useState({
    left: 0,
    width: 0,
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State for enabling/disabling the "Sepete Ekle" button
  const [visibleSliders, setVisibleSliders] = useState(["standard"]); // State for visible sliders
  const [sliderValues, setSliderValues] = useState({
    standard: 0,
    super: 0,
    superPlus: 0,
    daily: 0,
    superDaily: 0,
    tamponMini: 0,
    tamponStandard: 0,
    tamponSuper: 0,
  }); // State to track slider values
  const [selectedProducts, setSelectedProducts] = useState([]); // State to track selected products
  const [totalCost, setTotalCost] = useState(0); // State to track the total cost of selected products

  useEffect(() => {
    const buttons = document.querySelectorAll(".button-item");
    buttons.forEach((btn) => {
      btn.addEventListener("click", function (e: MouseEvent) {
        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;
        const ripples = document.createElement("span");
        ripples.className =
          "ripple left-1/2 top-1/2 absolute bg-black/[.06] opacity-25 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple";
        this.appendChild(ripples);
        setTimeout(() => ripples.remove(), 1000);
      });
    });

    // Set initial underline position
    const initialButton = document.querySelector(".button-item");
    if (initialButton && initialButton.parentElement) {
      const parentRect = initialButton.parentElement.getBoundingClientRect();
      const buttonRect = initialButton.getBoundingClientRect();
      setUnderlinePosition({
        left: buttonRect.left - parentRect.left,
        width: buttonRect.width,
      });
    }

    // Cleanup function to remove event listeners
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("click", function (e) {
          // Removal logic here
        });
      });
    };
  }, []);

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

    // Update visible sliders based on the button clicked
    if (index === 2) {
      setVisibleSliders(["daily", "superDaily"]);
    } else if (index === 1) {
      setVisibleSliders(["standard", "super", "superPlus"]);
    } else if (index === 3) {
      setVisibleSliders(["tamponMini", "tamponStandard", "tamponSuper"]);
    } else {
      setVisibleSliders([]);
    }
  };

  

    const handleSliderChange = (name: string, value: number) => {
      setSliderValues((prevValues) => {
        const updatedValues = { ...prevValues, [name]: value };
  
        // Update selected products based on the slider change
        const updatedProducts:any = [];
        let totalCost = 0;
        Object.entries(updatedValues).forEach(([key, val]) => {
          if (val > 0) {
            // Calculate number of packs (every 10 units)
            const packs = Math.ceil(val / 10); // Number of packs
            let pricePerPack = 0; // Initialize price per pack
    
            // Determine price per pack based on product type
            switch (key) {
              case "standard":
                pricePerPack = 60.84; // price for standard, per pack of 10
                break;
              case "super":
                pricePerPack = 71.40; // price for super, per pack of 10
                break;
              case "superPlus":
                pricePerPack = 80.03; // price for super plus, per pack of 10
                break;
              case "daily":
                pricePerPack = 37.59; // price for daily, per pack of 10
                break;
              case "superDaily":
                pricePerPack = 43.23; // price for super daily, per pack of 10
                break;
              case "tamponMini":
                pricePerPack = 78.74; // price for mini tampon, per pack of 10
                break;
              case "tamponStandard":
                pricePerPack = 84.88; // price for standard tampon, per pack of 10
                break;
              case "tamponSuper":
                pricePerPack = 89.74; // price for super tampon, per pack of 10
                break;
              default:
                break;
            }
    
            // Calculate total cost for this product type
            totalCost += packs * pricePerPack;
    
            updatedProducts.push(`${val} adet ${key}`); // Add to selected products
          }
        });
        setSelectedProducts(updatedProducts);
        setTotalCost(totalCost);
  
        // Enable the "Sepete Ekle" button if any slider value is greater than 0
        const isAnySliderActive = Object.values(updatedValues).some((val) => val > 0);
        setIsButtonEnabled(isAnySliderActive);
  
        return updatedValues;
      });
    };
  const handleAddToCart = () => {
    // Logic to add selected products to the cart
    console.log("Added to cart:", selectedProducts);
  };


  return (
    <div className="mt-20 px-24 max-w-[1152px] mx-auto">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div>
            <span className="font-bold text-2xl">Kendi Paketini Oluştur</span>
            <Link href="/knowus/howitworks">
              <span className="ml-20">Nasıl Çalışır?</span>
            </Link>
          </div>
          <span className="mt-10">
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.
          </span>
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
            {visibleSliders.includes("standard") && (
               <>
               <Slider title="Standart Ped" min={0} max={60} step={10} value={sliderValues.standard} onChange={(value) => handleSliderChange("standard", value)} />
               <Slider title="Süper Ped" min={0} max={60} step={10} value={sliderValues.super} onChange={(value) => handleSliderChange("super", value)} />
               <Slider title="Süper+ Ped" min={0} max={60} step={10} value={sliderValues.superPlus} onChange={(value) => handleSliderChange("superPlus", value)} />
             </>
           )}
           {visibleSliders.includes("daily") && (
             <>
               <Slider title="Günlük Ped" min={0} max={100} step={10} value={sliderValues.daily} onChange={(value) => handleSliderChange("daily", value)} />
               <Slider title="Süper Günlük Ped" min={0} max={100} step={10} value={sliderValues.superDaily} onChange={(value) => handleSliderChange("superDaily", value)} />
             </>
           )}
           {visibleSliders.includes("tamponMini") && (
             <>
               <Slider title="Mini Tampon" min={0} max={60} step={10} value={sliderValues.tamponMini} onChange={(value) => handleSliderChange("tamponMini", value)} />
               <Slider title="Standart Tampon" min={0} max={60} step={10} value={sliderValues.tamponStandard} onChange={(value) => handleSliderChange("tamponStandard", value)} />
               <Slider title="Süper Tampon" min={0} max={60} step={10} value={sliderValues.tamponSuper} onChange={(value) => handleSliderChange("tamponSuper", value)} />
             </>
           )}
          </div>
        </div>
        <div className="flex flex-col rounded bg-white p-10">
          <span className="font-bold text-2xl">Özel Paketin</span>
          <span className="custom-shadow my-10 rounded">
            <AutorenewIcon />2 ayda 1 gönderim
          </span>
          <Image src="/packet.webp" width={402} height={180} alt="özel paket" />
          <div className="mt-4">
            {selectedProducts.map((product, index) => (
              <div key={index} className="flex justify-between">
                <span>{product}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <span>Toplam Tutar:</span>
            <span>{totalCost.toFixed(2)} ₺</span>
          </div>
          <button
            className={`w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-md mt-4 ${
              isButtonEnabled ? "" : "opacity-50 cursor-not-allowed"
            }`}
            type="button"
            onClick={handleAddToCart}
            disabled={!isButtonEnabled} // Button is disabled when isButtonEnabled is false
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
