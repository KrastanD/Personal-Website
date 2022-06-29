import ProjectFigure from "./ProjectFigure";

import finesseNationImg from "../assets/FinesseNationExample2.jpg";
import mementoImg from "../assets/MementoExample.jpg";
import lyricGeniusImg from "../assets/LyricGeniusExample.jpg";
import websiteExampleImg from "../assets/websiteExample.png";
import githubAppExampleImg from "../assets/GithubAppExample.jpg";
import playoutImg from "../assets/PlayOut.png";
import hitomezashiImg from "../assets/Hitomezashi.png";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <ProjectFigure
        image={playoutImg}
        title="Play Out"
        description="A website where users can see the Formula 1 race results for both drivers' and constructors' championships. It also has a graph that tracks the championship battle over the course of the year."
        techs={[
          { name: "React", bgColor: "bg-black", textColor: "text-reactBlue" },
          { name: "Redux", bgColor: "bg-reduxPurple", textColor: "text-white" },
          { name: "SASS", bgColor: "bg-sassPink", textColor: "text-white" },
          {
            name: "React Router",
            bgColor: "bg-routerRed",
            textColor: "text-white",
          },
          { name: "CRA", bgColor: "bg-craGreen", textColor: "text-white" },
          { name: "Typescript", bgColor: "bg-tsBlue", textColor: "text-white" },
        ]}
        link="https://playout.krastan.com"
      />
      <ProjectFigure
        image={hitomezashiImg}
        title="Hitomezashi"
        description="A website where users can create custom hitmezashi stitch patterns."
        techs={[
          { name: "HTML", bgColor: "bg-htmlOrange", textColor: "text-white" },
          { name: "CSS", bgColor: "bg-cssBlue", textColor: "text-white" },
          { name: "Typescript", bgColor: "bg-tsBlue", textColor: "text-white" },
          { name: "Canvas", bgColor: "bg-htmlOrange", textColor: "text-white" },
        ]}
        link="https://hitomezashi.krastan.com"
      />
      <ProjectFigure
        image={websiteExampleImg}
        title={"This Website"}
        description={`This is my personal website where people can learn about me,
         my work, and my projects.`}
        techs={[
          { name: "React", bgColor: "bg-black", textColor: "text-reactBlue" },
          {
            name: "TailwindCSS",
            bgColor: "bg-tailwindBlue",
            textColor: "text-white",
          },
          { name: "Typescript", bgColor: "bg-tsBlue", textColor: "text-white" },
          { name: "Vite", bgColor: "bg-vitePurple", textColor: "text-white" },
        ]}
        link={"https://github.com/KrastanD/KrastanD.github.io"}
      />
      <ProjectFigure
        image={finesseNationImg}
        title={"Finesse Nation"}
        description={`A mobile app where users can make
              posts about free food and giveaways on campus. Posts can include a picture,
              location, date and can even be commented and voted on.`}
        techs={[
          {
            name: "Flutter",
            bgColor: "bg-flutterBlue",
            textColor: "text-white",
          },
          { name: "Express", bgColor: "bg-black", textColor: "text-white" },
          {
            name: "MongoDB",
            bgColor: "bg-mongoGreen",
            textColor: "text-black",
          },
        ]}
        link={"https://www.github.com/FinesseNation"}
      />
      <ProjectFigure
        image={mementoImg}
        title={"Memento"}
        description={`An app where users can make posts about what they have done and set the date, time, and
              location.`}
        techs={[
          {
            name: "React Native",
            bgColor: "bg-black",
            textColor: "text-reactBlue",
          },
          {
            name: "React Navigation",
            bgColor: "bg-reactNavigationPurple",
            textColor: "text-white",
          },
          { name: "Expo", bgColor: "bg-black", textColor: "text-white" },
          { name: "Express", bgColor: "bg-black", textColor: "text-white" },
          {
            name: "MongoDB",
            bgColor: "bg-mongoGreen",
            textColor: "text-black",
          },
        ]}
        link={"https://www.github.com/KrastanD/Memento"}
      />
      <ProjectFigure
        image={lyricGeniusImg}
        title={"Lyric Genius"}
        description={`An app that displays live lyrics using the Spotify Api to see what
      song the user is currently playing and web scrapes genius.com to
      get the lyrics for it.`}
        techs={[
          {
            name: "React Native",
            bgColor: "bg-black",
            textColor: "text-reactBlue",
          },
          { name: "Expo", bgColor: "bg-black", textColor: "text-white" },
        ]}
        link={"https://www.github.com/KrastanD/LyricGenius"}
      />
      <ProjectFigure
        image={githubAppExampleImg}
        title="Github App"
        description={`An app which displays 
        profile and repo information for users and their following/followers using Github's API.`}
        techs={[
          {
            name: "React Native",
            bgColor: "bg-black",
            textColor: "text-reactBlue",
          },
          {
            name: "React Navigation",
            bgColor: "bg-reactNavigationPurple",
            textColor: "text-white",
          },
          {
            name: "GraphQL",
            bgColor: "bg-graphQLPurple",
            textColor: "text-white",
          },
          { name: "Expo", bgColor: "bg-black", textColor: "text-white" },
        ]}
        link="https://github.com/KrastanD/GitHubApp"
      />
    </div>
  );
};

export default Projects;
