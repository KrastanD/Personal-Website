type WorkCardProps = {
  title: string;
  years: string;
  position: string;
  children?: React.ReactNode;
};

const WorkCard = ({ title, years, position, children }: WorkCardProps) => {
  const titleStyle = children ? "mb-3" : undefined;
  return (
    <div className="flex flex-col lg:flex-row bg-darkGunmetal-600 my-3 rounded text-darkGunmetal-200 w-full self-center items-center">
      <div className="p-4 w-full">
        <div className={titleStyle}>
          <p className="text-center text-2xl font-bold">
            {position} @ {title}
          </p>
          <p className="text-center text-xl">{years}</p>
        </div>
        <ul className="list-disc pl-4">{children}</ul>
      </div>
    </div>
  );
};

export const WorkListItem = ({ children }: { children: string }) => {
  return <li className="pb-2">{children}</li>;
};

export default WorkCard;
