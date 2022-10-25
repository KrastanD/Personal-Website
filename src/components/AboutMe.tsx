import photoAtUIUC from "../assets/smallerPhotoAtUIUC.jpg";
import GitHubButton from "react-github-btn";
import LinkedInButton from "./LinkedInButton";
import AboutMeCard from "./AboutMeCard";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 text-gray-300">
      <div>
        <AboutMeCard
          text="I am a software engineer and a curious person by heart. Learning
        and relearning things is part of the trade and I am lucky to find it
        enjoyable."
        />
        <AboutMeCard
          text="Computer Science and Tech are an endless universe of 
        creative applications. I love exploring it only to learn every day 
        how much more there is to see and learn."
        />
        <AboutMeCard
          text="Making a good product is what drives me. Creating
        a product that users love, find useful, and pleasant to use gives me
        great satisfaction."
        />
        <AboutMeCard
          text="I strive to write readable and maintainable code.
        Clean code allows me to make make bugfixes and improvements to the
        product days, months, years in the future with minimal time spent trying
        to read and understand the code."
        />
        <AboutMeCard
          text="Some of my hobbies include running,
        reading, longboarding, hiking, video games, volleyball, and coding. Whether indoors or outdoors, 
        I always have something to do."
        />
        <div className="flex flex-row justify-between">
          <GitHubButton href="https://github.com/KrastanD">
            Follow @KrastanD
          </GitHubButton>
          <LinkedInButton href="https://linkedin.com/in/krastan-dimitrov">
            Connect with LinkedIn
          </LinkedInButton>
        </div>
      </div>
      <img
        src={photoAtUIUC}
        alt="Standing in front of Altgeld"
        className="rounded"
      />
    </div>
  );
};

export default AboutMe;
