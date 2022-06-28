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
        description="A website where users can see the all the Formula 1 race results for a given year for both drivers' and constructors' championships. It also has a graph that tracks the championship battle over the course of the year."
        techs={["React", "Redux", "SCSS", "React Router", "CRA", "Typescript"]}
        link="https://playout.krastan.com"
      />
      <ProjectFigure
        image={hitomezashiImg}
        title="Hitomezashi"
        description="A website where users can create custom hitmezashi stitch patterns."
        techs={["HTML", "CSS", "Typescript", "Canvas"]}
        link="https://hitomezashi.krastan.com"
      />
      <ProjectFigure
        image={websiteExampleImg}
        title={"This Website"}
        description={`This is my personal website where people can learn about me,
         my work, and my projects.`}
        techs={["React", "TailwindCSS", "Typescript", "Vite"]}
        link={"https://github.com/KrastanD/KrastanD.github.io"}
      />
      <ProjectFigure
        image={finesseNationImg}
        title={"Finesse Nation"}
        description={`A mobile app where users can make
              posts about free food and giveaways on campus. Posts can include a picture,
              location, date and can even be commented and voted on.`}
        techs={["Flutter", "Express", "MongoDB"]}
        link={"https://www.github.com/FinesseNation"}
      />
      <ProjectFigure
        image={mementoImg}
        title={"Memento"}
        description={`An app where users can make posts about what they have done and set the date, time, and
              location.`}
        techs={[
          "React Native",
          "React Navigation",
          "Expo",
          "Express",
          "MongoDB",
        ]}
        link={"https://www.github.com/KrastanD/Memento"}
      />
      <ProjectFigure
        image={lyricGeniusImg}
        title={"Lyric Genius"}
        description={`An app that displays live lyrics using the Spotify Api to see what
      song the user is currently playing and web scrapes genius.com to
      get the lyrics for it.`}
        techs={["React Native", "Expo"]}
        link={"https://www.github.com/KrastanD/LyricGenius"}
      />
      <ProjectFigure
        image={githubAppExampleImg}
        title="Github App"
        description={`An app which displays 
        profile and repo information for users and their following/followers using Github's API.`}
        techs={["React Native", "React Navigation", "GraphQL", "Expo"]}
        link="https://github.com/KrastanD/GitHubApp"
      />
    </div>
  );
};

export default Projects;
