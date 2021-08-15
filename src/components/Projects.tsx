import finesseNationImg from "../assets/FinesseNationExample2.jpg";
import mementoImg from "../assets/MementoExample.jpg";
import lyricGeniusImg from "../assets/LyricGeniusExample.jpg";
import websiteExampleImg from "../assets/websiteExample.png";
import githubAppExampleImg from "../assets/GithubAppExample.jpg";
import iTrustImage from "../assets/itrustExample.jpg";
import ProjectFigure from "./ProjectFigure";

const Projects = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3">
      <ProjectFigure
        image={finesseNationImg}
        title={"Finesse Nation"}
        description={`An app written in Flutter and Node.js and MongoDB. Users can make
              posts about free things on campus. Posts can include a picture,
              location, and date and can be commented and voted on.`}
      />
      <ProjectFigure
        image={mementoImg}
        title={"Memento"}
        description={`An app written in React Native and Node.js and MongoDB. Users can
              make posts about what they have done and set the date, time, and
              location.`}
      />
      <ProjectFigure
        image={lyricGeniusImg}
        title={"Lyric Genius"}
        description={`An app that displays live lyrics using the Spotify Api to see what
      song the user is currently playing and web scrapes genius.com to
      get the lyrics for it.`}
      />
      <ProjectFigure
        image={websiteExampleImg}
        title={"This Website"}
        description={`This is my personal website where people can learn about me and
         my work/projects. It was written with ReactJS, TailwindCSS and Typescript.`}
      />
      <ProjectFigure
        image={githubAppExampleImg}
        title="Github App"
        description={`An app written in React Native which displays 
        profile and repo information for users and their following/followers.
         It makes use of Github's GraphQL API.`}
      />
      <ProjectFigure
        image={iTrustImage}
        title="iTrust"
        description={`A medical application that allows patients and doctors to communicate
          and store information like records and prescriptions. It is written in
          JSP, Java, and MySQL.`}
      />
    </div>
  );
};

export default Projects;
