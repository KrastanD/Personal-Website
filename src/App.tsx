import { useState } from "react";
import { Column } from "./Column";

enum Columns {
  About_Me = "About Me",
  Education = "Education",
  Title = "Title",
  Work = "Work",
  Projects = "Projects",
}

function App() {
  const [selected, setSelected] = useState("Title");

  const handleClick = (columnName: string) => {
    setSelected(columnName);
  };

  return (
    <div className="flex flex-row">
      <Column
        title={Columns.About_Me}
        selected={selected}
        handleClick={handleClick}
      >
        <div className="h-screen p-6 mx-auto bg-indigo-100 divide-y divide-gray-900">
          {selected === Columns.About_Me ? (
            <>
              <h1 className="text-2xl text-center">{Columns.About_Me}</h1>
              <h3 className="text-xl text-center mt-4">Hobbies</h3>
            </>
          ) : (
            <p className="text-2xl text-center">{Columns.About_Me}</p>
          )}
        </div>
      </Column>
      <Column
        title={Columns.Education}
        selected={selected}
        handleClick={handleClick}
      >
        <div className="h-screen p-6 mx-auto bg-yellow-100 divide-y divide-gray-900">
          {selected === Columns.Education ? (
            <>
              <h1 className="text-2xl text-center">{Columns.Education}</h1>
              <h3 className="text-xl text-center mt-4">
                University of Illinois
              </h3>
            </>
          ) : (
            <p className="text-2xl text-center">{Columns.Education}</p>
          )}
        </div>
      </Column>
      <Column
        title={Columns.Title}
        selected={selected}
        handleClick={handleClick}
      >
        <div className="h-screen p-6 mx-auto bg-green-100 divide-y divide-gray-900">
          {selected === Columns.Title ? (
            <>
              <h1 className="text-2xl text-center">{Columns.Title}</h1>
              <h3 className="text-xl text-center mt-4">a software engineer</h3>
            </>
          ) : (
            <p className="text-2xl text-center">{Columns.Title}</p>
          )}
        </div>
      </Column>
      <Column
        title={Columns.Work}
        selected={selected}
        handleClick={handleClick}
      >
        <div className="h-screen p-6 mx-auto bg-purple-100 divide-y divide-gray-900">
          {selected === Columns.Work ? (
            <>
              <h1 className="text-2xl text-center">{Columns.Work}</h1>
              <h3 className="text-xl text-center mt-4">Fubo Gaming</h3>
            </>
          ) : (
            <p className="text-2xl text-center">{Columns.Work}</p>
          )}
        </div>
      </Column>
      <Column
        title={Columns.Projects}
        selected={selected}
        handleClick={handleClick}
      >
        <div className="h-screen p-6 mx-auto bg-pink-100 divide-y divide-gray-900">
          {selected === Columns.Projects ? (
            <>
              <h1 className="text-2xl text-center">{Columns.Projects}</h1>
              <h3 className="text-xl text-center mt-4">To Grow</h3>
            </>
          ) : (
            <p className="text-2xl text-center">{Columns.Projects}</p>
          )}
        </div>
      </Column>
    </div>
  );
}

export default App;
