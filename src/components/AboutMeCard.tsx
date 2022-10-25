const AboutMeCard = ({ text }: { text: string }) => {
  return (
    <div className="bg-gray-300 p-4 rounded text-black mb-2">
      <p>
        {">"} {text}
      </p>
    </div>
  );
};

export default AboutMeCard;
