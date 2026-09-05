import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function MainLayouts() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="top-5 left-0 w-full z-40">
        {/* <Navbar /> */}
      </div>

      <main className="">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
