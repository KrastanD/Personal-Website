import { useState } from "react";
import { Column } from "./components/Column";
import { ColumnBoiler } from "./components/ColumnBoiler";

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
    <div className="flex flex-row min-h-screen">
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
          <div>
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
              <a href="../assets/Krastanresume-1220.pdf">View</a>
              <a href="assets/Krastanresume-1220.pdf" download="KrastanResume">
                Download
              </a>
              <br />
              <br />
              <strong>Bio: </strong>I am a software engineer and a curious
              individual by heart. Learning and relearning things is part of the
              trade and I am lucky to find it enjoyable. Finding bugs and
              performance improvements in the code drive me. It is like finding
              a hidden treasure every time. Testing and refactoring are also
              very important to me, because they make code better and life
              easier.
            </p>
          </div>
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
          <div className="grid grid-cols-2 gap-6">
            <p>
              <strong>University of Illinois at Urbana-Champaign</strong>
              <br />
              2018-2020
            </p>
            <p>
              My alma mater. Of the 61 credits hours I took, 52 were computer
              science courses. I managed to get my degree in only two years with
              the help of my college and AP credits. I enjoyed my time there
              thoroughly and learned so much from the brilliant professors and
              fellow students. My focus was on Big Data, because I took courses
              about databases, artificial intelligence and machine learning. I
              took classes in many other fields though, as I love how broad
              computer science is and how much there is to learn.
            </p>
            <p>
              <strong>College of DuPage</strong>
              <br />
              2016-2018
            </p>
            <p>
              A community college in the suburbs of Chicago where I took the
              majority of my Gen-Eds and engineering requirements. I had to keep
              a 4.0 GPA prior to applying to UIUC while working 20 hours per
              week. I learned a lot about time management and how to get the
              most out of myself.
            </p>
            <p>
              <strong>Wheaton North High School</strong>
              <br />
              2012-2016
            </p>
            <p>
              My high school where I took my first computer science course and
              my love for programming began. I was also a four-year cross
              country and track and field runner.
            </p>
          </div>
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
          bgColor="bg-green-100"
        ></ColumnBoiler>
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
          <div className="grid grid-cols-2 gap-6">
            <p>
              <strong>Fubo Gaming</strong>
              <br />
              March 2021 - Current
            </p>
            <p>
              <strong>Software Engineer</strong>
              <br />
              Fubo Gaming is the sportsbook subsidiary of fuboTV. I am
              continuing my work from
            </p>
            <p>
              <strong>Vigtory</strong>
              <br />
              September 2020 - March 2021
            </p>
            <p>
              <strong>Mobile Software Engineer</strong>
              <br />
              Vigtory was a Chicago-based sportsbook where I worked on the
              Android and iOS app. The app is built with React Native and
              TypeScript and uses a GraphQL API. I am enjoying working in the
              fast-paced environment of a start-up where I am being challenged
              on a daily basis.
            </p>

            <p>
              <strong>Ecolab</strong>
              <br />
              June 2019 - August 2019
            </p>
            <p>
              <strong>Developer Intern</strong>
              <br />
              Ecolab was my first experience working in the corporate world. I
              learned a lot about collaborating with a team on a software
              solution. Working with a product manager, presenting and
              delivering the product was a valuable experience. My biggest
              challenges were dealing with changing requirements and importing
              the data we were given into a database. What I enjoyed the most
              was learning and applying new techniques to our project like MVC,
              authentication, and authorization.
            </p>
          </div>
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
        ></ColumnBoiler>
      </Column>
    </div>
  );
}

export default App;
