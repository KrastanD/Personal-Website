export enum Tech {
  React,
  Redux,
  SASS,
  ReactRouter,
  CRA,
  Typescript,
  HTML,
  CSS,
  Canvas,
  TailwindCSS,
  Vite,
  Flutter,
  Express,
  MongoDB,
  ReactNative,
  ReactNavigation,
  Expo,
  GraphQL,
}

export interface TechDatum {
  name: string;
  bgColor: string;
  textColor: string;
}

export const TechData: { [key in Tech]: TechDatum } = {
  [Tech.React]: {
    name: "React",
    bgColor: "bg-black",
    textColor: "text-reactBlue",
  },
  [Tech.Redux]: {
    name: "Redux",
    bgColor: "bg-reduxPurple",
    textColor: "text-white",
  },
  [Tech.SASS]: {
    name: "SASS",
    bgColor: "bg-sassPink",
    textColor: "text-white",
  },
  [Tech.ReactRouter]: {
    name: "React Router",
    bgColor: "bg-routerRed",
    textColor: "text-white",
  },
  [Tech.CRA]: { name: "CRA", bgColor: "bg-craGreen", textColor: "text-white" },
  [Tech.Typescript]: {
    name: "Typescript",
    bgColor: "bg-tsBlue",
    textColor: "text-white",
  },
  [Tech.HTML]: {
    name: "HTML",
    bgColor: "bg-htmlOrange",
    textColor: "text-white",
  },
  [Tech.CSS]: { name: "CSS", bgColor: "bg-cssBlue", textColor: "text-white" },
  [Tech.Canvas]: {
    name: "Canvas",
    bgColor: "bg-htmlOrange",
    textColor: "text-white",
  },
  [Tech.TailwindCSS]: {
    name: "TailwindCSS",
    bgColor: "bg-tailwindBlue",
    textColor: "text-white",
  },
  [Tech.Vite]: {
    name: "Vite",
    bgColor: "bg-vitePurple",
    textColor: "text-white",
  },
  [Tech.Flutter]: {
    name: "Flutter",
    bgColor: "bg-flutterBlue",
    textColor: "text-white",
  },
  [Tech.Express]: {
    name: "Express",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  [Tech.MongoDB]: {
    name: "MongoDB",
    bgColor: "bg-mongoGreen",
    textColor: "text-black",
  },
  [Tech.ReactNative]: {
    name: "React Native",
    bgColor: "bg-black",
    textColor: "text-reactBlue",
  },
  [Tech.ReactNavigation]: {
    name: "React Navigation",
    bgColor: "bg-reactNavigationPurple",
    textColor: "text-white",
  },
  [Tech.Expo]: { name: "Expo", bgColor: "bg-black", textColor: "text-white" },
  [Tech.GraphQL]: {
    name: "GraphQL",
    bgColor: "bg-graphQLPurple",
    textColor: "text-white",
  },
};
