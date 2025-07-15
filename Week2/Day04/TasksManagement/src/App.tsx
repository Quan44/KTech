import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/DefaultLayout";
import Home from "@/pages/Home/Page";
import AccessDenied from "./pages/AccessDenied";
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
          {/* <Route path="/Widget1" element={<Widget1 />} />
          <Route path="/Widget2" element={<Widget2 />} />
          <Route path="/Widget3" element={<Widget3 />} />
          <Route path="/Widget4" element={<Widget4 />} /> */}
          <Route path="*" element={<AccessDenied />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
