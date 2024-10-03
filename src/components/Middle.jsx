import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCaretDown,
  faCaretRight,
  faUserCircle,
  faLock,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

const Middle = () => {
  const [openSections, setOpenSections] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const toggleDropdown = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="w-3/4 p-8">
      <div className="flex items-center space-x-4">
        <div className="top-4 left-4 bg-gray-200 text-xs text-gray-500 font-semibold py-1 px-2 rounded-md flex items-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-gray-500 opacity-80 cursor-pointer mr-2"
          />
          <span className="text-gray-500 opacity-80">Back</span>
        </div>
        <div className="text-gray-500 opacity-80">
          <span className="font-semibold text-xs">
            Templates / Sales Effectiveness / BANT
          </span>
        </div>
      </div>

      <div>
        <div className="text-indigo-900 text-2xl font-bold mt-3 mb-3 pt-2 pb-2">
          Analyse the calls for Soft Skills Coaching
        </div>
        <div>
          <FontAwesomeIcon icon={faCaretDown} className="text-blue-900" />
          <span className="p-2 m-2 text-base font-bold text-blue-900">
            How does it work?
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCaretDown} className="text-blue-900" />
          <span className="p-2 m-2 text-base font-bold text-blue-900">
            When should you use this?
          </span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-lg max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-md font-semibold text-indigo-900 border-b-4 border-purple-600 rounded-sm pb-1">
              Setup
            </h2>

            <h2 className="pl-2 text-md font-semibold text-gray-300 border-b-4 border-white pb-1 rounded-sm">
              Sample Output
            </h2>
          </div>
        </div>

        <div className="mt-4">
          {/* Section 1: Call Opening */}
          <div className="mb-4">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-purple-600 mr-2"
              />
              <h4 className="text-md font-bold text-indigo-900">
                Call Opening
              </h4>
            </div>
            <div
              className="mt-2 font-semibold text-indigo-900 text-base cursor-pointer flex items-center"
              onClick={() => toggleDropdown("section1")}
            >
              <FontAwesomeIcon
                icon={openSections.section1 ? faCaretRight : faCaretDown}
                className="text-indigo-900 mr-2"
              />
              <span className="mr-2">
                Was the purpose of the call stated in the beginning?
              </span>
            </div>
            {openSections.section1 && (
              <div className="mt-2">
                <div className="text-gray-300 ml-4 text-xs font-bold ">
                  HOW WILL THIS BE SCORED?
                </div>
                <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-300 text-sm font-semibold">
                      What was the purpose of call started in the beginning?
                    </p>
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-black text-xs mr-2 ml-2"
                    />
                    <button className="flex items-center text-purple-700 text-sm font-semibold bg-gray-200 border-2 border-gray-300 rounded-lg pl-3 pt-1 pb-1 pr-3 ml-auto">
                      <FontAwesomeIcon icon={faPencilAlt} className="mr-1" />
                      Edit
                    </button>
                  </div>
                  <p className="text-indigo-900 text-sm ">
                    Did the PST member greet the customer and use the call
                    opening with good energetic tone?
                    <br />
                    Did the PST member use the right salutation and greeting on
                    the email?
                  </p>
                </div>
              </div>
            )}
            <hr className="mt-4 border-gray-300" />
          </div>

          {/* Section 2: Greeting */}
          <div className="mb-4">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-purple-600 mr-2"
              />
              <h4 className="text-md font-bold text-indigo-900">Greeting</h4>
            </div>
            <div
              className="mt-2 font-semibold text-indigo-900 text-base cursor-pointer flex items-center"
              onClick={() => toggleDropdown("section2")}
            >
              <FontAwesomeIcon
                icon={openSections.section2 ? faCaretRight : faCaretDown}
                className="text-indigo-900 mr-2"
              />
              <span className="mr-2">
                Did the salesperson use an appropriate opening greeting?
              </span>
            </div>
            {openSections.section2 && (
              <div className="mt-2">
                <div className="text-gray-300 ml-4 text-xs font-bold ">
                  HOW WILL THIS BE SCORED?
                </div>
                <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-300 text-sm font-semibold">
                      What was the purpose of the call started in the beginning?
                    </p>
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-black text-xs mr-2 ml-2"
                    />
                    <button className="flex items-center text-purple-700 text-sm font-semibold bg-gray-200 border-2 border-gray-300 rounded-lg pl-3 pt-1 pb-1 pr-3 ml-auto">
                      <FontAwesomeIcon icon={faPencilAlt} className="mr-1" />
                      Edit
                    </button>
                  </div>
                  <p className="text-indigo-900 text-sm ">
                    You can put any relevant information here based on the
                    call's purpose.
                  </p>
                </div>
              </div>
            )}
            <hr className="mt-4 border-gray-300" />
          </div>

          {/* Section 3: Call Closing */}
          <div className="mb-4">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-purple-600 mr-2"
              />
              <h4 className="text-md font-bold text-indigo-900">
                Call Closing
              </h4>
            </div>
            <div
              className="mt-2 font-semibold text-indigo-900 text-base cursor-pointer flex items-center"
              onClick={() => toggleDropdown("section3")}
            >
              <FontAwesomeIcon
                icon={openSections.section3 ? faCaretRight : faCaretDown}
                className="text-indigo-900 mr-2"
              />
              <span className="mr-2">
                Did the salesperson summarize the key points discussed during
                the call?
              </span>
            </div>
            {openSections.section3 && (
              <div className="mt-2">
                <div className="text-gray-300 ml-4 text-xs font-bold ">
                  HOW WILL THIS BE SCORED?
                </div>
                <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-300 text-sm font-semibold">
                      What was the purpose of the call started in the beginning?
                    </p>
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-black text-xs mr-2 ml-2"
                    />
                    <button className="flex items-center text-purple-700 text-sm font-semibold bg-gray-200 border-2 border-gray-300 rounded-lg pl-3 pt-1 pb-1 pr-3 ml-auto">
                      <FontAwesomeIcon icon={faPencilAlt} className="mr-1" />
                      Edit
                    </button>
                  </div>
                  <p className="text-indigo-900 text-sm ">
                    End the call on a positive note. Make sure the customer
                    feels heard and understood.
                  </p>
                </div>
              </div>
            )}
            <hr className="mt-4 border-gray-300" />
          </div>

          {/* Section 4: Confidence */}
          <div className="mb-4">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-purple-600 mr-2"
              />
              <h4 className="text-md font-bold text-indigo-900">Confidence</h4>
            </div>
            <div
              className="mt-2 font-semibold text-indigo-900 text-base cursor-pointer flex items-center"
              onClick={() => toggleDropdown("section4")}
            >
              <FontAwesomeIcon
                icon={openSections.section4 ? faCaretRight : faCaretDown}
                className="text-indigo-900 mr-2"
              />
              <span className="mr-2">
                Did the salesperson speak with confidence and clarity?
              </span>
            </div>
            {openSections.section4 && (
              <div className="mt-2">
                <div className="text-gray-300 ml-4 text-xs font-bold ">
                  HOW WILL THIS BE SCORED?
                </div>
                <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-300 text-sm font-semibold">
                      Was the salesperson clear and confident in speaking?
                    </p>
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-black text-xs mr-2 ml-2"
                    />
                    <button className="flex items-center text-purple-700 text-sm font-semibold bg-gray-200 border-2 border-gray-300 rounded-lg pl-3 pt-1 pb-1 pr-3 ml-auto">
                      <FontAwesomeIcon icon={faPencilAlt} className="mr-1" />
                      Edit
                    </button>
                  </div>
                  <p className="text-indigo-900 text-sm ">
                    Ensure the speaker sounds confident with a calm demeanor.
                  </p>
                </div>
              </div>
            )}
            <hr className="mt-4 border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
