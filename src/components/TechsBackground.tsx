import { TechData, TechDatum } from "../utils/techs";
import { shuffleArray } from "../utils/utils";

type TechType = {
  id: number;
  data: TechDatum;
};

const TechBox = ({ tech }: { tech: TechDatum }) => {
  return (
    <h4
      className={`p-24 pl-[${Math.floor(Math.random() * 40) + 10}px] pr-[${
        Math.floor(Math.random() * 40) + 10
      }px`}
    >
      {tech.name}
    </h4>
  );
};

function TechsBackground() {
  const techsArray: TechType[] = [];
  for (let i = 0; i < 5; i++) {
    shuffleArray(Object.values(TechData)).forEach((techDatum: TechDatum) => {
      techsArray.push({ id: i, data: techDatum });
    });
  }

  return (
    <div className="">
      <div className="absolute top-0 animate-marquee flex flex-row flex-wrap justify-around">
        {techsArray.map((tech) => (
          <TechBox tech={tech.data} />
        ))}
      </div>
      <div className="absolute top-0 animate-marquee2 flex flex-row flex-wrap justify-around">
        {techsArray.map((tech) => (
          <TechBox key={`${tech.data.name}${tech.id}`} tech={tech.data} />
        ))}
      </div>
    </div>
  );
}

export default TechsBackground;
