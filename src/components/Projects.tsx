import ProjectFigure from "./ProjectFigure";

import finesseNationImg from "../assets/FinesseNationExample2.jpg";
import mementoImg from "../assets/MementoExample.jpg";
import lyricGeniusImg from "../assets/LyricGeniusExample.jpg";
import websiteExampleImg from "../assets/website-102322.png";
import githubAppExampleImg from "../assets/GithubAppExample.jpg";
import playoutImg from "../assets/PlayOut.png";
import hitomezashiImg from "../assets/Hitomezashi.png";
import dockerGoImg from "../assets/dockergo.webp";
import { Tech } from "../utils/techs";

const Projects = () => {
  return (
    <div className="flex flex-`row flex-wrap justify-center">
      <ProjectFigure
        image={dockerGoImg}
        title="Continuous Release Radar"
        description="A containerized Go service that copies the Release Radar on Spotify into a long term playlist. It uses a cron job to trigger itself every week and sends a push notification to the user's phone to approve the app with OAuth2 when needed."
        techs={[Tech.Go, Tech.Docker, Tech.OAuth2]}
        link="https://github.com/krastand/continuous-release-radar"
      />
      <ProjectFigure
        image={playoutImg}
        title="Play Out"
        description="A website where users can see the Formula 1 race results for the drivers' and constructors' championships. It includes a graph which tracks the championship battle over the course of the season."
        techs={[
          Tech.React,
          Tech.Redux,
          Tech.SASS,
          Tech.ReactRouter,
          Tech.CRA,
          Tech.Typescript,
        ]}
        link="https://playout.krastan.com"
      />
      <ProjectFigure
        image={hitomezashiImg}
        title="Hitomezashi"
        description="A website where users can create custom hitomezashi stitch patterns. 
        Includes options to change horizontal and vertical sequences, their colors and the 
        background color."
        techs={[Tech.HTML, Tech.CSS, Tech.Typescript, Tech.Canvas]}
        link="https://hitomezashi.krastan.com"
      />
      <ProjectFigure
        image={websiteExampleImg}
        title={"This Website"}
        description={`This is my personal website where people can learn about me,
         my work, and my projects.`}
        techs={[Tech.React, Tech.TailwindCSS, Tech.Typescript, Tech.Vite]}
        link={"https://github.com/KrastanD/KrastanD.github.io"}
      />
      <ProjectFigure
        image={lyricGeniusImg}
        title={"Lyric Genius"}
        description={`An app which displays live lyrics using the Spotify Api to see what
      song the user is currently playing and web scrapes genius.com to
      get the lyrics for it.`}
        techs={[Tech.ReactNative, Tech.Expo, Tech.OAuth2]}
        link={"https://www.github.com/KrastanD/LyricGenius"}
      />
      <ProjectFigure
        image={finesseNationImg}
        title={"Finesse Nation"}
        description={`A mobile app where users can make
              posts about free food and giveaways on campus. Posts can include a picture,
              location, date and can even be commented and voted on.`}
        techs={[Tech.Flutter, Tech.Express, Tech.MongoDB]}
        link={"https://www.github.com/FinesseNation"}
      />
      <ProjectFigure
        image={mementoImg}
        title={"Memento"}
        description={`An app where users can make posts about what they have done and set the date, time, and
              location.`}
        techs={[
          Tech.ReactNative,
          Tech.ReactNavigation,
          Tech.Expo,
          Tech.Express,
          Tech.MongoDB,
        ]}
        link={"https://www.github.com/KrastanD/Memento"}
      />
      <ProjectFigure
        image={githubAppExampleImg}
        title="Github App"
        description={`An app which displays 
        profile and repo information for users and their following/followers using Github's API.`}
        techs={[
          Tech.ReactNative,
          Tech.ReactNavigation,
          Tech.GraphQL,
          Tech.Expo,
        ]}
        link="https://github.com/KrastanD/GitHubApp"
      />
    </div>
  );
};

export default Projects;
