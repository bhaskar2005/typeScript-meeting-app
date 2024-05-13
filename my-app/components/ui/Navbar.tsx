import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex-between fixed z-50 w-full bg-slate-500 px-6 py-4 lg:px-10">
      <Link href={"/"} className=" flex items-center gap-1">
        <div className=" text-[26px] font-extrabold text-black">
          Waiveer Meeting
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
