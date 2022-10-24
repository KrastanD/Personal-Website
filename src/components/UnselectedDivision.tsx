import { Divisions } from "../types";

const UnselectedDivision = ({ division }: { division: Divisions }) => {
  return (
    <p className="text-2xl md:text-xl lg:text-2xl text-center md:pt-6 text-gray-300">
      {division}
    </p>
  );
};

export default UnselectedDivision;
