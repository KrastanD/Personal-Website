import { Divisions } from "../types";

const SelectedDivision = ({
  hasTitle,
  division,
  children,
}: {
  hasTitle: boolean;
  division: Divisions;
  children: React.ReactNode;
}) => {
  return (
    <div className="p-6">
      {hasTitle && <h1 className={`text-4xl text-center mb-6`}>{division}</h1>}
      {children}
    </div>
  );
};

export default SelectedDivision;
