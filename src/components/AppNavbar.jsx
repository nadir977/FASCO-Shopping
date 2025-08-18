import React from "react";
import FASCO from "../assets/FASCO.PNG";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Deals", href: "#deals", current: false },
  { name: "New Arrivals", href: "#new-arrivals", current: false },
  { name: "Collection", href: "#packages", current: false },
];

const AppNavbar = () => {
  return (
    <Disclosure
      as="nav"
      className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px text-black"
    >
      <div className="mx-auto max-w-[1281px]">
        <div className="relative flex h-[104px] items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden pr-4">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-white/5 hover:text-[#333] focus:outline-2 focus:-outline-offset-1 focus:outline-[#484848]">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Logo + Desktop Nav */}
          <div className="flex w-full md:p-0 pl-6 items-center justify-between">
            <div className="flex shrink-0 items-center">
              <img alt="Your Company" src={FASCO} className="h-8 w-auto" />
            </div>

            {/* Nav Links */}
            <div className="hidden sm:flex sm:ml-6 space-x-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={`
                    relative mx-6 px-2 py-1 text-[#484848] font-medium after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[#484848] after:transition-all
                    ${
                      item.current
                        ? "after:left-0 after:w-full text-[#484848] font-semibold"
                        : "after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0"
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}

              {/* Sign In */}
              <Link to="/signin">
                <button
                  className="relative mx-6 px-2 py-1 text-[#484848] font-medium 
                    after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[#484848] after:transition-all
                    after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0"
                >
                  Sign in
                </button>
              </Link>

              {/* Sign Up */}
              <Link to="/signup">
                <button className="py-3 px-8 cursor-pointer rounded-lg bg-black hover:bg-[#333] text-white">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className="block rounded-md px-3 py-2 text-[#484848] font-medium hover:underline"
            >
              {item.name}
            </DisclosureButton>
          ))}
          <Link to="/signin">
            <DisclosureButton
              as="a"
              className="block rounded-md px-3 py-2 text-[#484848] font-medium hover:underline"
            >
              Sign in
            </DisclosureButton>
          </Link>
          <Link to="/signup">
            <DisclosureButton
              as="a"
              className="block max-w-[100px] pl-5 lg:pl-0 px-3 py-2 font-medium text-white bg-black rounded-lg"
            >
              Sign Up
            </DisclosureButton>
          </Link>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default AppNavbar;
