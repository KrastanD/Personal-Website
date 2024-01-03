import { DivisionName } from "../types";

const SelectedDivision = ({
  hasTitle,
  division,
  children,
}: {
  hasTitle: boolean;
  division: DivisionName;
  children: React.ReactNode;
}) => {
  return (
    <div className="p-8">
      {hasTitle && (
        <h1 className={`text-4xl text-center mb-6 text-gray-300`}>
          {division}
        </h1>
      )}
      {children}
    </div>
  );
};

export default SelectedDivision;
