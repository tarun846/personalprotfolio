import React from "react";
import myproject from "../../data/myproject.json";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Navbar from "../../components/Navbar";
import { myprojectdata } from "../../types/types";
import ProjectItem from "../../components/ProjectItem";
interface contextinterface {
  params: { projid: string };
  locales: undefined;
  locale: undefined;
  defaultLocale: undefined;
}
function Project({ projectdata }: { projectdata: myprojectdata }) {
  return (
    <div>
      <Navbar />
      <ProjectItem />
      <h1>{projectdata.title}</h1>
      <p>{projectdata.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  //   let myproject = await import("../../data/myproject.json");
  let paths = myproject.map((e) => {
    return {
      params: {
        projid: e.title.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.projid;
  const projectdata = myproject.find((e) => {
    return e.title === id;
  });
  console.log(projectdata);

  return {
    props: {
      projectdata,
    },
  };
}

export default Project;
