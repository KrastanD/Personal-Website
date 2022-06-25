import { Divisions } from "../App";

interface DivisionBoilerProps {
  selected: Divisions;
  division: Divisions;
  bgColor: string;
  noTitle?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}
export const DivisionBoiler = (props: DivisionBoilerProps) => {
  const { selected, division, bgColor, noTitle, children } = props;
  return (
    <div className={`min-h-full mx-auto ${bgColor}`}>
      {selected === division ? (
        <div className="p-6">
          {!noTitle && (
            <h1
              className={`${
                selected ? "text-4xl" : "text-2xl"
              } text-center mb-6`}
            >
              {division}
            </h1>
          )}
          {children}
        </div>
      ) : (
        <p className="text-2xl md:text-xl lg:text-2xl text-center md:pt-6">
          {division}
        </p>
      )}
    </div>
  );
};
