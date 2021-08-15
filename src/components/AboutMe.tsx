import photoAtUIUC from "../assets/photoAtUIUC.jpg";
import resume from "../assets/Krastanresume-1220.pdf";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <p>
        <strong>Name: </strong>
        Krastan Dimitrov
        <br />
        <br />
        <strong>Age: </strong>
        22 years old <br />
        <br />
        <strong>Hobbies: </strong>
        running, reading, longboarding, hiking, coding <br />
        <br />
        <strong>Resume: </strong>
        <a href={resume} target="_blank" rel="noreferrer">
          View{" "}
        </a>
        <a href={resume} download="KrastanResume">
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
      </p>
      <img src={photoAtUIUC} alt="Standing in front of Altgeld" />
    </div>
  );
};

export default AboutMe;
