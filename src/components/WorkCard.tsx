type WorkCardProps = {
  title: string;
  years: string;
  position: string;
  children?: React.ReactNode;
};

const WorkCard = ({ title, years, position, children }: WorkCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-300 my-3 rounded text-black w-full self-center items-center">
      <div className="p-4 w-full">
        <div className="mb-2">
          <p className="text-center text-2xl font-bold">
            {position} @ {title}
          </p>
          <p className="text-center text-xl">{years}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export const WorkListItem = ({ children }: { children: string }) => {
  return (
    <p>
      <strong>•</strong> {children}
    </p>
  );
};

export default WorkCard;