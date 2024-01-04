import { DivisionName } from "../types";

const UnselectedDivision = ({ division }: { division: DivisionName }) => {
  let paragraphStyle =
    "text-2xl md:text-xl lg:text-2xl text-center md:pt-6 text-gray-300";
  if (division === DivisionName.Title) {
    paragraphStyle += " font-lobster";
  }
  return <p className={paragraphStyle}>{division}</p>;
};

export default UnselectedDivision;
