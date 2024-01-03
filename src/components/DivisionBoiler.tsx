import React from "react";
import SelectedDivision from "./SelectedDivision";
import UnselectedDivision from "./UnselectedDivision";
import { DivisionName } from "../types";

type DivisionBoilerProps = {
  selected: DivisionName;
  division: DivisionName;
  bgColor: string;
  noTitle?: boolean;
  children?: React.ReactNode;
};
export const DivisionBoiler = (props: DivisionBoilerProps) => {
  const { selected, division, bgColor, noTitle, children } = props;
  const isSelected = selected === division;
  const hasTitle = !noTitle;

  return (
    <div className={`min-h-full mx-auto bg-cover bg-center ${bgColor}`}>
      {isSelected ? (
        <SelectedDivision hasTitle={hasTitle} division={division}>
          {children}
        </SelectedDivision>
      ) : (
        <UnselectedDivision division={division} />
      )}
    </div>
  );
};
