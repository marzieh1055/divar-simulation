import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function MainLayout() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <main className=" w-full flex min-h-svh">
        <aside className=" w-1/5 px-4 py-8 border-l-[1px] border-neutral-300 max-sm:hidden">
          <Sidebar />
        </aside>
        <div className=" w-4/5 px-4 py-8 max-sm:w-full">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default MainLayout;
