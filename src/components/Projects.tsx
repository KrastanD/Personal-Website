import finesseNationImg from "../assets/FinesseNationExample2.jpg";
import mementoImg from "../assets/MementoExample.jpg";
import lyricGeniusImg from "../assets/LyricGeniusExample.jpg";
import websiteExampleImg from "../assets/websiteExample.png";
import githubAppExampleImg from "../assets/GithubAppExample.jpg";
import iTrustImage from "../assets/itrustExample.jpg";

const Projects = () => {
  return (
    <div className="grid grid-cols-3">
      <figure id="finesseNation">
        <a
          href="https://www.github.com/FinesseNation"
          target="_blank"
          rel="noreferrer"
        >
          <img src={finesseNationImg} alt="Screenshot of Finesse Nation" />
          <figcaption>
            <h3>Finesse Nation</h3>
            <p>
              App written in Flutter and Node.js and MongoDB. Users can make
              posts about free things on campus. Posts can include a picture,
              location, and date and can be commented and voted on.
            </p>
          </figcaption>
        </a>
      </figure>
      <figure id="memento">
        <a
          href="https://www.github.com/KrastanD/Memento"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mementoImg} alt="Screenshot of Memento" />
          <figcaption>
            <h3>Memento</h3>
            <p>
              App written in React Native and Node.js and MongoDB. Users can
              make posts about what they have done and set the date, time, and
              location.
            </p>
          </figcaption>
        </a>
      </figure>
      <figure id="lyricGenius">
        <a
          href="https://www.github.com/KrastanD/LyricGenius"
          target="_blank"
          rel="noreferrer"
        >
          <img src={lyricGeniusImg} alt="Screenshot of Lyric Genius" />
          <figcaption>
            <h3>LyricGenius</h3>
            <p>
              App that displays live lyrics using the Spotify Api to see what
              song the user is currently playing and web scrapes genius.com to
              get the lyrics for it.
            </p>
          </figcaption>
        </a>
      </figure>
      <figure id="thisWebsite">
        <a
          href="https://github.com/KrastanD/KrastanD.github.io"
          target="_blank"
          rel="noreferrer"
        >
          <img src={websiteExampleImg} alt="Screenshot of this website" />

          <figcaption>
            <h3>This Website</h3>
            <p>
              This website is written in HTML, CSS, and JS. The javascript is
              from fullpage.js which takes care of the navigation and scrolling
              between sections.
            </p>
          </figcaption>
        </a>
      </figure>
      <figure id="githubApp">
        <a
          href="https://github.com/KrastanD/GitHubApp"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubAppExampleImg} alt="Screenshot of Github App" />
          <figcaption>
            <h3>Github App</h3>
            <p>
              An app written in React Native which displays profile and repo
              information for users and their following/followers. It makes use
              of Github's GraphQL API.
            </p>
          </figcaption>
        </a>
      </figure>
      <figure id="iTrust">
        <img src={iTrustImage} alt="Screenshot of iTrust" />
        <figcaption>
          <h3>iTrust</h3>
          <p>
            Medical application that allows patients and doctors to communicate
            and keep information like records and prescriptions. It is written
            in JSP, Java, and MySQL.
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Projects;
