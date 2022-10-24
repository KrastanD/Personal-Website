type EducationCardProps = {
  title: string;
  description: string;
  image: string;
};

const EducationCard = ({ title, description, image }: EducationCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-300 m-3 rounded text-black">
      <div className="p-4">
        <p className="text-center text-2xl font-bold mb-3">{title}</p>
        <p>{description}</p>
      </div>
      <img
        className="w-full lg:w-64 xl:w-80 rounded-tr rounded-br object-cover"
        src={image}
        alt="School image"
      />
    </div>
  );
};

export default EducationCard;
