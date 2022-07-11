import { useState } from "react";

import { Division } from "./components/Division";
import { DivisionBoiler } from "./components/DivisionBoiler";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Title from "./components/Title";
import { Divisions } from "./types";

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
          bgColor="bg-indigo-100"
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
          bgColor="bg-yellow-100"
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
          bgColor="bg-homeImg"
          noTitle
        >
          <Title />
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
          bgColor="bg-purple-100"
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
          bgColor="bg-pink-100"
        >
          <Projects />
        </DivisionBoiler>
      </Division>
    </div>
  );
}

export default App;
