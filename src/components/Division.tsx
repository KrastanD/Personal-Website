import { Divisions } from "../App";

interface DivisionProps {
  children: React.ReactNode | React.ReactNode[];
  selected: string;
  title: Divisions;
  handleClick: (divisionName: Divisions) => void;
}
const md = window.screen.width >= 768;
const smallWidth = `${
  md ? "w-1/10" : "h-1/20"
} transition-gpu transition-height md:transition-width duration-250 ease-in-out
`;
const largeWidth = `${
  md ? "w-3/5" : "h-4/5"
} md:overflow-y-hidden md:h-auto overflow-y-scroll transition-gpu transition-height md:transition-width duration-250 ease-in-out`;
export const Division = (props: DivisionProps): React.ReactElement => {
  const { selected, handleClick, title } = props;

  return (
    <div
      className={selected === title ? largeWidth : smallWidth}
      onClick={() => handleClick(title)}
    >
      {props.children}
    </div>
  );
};