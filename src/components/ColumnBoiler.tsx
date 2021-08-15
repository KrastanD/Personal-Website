import { Columns } from "../App";

interface ColumnBoilerProps {
  selected: Columns;
  column: Columns;
  bgColor: string;
  noTitle?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}
export const ColumnBoiler = (props: ColumnBoilerProps) => {
  const { selected, column, bgColor, noTitle, children } = props;
  return (
    <div className={`min-h-full mx-auto ${bgColor}`}>
      {selected === column ? (
        <div className="p-6">
          {!noTitle && (
            <h1
              className={`${
                selected ? "text-4xl" : "text-2xl"
              } text-center mb-6`}
            >
              {column}
            </h1>
          )}
          {children}
        </div>
      ) : (
        <p className="text-2xl md:text-xl lg:text-2xl text-center md:pt-6">
          {column}
        </p>
      )}
    </div>
  );
};
