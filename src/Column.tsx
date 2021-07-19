import { Columns } from "./App";

interface ColumnProps {
  children: React.ReactNode | React.ReactNode[];
  selected: string;
  title: Columns;
  handleClick: (columnName: Columns) => void;
}
const smallWidth = "w-1/10";
const largeWidth = "w-3/5";

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
