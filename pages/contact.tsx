import Image from "next/image";
import React from "react";
import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Herobackground from "../public/Herobackground.jpeg";
import protfolioimage from "../public/protfolio.jpeg";
function Contact() {
  return (
    <>
      <div className="min-h-[88vh]">
        <Navbar />
        <div className="max-w-[1200px] my-0 mx-auto z-0 ">
          <div className="relative shadow-xl ">
            <Image
              src={Herobackground}
              alt={""}
              className="min-h-[30vh] w-full object-cover shadow-lg lg:rounded-xl "
            />
            <Image
              className="rounded-full  w-28 h-28 absolute  bottom-[-40px] left-[50%] right-[50%] translate-x-[-50%]  mt-8  shadow-xl "
              src={protfolioimage}
              alt="Next.js Logo"
            />
          </div>

          <div className="max-w-[900px] my-0 mx-auto p-4 ">
            <div className="mt-16">
              <a className="font-bold text-center ">Contact</a>
            </div>
            <div className="pl-4 mt-8 ">
              <h1>
                The best way to get in touch with me is to email
                <a href="mailto:tarunkumardevloper@gmail.com?subject= Hello i am Tarun kumar Happy to meet with you">
                  {" "}
                  <span className="rounded-lg bg-protfolio-yellow">
                    tarunkumardevloper@gmail.com
                  </span>
                </a>
              </h1>
            </div>
            <ContactComponent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
