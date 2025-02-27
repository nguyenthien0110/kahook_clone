"use client";

import { Logout1Solid } from "@/assets/icon/Logout1Solid";
import AlertDialog from "@/components/AlertDialog";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Create() {
  const user = localStorage.getItem("username");
  const router = useRouter();
  const [openExit, setOpenExit] = useState(false);
  const [openLogOut, setOpenLogOut] = useState(false);

  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, []);

  const handleLogout = () => {
    if (user) {
      localStorage.removeItem("username");
      router.push("/auth/login");
    }
  };

  const handleExitPage = () => {
    router.push("/list");
  };

  return (
    <>
      <div className="relative w-full h-16 shadow-xl">
        <div className="h-full w-full mx-24 flex items-center">
          <span className="ml-4 font-bold text-[28px] text-[#5A0368]">
            Kahoot Clone!
          </span>
          <div className="absolute h-full w-[40%] right-16 flex items-center">
            <div className="h-10 mx-2 flex gap-1">
              <AlertDialog
                title="Exit"
                content="Are you sure you want to exit this page?"
                open={openExit}
                handleLogic={handleExitPage}
                handleClose={() => setOpenExit(false)}
              >
                <Button
                  handleOnClick={() => setOpenExit(true)}
                  title="Exit"
                  color="#D41F25"
                />
              </AlertDialog>
              <Button title="Save" color="#BCD41F" />
              <Button title="Preview" color="#1FD42B" />
            </div>
            <div className="h-14 w-[1px] border border-gray-300" />
            <span className="mx-2 font-bold">Hello, Welcome</span>
            <span className="w-10 text-[#3C56D7] text-ellipsis inline-block whitespace-nowrap overflow-hidden hover:underline hover:cursor-pointer">
              {user}
            </span>
            <AlertDialog
              title="DELETE"
              content="Are you sure you want to sign out?"
              open={openLogOut}
              handleLogic={handleLogout}
              handleClose={() => setOpenLogOut(false)}
            >
              <div className="absolute right-0 mr-2 text-[28px] hover:cursor-pointer hover:bg-gray-400 rounded-md">
                <Logout1Solid onClick={() => setOpenLogOut(true)} />
              </div>
            </AlertDialog>
          </div>
        </div>
      </div>
      <div className="h-auto mx-20 mt-8"></div>
    </>
  );
}

export default Create;
