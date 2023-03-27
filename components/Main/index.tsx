import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../Navbar";
import Herobackground from "../../public/Herobackground.jpeg";
import protfolioimage from "../../public/protfolio.jpeg";
import skilldata from "../../data/skilldata.json";
import myproject from "../../data/myproject.json";
import Footer from "../Footer";
import { github_Link, twitter_Link } from "../../constants";
function Main() {
  let myval = skilldata.map((e, i) => {
    return (
      <h3
        key={i}
        className="p-1 mb-1 mr-8 text-sm leading-4 rounded-lg bg-protfolio-green"
      >
        {" "}
        {e}{" "}
      </h3>
    );
  });

  return (
    <>
      <Navbar />
      <div className="bg-protfolio-purple"></div>
      <div className="bg-protfolio-seagreen"></div>
      <div className="">
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
              <h1 className="font-bold text-center ">Tarun Kumar</h1>

              <div className="mt-16 mb-4">
                <h2>Hello World 👋 </h2>
                <p>
                  I'm <span className="font-bold">Tarun Kumar</span> , a
                  <span className="bg-protfolio-yellow">
                    {" "}
                    JavaScript developer
                  </span>{" "}
                  and I specialize in{" "}
                  <span className="bg-protfolio-yellow">
                    Frontend Development{" "}
                  </span>{" "}
                  . I love using my technical skills to build cool & interesting
                  things. In my spare time, I work on projects related to
                  <span className="ml-1 bg-protfolio-blue">
                    {" "}
                    JavaScript,{" "}
                  </span>{" "}
                  <span className="ml-1 bg-protfolio-blue "> React, </span>
                  <span className="ml-1 bg-protfolio-blue ">TypeScript,</span>
                  etc
                </p>
                <div className="mt-8 ">
                  You can find me on <a href={twitter_Link}>Twitter</a> and{" "}
                  <a href={github_Link}> GitHub</a> — check out my bio for more
                  info.{" "}
                  <a
                    href="https://drive.google.com/file/d/1-RtHTX_cPCoE4AwxjK9sxOPSa7hMsrFS/view"
                    className="bg-protfolio-seagreen rounded-lg "
                    attributes-list-download
                  >
                    {" "}
                    View Resume
                  </a>
                </div>

                <div className="mt-8">
                  <h2 className="">My Skillset</h2>
                  <div className="flex flex-wrap mt-8">{myval}</div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="mb-4">My Projects </h2>
              <hr className="border-1 border-t-black" />
              <div className="grid gap-4 p-2 mt-8 lg:grid-cols-2 ">
                {myproject.map((e) => {
                  return (
                    <div
                      className={
                        e.disabled ? "cursor-pointer" : "cursor-default"
                      }
                      style={!e.disabled ? {} : { pointerEvents: "none" }}
                      key={e.id}
                    >
                      <a href={e.link} target="_blank">
                        <div className="">
                          <Image
                            alt={"asdfvbn"}
                            className="w-full h-full rounded-md"
                            src={Herobackground}
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="w-full bg-black min-h-max"></div>
                        <h1 className="pt-2">{e.title}</h1>
                        <p className="pt-2">{e.description}</p>
                        <h3 className="pt-2">{e.time}</h3>
                        <div className="flex flex-wrap pt-3 ">
                          {e.techstack.map((e, i) => {
                            return (
                              <h3
                                key={i}
                                className={`mr-8  text-sm rounded-lg leading-4 p-1 mb-1 bg-${e.color} `}
                              >
                                {e.title}
                              </h3>
                            );
                          })}
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
