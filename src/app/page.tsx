"use client";

import { Sqrllogin } from "@/assets/icon/Sqrllogin";
import ToastProvider, { NotifyMessage } from "@/components/Message";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [error, setError] = useState("");
  const [pin, setPin] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth/login");
  };
  useEffect(() => {
    setError("");
  }, [pin]);

  const handleEnter = () => {
    if (pin && pin.length !== 6) {
      setError("Invalid pin");
    } else {
      setError("");
    }
    console.log("Enter:", pin);
  };

  const handleOnChange = (value: string) => {
    setPin(value);
  };
  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#3a0ca3] to-[#720937]">
        <div className="absolute inset-0 bg-[#4a148c] opacity-50 clip-path-kahoot-style"></div>
        <Sqrllogin
          onClick={handleLogin}
          className="text-[#fff] h-8 w-8 absolute top-0 right-0 mt-4 mr-8 rounded-2xl hover:bg-white hover:opacity-60 hover:text-[#000] hover:cursor-pointer"
        />
        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kahoot!</h2>
          <input
            type="number"
            value={pin}
            onChange={(e) => {
              handleOnChange(e.target.value);
            }}
            placeholder="Game PIN"
            className="w-full px-4 py-3 border-[2px] rounded-md mb-4 text-center text-gray-500 font-bold text-2xl border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <button
            onClick={handleEnter}
            className="w-full bg-black text-white py-4 rounded-md font-semibold opacity-75 hover:translate-y-[2px] transition-transform"
          >
            <span>Enter</span>
          </button>
        </div>
        <ToastProvider />
        <NotifyMessage message={error} type="error" />
      </div>
    </>
  );
}
