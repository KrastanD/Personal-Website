import WorkCard, { WorkListItem } from "./WorkCard";
import resume from "../assets/Krastan-resume-1022-v1.pdf";

const Work = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-300 m-3 p-4 rounded text-black flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center mb-2">
          Want to be next?
        </h2>
        <div className=" flex flex-col sm:flex-row">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 mx-1 my-1 rounded-md border-1 shadow-md bg-gray-50 hover:bg-gray-100 text-black text-center"
          >
            View Resume
          </a>
          <a
            href={resume}
            download="KrastanDimitrovResume"
            className="px-3 py-2 mx-1 my-1 rounded-md border-1 shadow-md bg-gray-50 hover:bg-gray-100 text-black text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
      <WorkCard
        title="FuboTV"
        years="March 2021 - November 2022"
        position="Software Engineer"
      >
        <WorkListItem text="Architected and lead development of the FuboTV/Sportsbook API service integration with Sportsbook React Native mobile application to provide product with key market differentiator" />
        <WorkListItem text="Designed and developed streamlined web User Landing Experience for Sportsbook using NextJS and TailwindCSS to increase user conversion and decrease CAC" />
        <WorkListItem text="Migrated legacy React Native codebase to newer React Native framework while adding developer-friendly features like Flipper, Apple Silicon support, Hermes and fixing third-party dependency/resolution conflicts" />
        <WorkListItem text="Implemented private library to modularize and decouple complex authentication flow logic from web and mobile clients while streamlining user experience to comply with strict regulatory constraints" />
        <WorkListItem text="Added deep linking (Universal Links and App Links), deferred deep linking, and analytics to mobile app to improve authentication flow conversion and track attribution through Appsflyer" />
        <WorkListItem text="Introduced unit/integration testing using Jest/React Native Test Library to private libraries and adopted Storybook for UI design and stakeholder validation of UI components" />
        <WorkListItem text="Mentored developers in React Native development and tooling by pair programming to increase team velocity and raise code quality" />
        <WorkListItem text="Containerized React Native application using Docker to improve build consistency and improve developer experience" />
        <WorkListItem text="Lead Scrum rituals and demos in the agile process to provide key stakeholders with an overview of the teams work in an easily comprehensible way to showcase business value" />
      </WorkCard>
      <WorkCard
        title="Vigtory"
        years="September 2020 - March 2021"
        position="Mobile Software Engineer"
      >
        <WorkListItem text="Integrated a tabbed feed of expert content from a third party provider using a REST API enabling users to view articles in app to increase app use duration and user retention" />
        <WorkListItem text="Refactored multiple bet slip components using techniques like extracting duplicated code, breaking up large components into modular, maintainable ones, and simplifying conditional expressions" />
        <WorkListItem text="Increased UI consistency by consolidating five different tab React components into one" />
        <WorkListItem text="Overhauled and upgraded in-app navigation to React Navigation 5 for a more natural and pleasant user experience" />
      </WorkCard>
      <WorkCard
        title="Ecolab"
        years="June 2019 - August 2019"
        position="Developer Intern"
      >
        <WorkListItem
          text="Effectively worked in a team of 6 using Scrum to design, develop and deploy a dashboard in ASP.NET to display
over-shipment of fixed contracts on three levels, saving an estimated $10 million loss of revenue in operating
income"
        />
        <WorkListItem
          text="Delivered value by increasing visibility of shipment data, reducing manual effort to track lost revenue, and
predicting shipment ahead of time"
        />
        <WorkListItem
          text="Acquired an understanding for the importance of teamwork with strong leadership at all levels of the corporate
structure through meetings with the company’s CEO during a team outing to St. Paul, MN"
        />
      </WorkCard>
    </div>
  );
};

export default Work;
