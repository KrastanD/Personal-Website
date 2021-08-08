import { Columns } from "../App";

interface ColumnBoilerProps {
  selected: Columns;
  column: Columns;
  bgColor: string;
  children?: React.ReactNode | React.ReactNode[];
}
export const ColumnBoiler = (props: ColumnBoilerProps) => {
  const { selected, column, bgColor, children } = props;
  return (
    <div className={`min-h-full mx-auto ${bgColor}`}>
      {selected === column ? (
        <div className="p-6">
          <h1 className="text-2xl text-center">{column}</h1>
          {children}
        </div>
      ) : (
        <p className="text-2xl text-center pt-6">{column}</p>
      )}
    </div>
  );
};
