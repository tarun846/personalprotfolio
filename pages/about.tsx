import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Herobackground from "../public/Herobackground.jpeg";
import protfolioimage from "../public/protfolio.jpeg";
import Footer from "../components/Footer";
import ContactComponent from "../components/ContactComponent";
function About() {
  return (
    <div>
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
            <h1 className="font-bold text-center ">About</h1>
          </div>
          <p className="mb-8">Hey hey 👋</p>
          <h2 className="mb-8">
            My name is
            <span className="rounded-lg bg-protfolio-yellow">
              {" "}
              Tarun Kumar.{" "}
            </span>
          </h2>
          <h2 className="mb-8">
            I'm a self taught{" "}
            <span className="rounded-lg bg-protfolio-yellow ">
              {" "}
              javascript developer
            </span>{" "}
            with 1 years of professional experience as a{" "}
            <span className="rounded-lg bg-protfolio-yellow ">
              {" "}
              Frontend Developer.{" "}
            </span>{" "}
          </h2>
          <h2 className="mb-8">
            I've built countless side projects using my technical skills and
            have gained the{" "}
            <span className="mr-2 rounded-lg bg-protfolio-seagreen">
              {" "}
              magical powers of javascript{" "}
            </span>{" "}
            that I use to build delightful
            <span className="ml-2 rounded-lg bg-protfolio-seagreen">
              user interfaces
            </span>{" "}
            and
            <span className="ml-2 rounded-lg bg-protfolio-seagreen">
              interactive web applications.{" "}
            </span>{" "}
          </h2>
          <h1 className="mb-8 text-3xl font-bold ">my experience</h1>
          <ul className="mb-8">
            <li className="ml-4">
              <h1>
                {" "}
                <span className="rounded-md bg-protfolio-pink">
                  {" "}
                  Ui Developer{" "}
                </span>
                @cassp labs
              </h1>
              <h1>jan 2022 - Present</h1>
              <h1>
                Tech Stack: React JS, Redux Toolkit, webpack, Tailwind CSS,
                browser caching , storybook, Typescript, AWS ,
              </h1>
            </li>
          </ul>
          <h1 className="mb-8 text-3xl font-bold ">a little more…</h1>
          <ul className="">
            <div className="">
              <li className="ml-8 list-disc">
                I manage{" "}
                <span className="rounded-lg bg-protfolio-green">
                  {" "}
                  Robin hood army{" "}
                </span>{" "}
                in puri odisha with the help of strong 43 members where we cook
                and distibute food for pepole in need and help pepole also we
                make{" "}
                <span className="rounded-lg bg-protfolio-seagreen ">
                  {" "}
                  plant trees{" "}
                </span>
                and and make aware of{" "}
                <span className="bg-red-300 rounded-lg">climate change</span>
              </li>
            </div>
          </ul>
          <ContactComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
