import { DivisionName } from "../types";

interface DivisionProps {
  children: React.ReactNode | React.ReactNode[];
  selected: string;
  title: DivisionName;
  handleClick: (divisionName: DivisionName) => void;
}
const md = window.screen.width >= 768;
const smallWidth = `${
  md ? "w-1/10" : "h-1/20"
} transition-height md:transition-width md:duration-500 ease-in-out duration-500
`;
const largeWidth = `${
  md ? "w-3/5" : "h-4/5"
} md:overflow-y-hidden md:h-auto overflow-y-scroll transition-height md:transition-width md:duration-500 duration-500 ease-in-out`;
export const Division = ({
  selected,
  handleClick,
  title,
  children,
}: DivisionProps) => {
  if (selected === title) {
    return <div className={largeWidth}>{children}</div>;
  }
  return (
    <div
      className={smallWidth}
      onClick={() => handleClick(title)}
      role="button"
      onKeyDown={() => handleClick(title)}
      tabIndex={0}
    >
      {children}
    </div>
  );
};
