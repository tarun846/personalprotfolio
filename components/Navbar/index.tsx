import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemecontextProvider } from "../../provider/themeprovider";
import protfolioimage from "../../public/protfolio.jpeg";
function Navbar() {
  const { handleTheme, theme } = ThemecontextProvider();

  return (
    <div className="sticky top-0 z-10 scroll-mb-8">
      {" "}
      <div className="flex justify-between w-full p-4 backdrop-blur-sm max-w-[1200px] my-0 mx-auto">
        <div className="flex items-center ">
          <Link href="/">
            {" "}
            <div className="flex items-center ">
              <Image
                className="w-8 h-8 rounded-full "
                src={protfolioimage}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
              <span className="pl-2">Tarun kumar</span>
            </div>
          </Link>
        </div>
        <div className="">
          <ul className="flex items-center">
            <li className="pl-4">
              <Link href="/about">about</Link>
            </li>

            <li className="pl-4">
              <Link href="/contact">contact</Link>
            </li>
            <div className="pl-4">
              {/* <button onClick={handleTheme}>
                {theme ? (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                    ></path>
                    <circle
                      cx="256"
                      cy="256"
                      r="80"
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    ></circle>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"></path>
                  </svg>
                )}
              </button> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
