import resume from "../assets/Krastan-resume-10-27-22.pdf";

function WorkPromo() {
  return (
    <div className="bg-darkGunmetal-600 p-4 mb-3 rounded text-darkGunmetal-100 flex flex-col w-full items-center">
      <h2 className="text-2xl font-bold text-center mb-2">Want to be next?</h2>
      <div className="flex flex-col sm:flex-row">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 mx-1 my-1 rounded-md border-1 shadow-md bg-gray-50 hover:bg-gray-100 text-black text-center"
        >
          View Resume
        </a>
        <a
          href={resume}
          download="KrastanDimitrovResume"
          className="px-6 py-2 mx-1 my-1 rounded-md border-1 shadow-md bg-gray-50 hover:bg-gray-100 text-black text-center"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default WorkPromo;
