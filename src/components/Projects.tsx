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
        image={finesseNationImg}
        title={"Finesse Nation"}
        description={`An app written in Flutter, Node.js with Express, and MongoDB. Users can make
              posts about free things on campus. Posts can include a picture,
              location, and date and can be commented and voted on.`}
        link={"https://www.github.com/FinesseNation"}
      />
      <ProjectFigure
        image={mementoImg}
        title={"Memento"}
        description={`An app written in React Native, Node.js with Express, and MongoDB. Users can
              make posts about what they have done and set the date, time, and
              location.`}
        link={"https://www.github.com/KrastanD/Memento"}
      />
      <ProjectFigure
        image={lyricGeniusImg}
        title={"Lyric Genius"}
        description={`An app that displays live lyrics using the Spotify Api to see what
      song the user is currently playing and web scrapes genius.com to
      get the lyrics for it.`}
        link={"https://www.github.com/KrastanD/LyricGenius"}
      />
      <ProjectFigure
        image={websiteExampleImg}
        title={"This Website"}
        description={`This is my personal website where people can learn about me and
         my work/projects. It was written with ReactJS, TailwindCSS and Typescript.`}
        link={"https://github.com/KrastanD/KrastanD.github.io"}
      />
      <ProjectFigure
        image={githubAppExampleImg}
        title="Github App"
        description={`An app written in React Native which displays 
        profile and repo information for users and their following/followers.
         It makes use of Github's GraphQL API.`}
        link="https://github.com/KrastanD/GitHubApp"
      />
      <ProjectFigure
        image={playoutImg}
        title="Play Out"
        description="A React website where users can see the all the Formula 1 race results for a given year for both drivers' and constructors' championships. It also has a graph that tracks the championship battle over the course of the year."
        link="https://playout.krastan.com"
      />
      <ProjectFigure
        image={hitomezashiImg}
        title="Hitomezashi"
        description="A vanilla html/css/js website where users can create custom hitmezashi stitch patterns"
        link="https://hitomezashi.krastan.com"
      />
    </div>
  );
};

export default Projects;
