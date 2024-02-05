import React from "react";
import LogoVPN from "../../public/assets/logo-white.png";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import { COMPANY_NAME } from "../../env";
const Footer = () => {
  return (
    <div className="footer pt-6 pb-6">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <img src="/assets/logo-white.png"
            className="h-8 w-auto mb-6"
            style={{
              height: '70px'
            }}
          />
          <p className="mb-4 text-white-500">
            <strong className="font-medium">{COMPANY_NAME}</strong> is a fastfood restaurant.
          </p>

        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-10 sm:col-end-13 flex flex-col">
          <p className="text-white-500 mb-4 font-medium text-lg">Call Us</p>
          <ul className="text-white-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              9828766738{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              980-3847053{" "}
            </li>

          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-6 sm:col-end-9 flex flex-col">
          <p className="text-white-500 mb-4 font-medium text-lg">Follow Us</p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.facebook.com/DokiDokiNepal" target="__blank">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
        </div>

      </div>
      <div className="text-center">
        <p className="text-gray-400">©{new Date().getFullYear()} - {COMPANY_NAME}</p>

      </div>
    </div>
  );
};

export default Footer;
