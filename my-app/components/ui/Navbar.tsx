import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex-between fixed z-50 w-full bg-slate-500 px-6 py-4 lg:px-10">
      <Link href={"/"} className=" flex items-center gap-1">
        <div className=" md:text-[32px] font-extrabold text-white text-[18px] font-sans">
          Waiveer Meet
        </div>
      </Link>
      <div className=" flex-between text-lg gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
