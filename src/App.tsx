import { useState } from "react";

import { Division } from "./components/Division";
import { DivisionBoiler } from "./components/DivisionBoiler";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Title from "./components/Title";
import { Divisions } from "./types";
import TechsBackground from "./components/TechsBackground";

function App() {
  const [selected, setSelected] = useState(Divisions.Title);

  const handleClick = (divisionName: Divisions) => {
    setSelected(divisionName);
  };
  const md = window.screen.width >= 768;

  return (
    <div
      className={`flex flex-col ${
        md ? "min-h-screen" : "fixed h-full"
      } md:flex-row font-sans`}
    >
      <Division
        title={Divisions.About_Me}
        selected={selected}
        handleClick={handleClick}
      >
        <DivisionBoiler
          selected={selected}
          division={Divisions.About_Me}
          bgColor="bg-brand1"
        >
          <AboutMe />
        </DivisionBoiler>
      </Division>
      <Division
        title={Divisions.Education}
        selected={selected}
        handleClick={handleClick}
      >
        <DivisionBoiler
          selected={selected}
          division={Divisions.Education}
          bgColor="bg-brand2"
        >
          <Education />
        </DivisionBoiler>
      </Division>
      <Division
        title={Divisions.Title}
        selected={selected}
        handleClick={handleClick}
      >
        <DivisionBoiler
          selected={selected}
          division={Divisions.Title}
          bgColor="bg-brand3"
          noTitle
        >
          <Title />
          <TechsBackground />
        </DivisionBoiler>
      </Division>
      <Division
        title={Divisions.Work}
        selected={selected}
        handleClick={handleClick}
      >
        <DivisionBoiler
          selected={selected}
          division={Divisions.Work}
          bgColor="bg-brand2"
        >
          <Work />
        </DivisionBoiler>
      </Division>
      <Division
        title={Divisions.Projects}
        selected={selected}
        handleClick={handleClick}
      >
        <DivisionBoiler
          selected={selected}
          division={Divisions.Projects}
          bgColor="bg-brand1"
        >
          <Projects />
        </DivisionBoiler>
      </Division>
    </div>
  );
}

export default App;
