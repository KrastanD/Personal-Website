const AboutMeCard = ({ text }: { text: string }) => {
  return (
    <div className="bg-charlestonGreen-700 p-4 rounded text-charlestonGreen-200 mb-2">
      <p>
        {">"} {text}
      </p>
    </div>
  );
};

export default AboutMeCard;
