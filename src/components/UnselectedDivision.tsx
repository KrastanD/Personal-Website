import { DivisionName } from "../types";

const UnselectedDivision = ({ division }: { division: DivisionName }) => {
  return (
    <p className="text-2xl md:text-xl lg:text-2xl text-center md:pt-6 text-gray-300">
      {division}
    </p>
  );
};

export default UnselectedDivision;
