import { FC } from "react";

const Blog: FC = () => {
  return (
    <>
      <section>
        <div className="flex  min-h-[calc(100vh-64px)] bg-base-200 w-full justify-center">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <h1 className="text-5xl font-bold">Welcome Blog Page</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
