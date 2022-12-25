import Image from "next/image";
import Link from "next/link";
import React from "react";
import protfolioimage from "../../public/protfolio.jpeg";
function Navbar() {
  return (
    <div className="w-full flex justify-between p-4 backdrop-blur-sm  sticky top-0 scroll-mb-8 z-10">
      <div className="flex items-center ">
        <Link href="/">
          {" "}
          <div className="flex items-center ">
            <Image
              className="rounded-full w-8 h-8 "
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
          <li>
            <Link href="/about">about</Link>
          </li>

          <li className="pl-4">
            <Link href="/contact">contact</Link>
          </li>
          <div className="pl-4">
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
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
