import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TbBuildingEstate } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineLeft } from "react-icons/ai";
import { RiCarLine } from "react-icons/ri";

import useRequest from "../../hooks/useRequest";
import DefaultSkeleton from "../skeleton/DefaultSkeleton";
import useAuth from "../../hooks/useAuth";

function Sidebar() {
  const userData = useAuth();
  // icons
  const icons = {
    car: <RiCarLine />,
    food: <IoFastFoodOutline />,
    tec: <GrTechnology />,
    estate: <TbBuildingEstate />,
    default: <AiOutlineLeft />,
  };

  const { response, loading, error, fetchRequest } = useRequest(
    "/categorys",
    "GET"
  );

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <>
      <h2>دسته ها</h2>
      <ul className=" text-neutral-500 mt-2">
        {loading && <DefaultSkeleton />}
        {response?.data?.categorys?.map((category, index) => (
          <li key={index}>
            <Link
              to={`/categorys/${category.slug}`}
              className=" p-2 flex gap-2 items-center hover:text-neutral-800 transition"
            >
              {icons[category.icon]}
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      {userData && (
        <ul className=" text-neutral-500 mt-2">
          <li>
            <Link
              to={`/my-posts`}
              className=" p-2 flex gap-2 items-center hover:text-neutral-800 transition"
            >
              {icons["default"]}
              {"آگهی های من"}
            </Link>
          </li>
          <li>
            <Link
              to={`/my-orders`}
              className=" p-2 flex gap-2 items-center hover:text-neutral-800 transition"
            >
              {icons["default"]}
              {"سفارش های من"}
            </Link>
          </li>
          <li>
            <Link
              to={`/orders`}
              className=" p-2 flex gap-2 items-center hover:text-neutral-800 transition"
            >
              {icons["default"]}
              {"سفارش ها"}
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Sidebar;
