import WorkCard, { WorkListItem } from "./WorkCard";
import WorkPromo from "./WorkPromo";

const Work = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col max-w-2xl">
        <WorkPromo />
        <div className="flex flex-col ">
          <WorkCard
            title="SpotOn"
            years="January 2023 - Current"
            position="Senior Software Engineer"
          />
          <WorkCard
            title="FuboTV"
            years="March 2021 - November 2022"
            position="Software Engineer"
          >
            <WorkListItem>
              Architected and lead development of the FuboTV/Sportsbook API
              service integration with the Sportsbook React Native mobile
              application to provide product with key market differentiator
              (Typescript, GraphQL, Server-Sent Events)
            </WorkListItem>
            <WorkListItem>
              Designed and developed streamlined web User Landing Experience for
              Fubo Sportsbook using NextJS and TailwindCSS to increase user
              registrations and decrease customer acquisition costs
            </WorkListItem>
            <WorkListItem>
              Migrated legacy React Native codebase to latest React Native
              framework while adding developer-friendly features like Flipper,
              Apple Silicon support, Hermes and fixing third-party
              dependency/resolution conflicts
            </WorkListItem>
            <WorkListItem>
              Implemented private library to modularize and decouple complex
              authentication flow logic from web and mobile clients while
              streamlining user experience to comply with strict regulatory
              constraints (NodeJS, NPM)
            </WorkListItem>
            <WorkListItem>
              Added deep linking (Universal Links and App Links), deferred deep
              linking, and analytics to the Fubo Sportsbook mobile app to
              improve authentication flow conversion and track attribution
              through Appsflyer
            </WorkListItem>
            <WorkListItem>
              Introduced unit/integration testing using Jest/React Native Test
              Library to private libraries and adopted Storybook for UI design
              and stakeholder validation of UI components
            </WorkListItem>
            <WorkListItem>
              Containerized React Native application using Docker to improve
              build consistency and elevate developer experience
            </WorkListItem>
            <WorkListItem>
              Mentored engineers in React Native development and tooling through
              pair programming to increase team velocity and raise code quality
            </WorkListItem>
            <WorkListItem>
              Lead Scrum rituals and demos in the agile process to provide key
              stakeholders with an overview of the team’s work in an easily
              comprehensible way to showcase business value
            </WorkListItem>
          </WorkCard>
          <WorkCard
            title="Vigtory"
            years="September 2020 - March 2021"
            position="Mobile Software Engineer"
          >
            <WorkListItem>
              Integrated a tabbed feed of expert content from a third party
              provider using a REST API enabling users to view articles in the
              Vigtory Sportsbook mobile app to increase app use duration and
              user retention
            </WorkListItem>
            <WorkListItem>
              Refactored multiple bet slip components using techniques like
              extracting duplicated code, breaking up large components into
              modular, maintainable ones, and simplifying conditional
              expressions
            </WorkListItem>
            <WorkListItem>
              Strengthened UI consistency by building one universal component to
              replace five different React tab components
            </WorkListItem>
            <WorkListItem>
              Overhauled and upgraded in-app navigation to React Navigation 5
              for a more natural and pleasant user experience
            </WorkListItem>
          </WorkCard>
          <WorkCard
            title="Ecolab"
            years="June 2019 - August 2019"
            position="Developer Intern"
          >
            <WorkListItem>
              Effectively worked in a team of 6 using Scrum to design, develop
              and deploy a dashboard in ASP.NET to display over-shipment of
              fixed contracts on three levels, saving an estimated $10 million
              loss of revenue in operating income
            </WorkListItem>
            <WorkListItem>
              Delivered value by increasing visibility of shipment data,
              reducing manual effort to track lost revenue, and predicting
              shipment ahead of time
            </WorkListItem>
            <WorkListItem>
              Acquired an understanding for the importance of teamwork with
              strong leadership at all levels of the corporate structure through
              meetings with the company’s CEO during a team outing to St. Paul,
              MN
            </WorkListItem>
          </WorkCard>
        </div>
      </div>
    </div>
  );
};

export default Work;
