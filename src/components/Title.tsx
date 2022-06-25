const Title = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-col text-center md:justify-center -m-6 min-h-screen inline-flex">
        <div
          style={{ boxShadow: "10px 10px 15px #444" }}
          className="bg-white p-10 m-2"
        >
          <h1 className="text-4xl mb-6 mx-16">Krastan Dimitrov</h1>
          <h1 className="text-2xl">a software engineer</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
