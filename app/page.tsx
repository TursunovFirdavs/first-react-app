"use client";

import Cards from "./components/Cards";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Qarzlar from "./components/Qarzlar";
import Sidebar from "./components/Sidebar";
import User from "./components/User";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        <div className="w-full">
          <User />
          <div className="flex justify-between h-[420px]">
            <Cards />
            <Qarzlar />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
