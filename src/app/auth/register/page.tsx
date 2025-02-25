"use client";

import { Facebook } from "@/assets/icon/Facebook";
import { Github } from "@/assets/icon/Github";
import { GmailLight } from "@/assets/icon/GmailLight";
import { Lock } from "@/assets/icon/Lock";
import { UserCircleOutline } from "@/assets/icon/UserCircleOutline";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-[#3a0ca3] to-[#720937]">
        <div className="bg-[#fff] h-[658px] w-[412px] box-border border rounded-xl">
          <div className="h-24 w-ful flex items-center justify-center text-[#000] text-[30px] mt-10 font-bold">
            <span>Sign Up</span>
          </div>
          <div className="bg-white w-full h-16 my-2 text-gray-700">
            <span className="px-10">Username</span>
            <div className="flex items-center px-10 gap-2">
              <UserCircleOutline className="text-[30px] font-thin" />
              <input
                className="h-8 w-full focus:outline-none"
                type="text"
                placeholder="Type your username"
              />
            </div>
            <div className="w-[80%] border-b-2 border-gray-300 mx-10"></div>
          </div>
          <div className="bg-white w-full h-16 my-2 text-gray-700">
            <span className="px-10">Password</span>
            <div className="flex items-center px-10 gap-2">
              <Lock className="text-[30px] font-thin" />
              <input
                className="h-8 w-full focus:outline-none"
                type="password"
                placeholder="Type your password"
              />
            </div>
            <div className="w-[80%] border-b-2 border-gray-300 mx-10"></div>
          </div>
          <div className="bg-white w-full h-16 my-8 flex justify-center items-center">
            <button className="bg-gradient-to-br from-[#3a0ca3] to-[#720937] w-[80%] h-12 text-[18px] font-bold text-gray-50 border rounded-3xl hover:from-[#645587] hover:to-[#823c5a]">
              Sign Up
            </button>
          </div>
          <div className="bg-white w-full h-20 my-2 mt-8">
            <span className="text-gray-600 flex items-center justify-center">
              Or Sign Up Using
            </span>
            <div className="flex justify-center items-center h-[60%] gap-5 text-[30px]">
              <Facebook className="hover:cursor-pointer" />
              <Github className="hover:cursor-pointer" />
              <GmailLight className="hover:cursor-pointer" />
            </div>
          </div>
          <div className="bg-white w-full h-16 mt-16">
            <span className="text-gray-600 flex items-center justify-center">
              Or Login Using
            </span>
            <div className="flex justify-center items-center h-[30%] text-[20px] mt-4">
              <span
                onClick={() => router.push("/auth/login")}
                className="text-gray-600 hover:cursor-pointer hover:underline flex items-center justify-center"
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
