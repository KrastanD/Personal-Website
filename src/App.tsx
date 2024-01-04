import { useState } from "react";

import { Division } from "./components/Division";
import { DivisionBoiler } from "./components/DivisionBoiler";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Title from "./components/Title";
import { DivisionName } from "./types";

function App() {
  const [selected, setSelected] = useState(DivisionName.Title);

  const handleClick = (divisionName: DivisionName) => {
    setSelected(divisionName);
  };
  const md = window.screen.width >= 768;

  return (
    <div
      className={`flex flex-col ${
        md ? "min-h-screen" : "fixed h-full w-full"
      } md:flex-row font-sans`}
    >
      <Division
        title={DivisionName.About_Me}
        selected={selected}
        handleClick={handleClick}
      >
        <DivisionBoiler
          selected={selected}
          division={DivisionName.About_Me}
          bgColor="bg-black"
        >
          <AboutMe />
        </DivisionBoiler>
      </Division>
      <Division
        title={DivisionName.Education}
        selected={selected}
        handleClick={handleClick}
      >
        <DivisionBoiler
          selected={selected}
          division={DivisionName.Education}
          bgColor="bg-charlestonGreen-700"
        >
          <Education />
        </DivisionBoiler>
      </Division>
      <Division
        title={DivisionName.Title}
        selected={selected}
        handleClick={handleClick}
      >
        <DivisionBoiler
          selected={selected}
          division={DivisionName.Title}
          bgColor="bg-homeImg"
          noTitle
        >
          <Title />
        </DivisionBoiler>
      </Division>
      <Division
        title={DivisionName.Work}
        selected={selected}
        handleClick={handleClick}
      >
        <DivisionBoiler
          selected={selected}
          division={DivisionName.Work}
          bgColor="bg-darkGunmetal-700"
        >
          <Work />
        </DivisionBoiler>
      </Division>
      <Division
        title={DivisionName.Projects}
        selected={selected}
        handleClick={handleClick}
      >
        <DivisionBoiler
          selected={selected}
          division={DivisionName.Projects}
          bgColor="bg-black"
        >
          <Projects />
        </DivisionBoiler>
      </Division>
    </div>
  );
}

export default App;
