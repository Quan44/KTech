import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Home from "@/pages/Home/Page";
import NoMatch from "@/pages/NoMatch/Page";
import Form1 from "./pages/Form1/Page";
import Form2 from "./pages/Form2/Page";
import Form3 from "./pages/Form3/Page";
import RegistrationForm from "./pages/RegistrationForm/Page";
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
          <Route path="/Form1" element={<Form1/>}/>
          <Route path="/Form2" element={<Form2/>}/>
          <Route path="/Form3" element={<Form3/>}/>
          <Route path="/HomeWork" element={<RegistrationForm/>}/>
          {/* <Route path="/Widget1" element={<Widget1 />} />
          <Route path="/Widget2" element={<Widget2 />} />
          <Route path="/Widget3" element={<Widget3 />} />
          <Route path="/Widget4" element={<Widget4 />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
