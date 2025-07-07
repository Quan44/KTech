import { FC, useEffect } from "react";

const Home: FC = () => {

  useEffect(() => {
    document.title = 'Home';
  }, [])

  return (
    <>
      <section>
        <div className="flex  min-h-[calc(100vh-64px)] bg-base-200 w-full justify-center bg-slate-400 ">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <h1 className="text-5xl font-bold">Welcome</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
