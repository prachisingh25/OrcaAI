import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMoon,
  faInfoCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Right = () => {
  return (
    <div className="flex justify-end p-8">
      <div className="w-full max-w-sm">
        <div className="w-full p-4 rounded-full flex items-center space-x-4 shadow-lg">
          <div className="flex items-center rounded-full w-2/4 bg-gray-100  p-1">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-400 mr-1 p-1"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-gray-400 focus:outline-none p-1 bg-gray-100"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faBell}
              className="text-gray-300 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faMoon}
              className="text-gray-300 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-gray-300 cursor-pointer"
            />
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/glad-blonde-beautiful-european-woman-with-bright-vivid-makeup-dressed-fashionable-clothes-poses_273609-45069.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-xl">
          <h3 className="text-xl font-bold mb-4 text-indigo-900">
            Upload Videos, Audio, or Transcripts
          </h3>
          <div className="space-y-4 mb-6">
            <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center justify-center space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/2048px-Google_Drive_logo.png"
                alt="Drive Logo"
                className="w-6 h-6"
              />
              <span className="text-indigo-900 font-semibold">
                Upload from Drive
              </span>
            </button>
            <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center justify-center space-x-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/20/20829.png"
                alt="Cloud Upload Logo"
                className="w-6 h-6"
              />
              <span className="text-indigo-900 font-semibold">
                Upload from this Computer
              </span>
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-900">
              Data Integrations
            </h3>
            <div className="flex items-center justify-between space-x-2 mb-4">
              <div className="flex items-center space-x-2">
                <img
                  src="https://cdn.prod.website-files.com/611a19ba853b746b32f6b402/633460ee9910d86ae927078b_Hubsport%20CRM.webp"
                  alt="HubSpot Logo"
                  className="w-10 h-10"
                />
                <span className="text-indigo-900 font-bold">HubSpot</span>
              </div>
              <span className="top-4 left-4 bg-gray-200 text-xs text-gray-400 font-semibold py-1 px-2 rounded-md flex items-center">
                CRM
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="text-indigo-900 font-semibold">
                  Some data integration I have to ask about
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="text-indigo-900 font-semibold">
                  Some data integration
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full py-3 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition-all duration-300 shadow-lg">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Right;
