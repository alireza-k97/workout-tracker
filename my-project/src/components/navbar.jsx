import React from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-start items-center rounded-xl m-4">
      <div>
        <img src={Logo} alt="logo-icon" />
      </div>
      <ul className="flex gap-6">
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            صفحه اصلی
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            ثبت تمرین
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            تاریخچه
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
