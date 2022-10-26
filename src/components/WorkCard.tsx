type WorkCardProps = {
  title: string;
  years: string;
  position: string;
  children: React.ReactNode;
};

const WorkCard = ({ title, years, position, children }: WorkCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-300 my-3 rounded text-black max-w-screen-xl w-full">
      <div className="p-4">
        <div className="mb-2">
          <p className="text-center text-2xl font-bold">
            {position} @ {title}
          </p>
          <p className="text-center text-xl">{years}</p>
        </div>
        <p className="text-l">{children}</p>
      </div>
    </div>
  );
};

export const WorkListItem = ({ text }: { text: string }) => {
  return (
    <p>
      <strong>•</strong> {text}
    </p>
  );
};

export default WorkCard;
