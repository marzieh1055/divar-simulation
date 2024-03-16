import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import AddOrder from "../order/AddOrder";

function PostInfo({
  id,
  title,
  category,
  address,
  description,
  price,
  user_name,
}) {
  return (
    <div className=" w-1/2">
      <h1 className=" text-xl font-bold max-w-full break-words p-2">{title}</h1>
      <div className=" w-full flex justify-between p-2">
        <p className=" text-neutral-400">آدرس : {address}</p>
      </div>
      <hr className="" />
      <div className=" py-1 w-full flex justify-between">
        <p className=" text-neutral-400 p-2">صاحب آگهی</p>
        <p className=" text-neutral-800 p-2">{user_name}</p>
      </div>
      <hr className="" />
      <div className=" py-1 w-full flex justify-between">
        <p className=" text-neutral-400 p-2">قیمت</p>
        <p className=" text-neutral-800 p-2">{price}</p>
      </div>
      <hr className="" />
      <div className=" py-1 w-full flex justify-between">
        <p className=" text-neutral-400 p-2">دسته بندی</p>
        <p className=" text-neutral-800 p-2">{category}</p>
      </div>
      <hr className="" />
      <div className=" py-1 w-full">
        <p className=" text-neutral-400 p-2 flex items-center gap-2">
          توضیحات آگهی <IoIosArrowDown />
        </p>
        <p className=" text-neutral-800 p-2 pt-0 break-words">{description}</p>
      </div>
      <div className=" py-1 w-full">
        <AddOrder id={id} />
      </div>
    </div>
  );
}

export default PostInfo;
