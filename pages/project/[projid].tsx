import React from "react";
import myproject from "../../data/myproject.json";
import Navbar from "../../components/Navbar";
import { Iparma, myprojectdata } from "../../types/types";
import ProjectItem from "../../components/ProjectItem";
import Footer from "../../components/Footer";
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
      <ProjectItem projectdata={projectdata} />
      <Footer />
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

export async function getStaticProps({ params }: { params: Iparma }) {


  const id = params.projid;
  const projectdata = myproject.find((e) => {
    return e.title === id;
  });

  return {
    props: {
      projectdata,
    },
  };
}

export default Project;
