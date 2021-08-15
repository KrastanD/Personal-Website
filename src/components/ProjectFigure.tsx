function ProjectFigure(props: {
  image: string;
  title: string;
  description: string;
}) {
  const { image, title, description } = props;
  return (
    <div className="p-4 bg-white m-6 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="object-cover object-top w-full h-64 border-gray-100 border-2"
        />
      </div>
      <p className="mt-6">{description}</p>
    </div>
  );
}

export default ProjectFigure;
