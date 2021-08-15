import { useState } from "react";
import { Column } from "./components/Column";
import { ColumnBoiler } from "./components/ColumnBoiler";

import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Title from "./components/Title";

export enum Columns {
  About_Me = "About Me",
  Education = "Education",
  Title = "Krastan Dimitrov",
  Work = "Work",
  Projects = "Projects",
}

function App() {
  const [selected, setSelected] = useState(Columns.Title);

  const handleClick = (columnName: Columns) => {
    setSelected(columnName);
  };

  return (
    <div className="flex flex-row min-h-screen font-sans">
      <Column
        title={Columns.About_Me}
        selected={selected}
        handleClick={handleClick}
      >
        <ColumnBoiler
          selected={selected}
          column={Columns.About_Me}
          bgColor="bg-indigo-100"
        >
          <AboutMe />
        </ColumnBoiler>
      </Column>
      <Column
        title={Columns.Education}
        selected={selected}
        handleClick={handleClick}
      >
        <ColumnBoiler
          selected={selected}
          column={Columns.Education}
          bgColor="bg-yellow-100"
        >
          <Education />
        </ColumnBoiler>
      </Column>
      <Column
        title={Columns.Title}
        selected={selected}
        handleClick={handleClick}
      >
        <ColumnBoiler
          selected={selected}
          column={Columns.Title}
          bgColor="bg-homeImg"
          noTitle
        >
          <Title />
        </ColumnBoiler>
      </Column>
      <Column
        title={Columns.Work}
        selected={selected}
        handleClick={handleClick}
      >
        <ColumnBoiler
          selected={selected}
          column={Columns.Work}
          bgColor="bg-purple-100"
        >
          <Work />
        </ColumnBoiler>
      </Column>
      <Column
        title={Columns.Projects}
        selected={selected}
        handleClick={handleClick}
      >
        <ColumnBoiler
          selected={selected}
          column={Columns.Projects}
          bgColor="bg-pink-100"
        >
          <Projects />
        </ColumnBoiler>
      </Column>
    </div>
  );
}

export default App;
