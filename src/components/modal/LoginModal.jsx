import React from "react";
import { createPortal } from "react-dom";

function LoginModal({ isOpen, user, children }) {
  return (
    <>
      {isOpen &&
        !user &&
        createPortal(
          <div className=" flex justify-center items-center fixed top-0 left-0 z-50 w-full h-screen bg-[#00000011] backdrop-blur-[2px]">
            {children}
          </div>,
          document.getElementById("modal")
        )}
    </>
  );
}

export default LoginModal;
