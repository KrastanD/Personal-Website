import resume from "../assets/Krastan-resume-10-27-22.pdf";

function WorkPromo() {
  const buttonClass =
    "px-6 py-2 mx-1 my-1 rounded-md border-1 shadow-md bg-darkGunmetal-200 hover:scale-105 ease-in-out duration-200 text-black text-center";

  return (
    <div className="bg-darkGunmetal-600 p-4 mb-3 rounded text-darkGunmetal-200 flex flex-col w-full items-center">
      <h2 className="text-2xl font-bold text-center mb-2">Want to be next?</h2>
      <div className="flex flex-col sm:flex-row">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className={buttonClass}
        >
          View Resume
        </a>
        <a
          href={resume}
          download="KrastanDimitrovResume"
          className={buttonClass}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default WorkPromo;
