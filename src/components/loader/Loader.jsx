import React from "react";
import { BeatLoader } from "react-spinners";

function Loader() {
  return (
    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm">
      <BeatLoader color="#991b1b" />
    </div>
  );
}

export default Loader;
