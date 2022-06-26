function ProjectFigure(props: {
  image: string;
  title: string;
  description: string;
  link?: string;
}) {
  const { image, title, description, link } = props;

  const InnerCard = () => (
    <div className="flex flex-col justify-between">
      <>
        <h3 className="font-semibold mb-2">{title}</h3>
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="object-cover object-top w-full h-64 border-gray-100 border-2 rounded"
        />
      </>
      <p className="mt-6">{description}</p>
    </div>
  );

  const Card = () => {
    if (link) {
      return (
        <a href={link} target="_blank" className="flex" rel="noreferrer">
          <InnerCard />
        </a>
      );
    }
    return <InnerCard />;
  };

  return (
    <div className="p-4 bg-white m-6  rounded">
      <Card />
    </div>
  );
}

export default ProjectFigure;
