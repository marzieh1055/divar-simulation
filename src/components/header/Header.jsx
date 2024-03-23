import React from "react";
import { Link } from "react-router-dom";
import UserRegester from "../auth/UserRegester";

function Header() {
  return (
    <header className=" flex justify-between w-full p-4 border-b-[1px] border-neutral-300">
      <div className=" flex gap-4 items-center">
        <h1 className=" text-red-800 text-2xl font-semibold pr-2">دیوار</h1>
        <hr className=" h-2/3 border border-neutral-300 max-md:hidden"></hr>
        <span className=" text-neutral-400 max-md:hidden">آگهی های عمومی</span>
      </div>

      <nav>
        <ul className=" flex gap-4">
          <li className=" p-2 rounded-md text-neutral-500">
            <UserRegester />
          </li>
          <li className=" p-2 bg-red-800 rounded-md text-white">
            <Link to={"/create-post"}>ثبت آگهی</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
