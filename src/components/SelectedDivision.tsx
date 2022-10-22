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
    <>
      {hasTitle && (
        <h1 className={`text-4xl text-center mb-6 pt-6`}>{division}</h1>
      )}
      {children}
    </>
  );
};

export default SelectedDivision;
