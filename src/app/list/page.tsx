"use client";

import { Logout1Solid } from "@/assets/icon/Logout1Solid";
import AlertDialog from "@/components/AlertDialog";
import Button from "@/components/Button";
import Quiz from "@/components/Quiz";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Home() {
  const user = localStorage.getItem("username");
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, []);

  const handleLogout = () => {
    if (user) {
      localStorage.removeItem("username");
      router.push("/auth/login");
    }
  };

  return (
    <>
      <div className="relative w-full h-16 shadow-xl">
        <div className="h-full w-full mx-24 flex items-center">
          <span className="ml-4 font-bold text-[28px] text-[#5A0368]">
            Kahoot Clone!
          </span>
          <div className="absolute h-full w-[40%] right-16 flex items-center">
            <div className="h-10 mx-2">
              <Button title="Create" />
            </div>
            <div className="h-14 w-[1px] border border-gray-300" />
            <span className="mx-2 font-bold">Hello, Welcome</span>
            <span className="w-10 text-[#3C56D7] text-ellipsis inline-block whitespace-nowrap overflow-hidden hover:underline hover:cursor-pointer">
              {user}
            </span>
            <AlertDialog
              title="DELETE"
              content="Are you sure you want to sign out?"
              open={open}
              handleLogout={handleLogout}
              handleClose={handleClose}
            >
              <div className="absolute right-0 mr-2 text-[28px] hover:cursor-pointer hover:bg-gray-400 rounded-md">
                <Logout1Solid onClick={handleClickOpen} />
              </div>
            </AlertDialog>
          </div>
        </div>
      </div>
      <div className="h-auto mx-20 mt-8">
        <Quiz email={user || ""} title="Quiz 1" />
        <Quiz email={user || ""} title="Quiz 2" />
        <Quiz email={user || ""} title="Quiz 3" />
      </div>
    </>
  );
}

export default Home;
