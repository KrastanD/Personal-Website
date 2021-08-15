import { Columns } from "../App";

interface ColumnProps {
  children: React.ReactNode | React.ReactNode[];
  selected: string;
  title: Columns;
  handleClick: (columnName: Columns) => void;
}
const md = window.screen.width >= 768;
const smallWidth = `${md ? "w-1/10" : "h-1/20"}`;
const largeWidth = `${
  md ? "w-3/5" : "h-4/5"
} md:overflow-y-hidden md:h-auto overflow-y-scroll`;
export const Column = (props: ColumnProps): React.ReactElement => {
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
