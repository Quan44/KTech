import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-base-200 w-full h-full bg-slate-300 gap-4">
          <span className="text-3xl font-bold text-blue-700 drop-shadow-md animate-fade-in">
            Welcome to practices day 04
          </span>
          <span className="text-lg text-gray-700 italic animate-fade-in delay-200">
            Please select tabs to view details
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
