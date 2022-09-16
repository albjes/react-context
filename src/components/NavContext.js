import React, { useContext, useState } from "react";

import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import { Transition } from "@headlessui/react";

function NavContext() {
  const { handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-gray-800 dark:bg-gray-400`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#1"
                  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <select
                  named="language"
                  onChange={handleLanguage}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="es">ES</option>
                  <option value="en">EN</option>
                </select>
                <input
                  type="radio"
                  id="light-context"
                  name="theme-context"
                  label="light"
                  onClick={handleTheme}
                  value="light"
                />
                <label
                  htmlFor="light-context"
                  className=" hover:bg-gray-700 text-white rounded-md text-sm font-medium"
                >
                  {texts.headerLight}
                </label>
                <input
                  type="radio"
                  id="dark-context"
                  name="theme-context"
                  label="dark"
                  onClick={handleTheme}
                  value="dark"
                />
                <label
                  htmlFor="dark-context"
                  className=" hover:bg-gray-700 text-white rounded-md text-sm font-medium"
                >
                  {texts.headerDark}
                </label>
                <button
                  onClick={handleAuth}
                  className="px-3 py-1  text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  {auth ? texts.buttonLogout : texts.buttonLogin}
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#1"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Memorización
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default NavContext;
