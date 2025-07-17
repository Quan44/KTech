import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Home from "@/pages/Home/Page";
import Login from "./pages/Login/page";
import Tasks from "./pages/Tasks/page";
import CreateTask from "./pages/CreateTask/page";
import AccessDenied from "./pages/AccessDenied/page";
// import Widget1 from "./pages/Widget1/page";
// import Widget2 from "./pages/Widget2/page";
// import Widget3 from "./pages/Widget3/page";
// import Widget4 from "./pages/Widget4/page";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/create" element={<CreateTask />} />
          {/* Uncomment the following lines to enable widget routes */}
          {/* <Route path="/Widget1" element={<Widget1 />} />
          <Route path="/Widget2" element={<Widget2 />} />
          <Route path="/Widget3" element={<Widget3 />} />
          <Route path="/Widget4" element={<Widget4 />} /> */}
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="*" element={<AccessDenied />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
