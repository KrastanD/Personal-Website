import React from "react";
import SelectedDivision from "./SelectedDivision";
import UnselectedDivision from "./UnselectedDivision";
import { Divisions } from "../types";

type DivisionBoilerProps = {
  selected: Divisions;
  division: Divisions;
  bgColor: string;
  noTitle?: boolean;
  children?: React.ReactNode | React.ReactNode[];
};
export const DivisionBoiler = ({
  selected,
  division,
  bgColor,
  noTitle,
  children,
}: DivisionBoilerProps) => {
  const isSelected = selected === division;
  const hasTitle = !noTitle;

  return (
    <div className={`relative min-h-full mx-auto ${bgColor}`}>
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
