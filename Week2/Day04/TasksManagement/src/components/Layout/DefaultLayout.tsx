import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
const Layout: FC = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <Header />
      <main className="my-5">
        <section className="container mx-auto">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
