import photoAtUIUC from "../assets/smallerPhotoAtUIUC.jpg";
import resume from "../assets/Krastanresume-1220.pdf";
import { milisecondsToYears } from "../utils/utls";
import GitHubButton from "react-github-btn";

const AboutMe = () => {
  const bday = new Date("April 9, 1998");
  const age = milisecondsToYears(new Date().getTime() - bday.getTime());
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 text-gray-300">
      <p>
        <strong>Name: </strong>
        Krastan Dimitrov
        <br />
        <br />
        <strong>Age: </strong>
        {age} years old <br />
        <br />
        <strong>Resume: </strong>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="px-3 mx-1 rounded-md border-2 border-black bg-gray-50 hover:bg-gray-100 text-black"
        >
          View
        </a>
        <a
          href={resume}
          download="KrastanResume"
          className="px-3 rounded-md border-2 border-black bg-gray-50 hover:bg-gray-100 text-black"
        >
          Download
        </a>
        <br />
        <br />
        <strong>Bio: </strong>I am a software engineer and a curious person by
        heart. Learning and relearning things is part of the trade and I am
        lucky to find it enjoyable. However, it is making a good product that
        drives me. Creating a product that users love, find useful, and pleasant
        to use gives me great satisfaction. I strive to write readable and
        maintainable code. Clean code allows me to make make bugfixes and
        improvements to the product days, months, years in the future with
        minimal time spent trying to read and understand the code.
        <br />
        <br />
        <strong>Hobbies: </strong>
        running, reading, longboarding, hiking, coding <br />
        <br />
        <GitHubButton href="https://github.com/KrastanD">
          Follow @KrastanD
        </GitHubButton>
      </p>
      <img
        src={photoAtUIUC}
        alt="Standing in front of Altgeld"
        className="rounded"
      />
    </div>
  );
};

export default AboutMe;
