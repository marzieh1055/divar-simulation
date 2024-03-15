import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TbBuildingEstate } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineLeft } from "react-icons/ai";
import { RiCarLine } from "react-icons/ri";

import useRequest from "../../hooks/useRequest";
import DefaultSkeleton from "../skeleton/DefaultSkeleton";

function Sidebar() {
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
    </>
  );
}

export default Sidebar;
