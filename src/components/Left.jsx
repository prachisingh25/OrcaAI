import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faChartBar,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const Left = () => {
  return (
    <div className="bg-white p-8 m-4 shadow-2xl border border-gray-200 rounded-lg flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold mb-4 text-indigo-900">ORCA AI</h1>
        <hr className="w-full border-t border-gray-300 mb-6" />
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 text-indigo-950 opacity-50 cursor-pointer">
            <FontAwesomeIcon icon={faHome} />
            <span className="pl-2 font-semibold">Home</span>
          </li>
          <li className="flex items-center space-x-2 text-indigo-950 opacity-50 cursor-pointer">
            <FontAwesomeIcon icon={faFileAlt} />
            <span className="pl-2  font-semibold">Templates</span>
          </li>
          <li className="flex items-center space-x-2 text-indigo-950 opacity-50 cursor-pointer">
            <FontAwesomeIcon icon={faChartBar} />
            <span className="pl-2  font-semibold">Reports</span>
          </li>
          <li className="flex items-center space-x-2 text-indigo-950 opacity-50 cursor-pointer">
            <FontAwesomeIcon icon={faChartLine} />
            <span className="pl-2  font-semibold">Sales Performance</span>
          </li>
        </ul>
      </div>
      <div className="mt-auto flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-2">
          <img
            src="https://img.freepik.com/free-photo/glad-blonde-beautiful-european-woman-with-bright-vivid-makeup-dressed-fashionable-clothes-poses_273609-45069.jpg"
            alt="Manager"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className=" text-indigo-900 font-bold">Atlas Doe</p>
          <p className="text-sm text-indigo-950 opacity-70">Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Left;
