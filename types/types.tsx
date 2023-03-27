export interface myprojectdata {
  id: number;
  title: string;
  description: string;
  time: string;
  img: string;
  techstack: Techstack[];
}
interface Techstack {
  title: string;
  color: string;
}
interface contextinterface {
  params: { projid: string };
  locales: undefined;
  locale: undefined;
  defaultLocale: undefined;
}


export interface Iparma {
  projid: string;
}