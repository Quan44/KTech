import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
const Layout: FC = () => {
  const location = useLocation();
  const hideHeader = location.pathname === "/login" || location.pathname === "/";

  return (
    <div className="h-screen overflow-x-hidden bg-gray-50">
      {!hideHeader && <Header />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
