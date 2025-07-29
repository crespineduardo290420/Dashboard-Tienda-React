import React from "react";
//icons
import {
  RiHome2Fill,
  RiPercentLine,
  RiPieChart2Line,
  RiMessage2Line,
  RiNotificationLine,
  RiSettings4Line,
  RiLoginBoxLine,
} from "react-icons/ri";

const SideBar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      {/* menu */}
      <div className="">
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>
          <li className="p-4 rounded-tl-xl rounded-bl-xl bg-[#262837]">
            <a
              className="p-4 box-content flex justify-center rounded-xl bg-[#ec7c6a] text-white"
              href="#"
            >
              <RiHome2Fill className="text-2xl" />
            </a>
          </li>

          <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors">
            <a
              className="p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white"
              href="#"
            >
              <RiPercentLine className="text-2xl" />
            </a>
          </li>

          <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors">
            <a
              className="p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white"
              href="#"
            >
              <RiPieChart2Line className="text-2xl" />
            </a>
          </li>

          <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors">
            <a
              className="p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white"
              href="#"
            >
              <RiMessage2Line className="text-2xl" />
            </a>
          </li>

          <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors">
            <a
              className="p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white"
              href="#"
            >
              <RiNotificationLine className="text-2xl" />
            </a>
          </li>

          <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors">
            <a
              className="p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white"
              href="#"
            >
              <RiSettings4Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="pl-4">
          <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors">
            <a
              className="p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white"
              href="#"
            >
              <RiLoginBoxLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
