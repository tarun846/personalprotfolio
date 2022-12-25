import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../Navbar";
import Herobackground from "../../public/Herobackground.jpeg";
import protfolioimage from "../../public/protfolio.jpeg";
import skilldata from "../../data/skilldata.json";
import myproject from "../../data/myproject.json";
import Footer from "../Footer";
function Main() {
  let myval = skilldata.map((e, i) => {
    return (
      <h3
        key={i}
        className="mr-8 bg-protfolio-green text-sm rounded-lg leading-4 p-1 mb-1"
      >
        {" "}
        {e}{" "}
      </h3>
    );
  });

  return (
    <>
      <Navbar />

      <div className=" ">
        <div className="max-w-[1200px] my-0 mx-auto z-0 ">
          <div className="relative shadow-xl ">
            <Image
              src={Herobackground}
              alt={""}
              className="min-h-[30vh] w-full object-cover rounded-xl shadow-lg"
            />
            <Image
              className="rounded-full  w-28 h-28 absolute  bottom-[-40px] left-[50%] right-[50%] translate-x-[-50%]  mt-8  shadow-xl "
              src={protfolioimage}
              alt="Next.js Logo"
            />
          </div>
          <div className="max-w-[900px] my-0 mx-auto ">
            <div className="mt-16">
              <h1 className="text-center font-bold ">Tarun Kumar</h1>

              <div className="mt-16">
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
                  <span className="bg-protfolio-blue ml-1">
                    {" "}
                    JavaScript,{" "}
                  </span>{" "}
                  <span className="bg-protfolio-blue ml-1 "> React, </span>
                  <span className="bg-protfolio-blue ml-1 ">TypeScript,</span>
                  etc
                </p>
                <div className="mt-8 ">
                  You can find me on Twitter and GitHub — check out my bio for
                  more info. View Resume
                </div>

                <div className="mt-8">
                  <h2 className="bg-protfolio-seagreen">My Skillset</h2>
                  <div className="flex flex-wrap mt-8">{myval}</div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="mb-4">My Projects </h2>
              <hr className="border-1 border-t-black" />
              <div className="grid grid-cols-2 gap-4 mt-8 ">
                {myproject.map((e) => {
                  return (
                    <div key={e.id}>
                      <Link href={`/project/${e.title}`}>
                        <div className="">
                          <Image
                            alt={"asdfvbn"}
                            className="w-full h-full rounded-md"
                            src={Herobackground}
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="w-full min-h-max bg-black"></div>
                        <h1 className="pt-2">{e.title}</h1>
                        <p className="pt-2">{e.description}</p>
                        <h3 className="pt-2">{e.time}</h3>
                        <div className="flex flex-wrap pt-3 ">
                          {e.techstack.map((e, i) => {
                            return (
                              <h3
                                key={i}
                                className={`mr-8  text-sm rounded-lg leading-4 p-1 mb-1 ${e.color} `}
                              >
                                {e.title}
                              </h3>
                            );
                          })}
                        </div>
                        .{" "}
                      </Link>
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

// rgb(210,234,188) , green

// rgb(254,245,154) . yellow

//rgb(173,237,252) . . blue

// rgb(225,213,249) purple
// rgb(207,231,226) sea green
// rgb(255,206,211) pink
