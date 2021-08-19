import photoAtUIUC from "../assets/smallerPhotoAtUIUC.jpg";
import resume from "../assets/Krastanresume-1220.pdf";
import { milisecondsToYears } from "../utls";
import GitHubButton from "react-github-btn";

const AboutMe = () => {
  const bday = new Date("April 9, 1998");
  const age = milisecondsToYears(new Date().getTime() - bday.getTime());
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <p>
        <strong>Name: </strong>
        Krastan Dimitrov
        <br />
        <br />
        <strong>Age: </strong>
        {age} years old <br />
        <br />
        <strong>Hobbies: </strong>
        running, reading, longboarding, hiking, coding <br />
        <br />
        <strong>Resume: </strong>
        <a href={resume} target="_blank" rel="noreferrer" className="underline">
          View
        </a>
        <span> </span>
        <a href={resume} download="KrastanResume" className="underline">
          Download
        </a>
        <br />
        <br />
        <strong>Bio: </strong>I am a software engineer and a curious individual
        by heart. Learning and relearning things is part of the trade and I am
        lucky to find it enjoyable. Finding bugs and performance improvements in
        the code drive me. It is like finding a hidden treasure every time.
        Testing and refactoring are also very important to me, because they make
        code better and life easier.
        <br />
        <br />
        <GitHubButton href="https://github.com/KrastanD">
          Follow @KrastanD
        </GitHubButton>
      </p>
      <img src={photoAtUIUC} alt="Standing in front of Altgeld" />
    </div>
  );
};

export default AboutMe;
