import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import TaskPage from "./pages/Task/Page";
import LoginPage from "./pages/Login/Page";
import CreateTaskPage from "./pages/CreateTask/Page";
import AssigneeMePage from "./pages/AssigneeMe/Page";
import { User } from "./types";
import AuthContext from "./context";
import UpdateTaskPage from "./pages/UpdateTask/Page";
import AccessDeniedPage from "./pages/AccessDenied/Page";
// import Widget1 from "./pages/Widget1/page";
// import Widget2 from "./pages/Widget2/page";
// import Widget3 from "./pages/Widget3/page";
// import Widget4 from "./pages/Widget4/page";

const App: FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storeUser = localStorage.getItem('user');
    if (storeUser) {
      setUser(JSON.parse(storeUser));
    }
  }, [])

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Private Routes */}
            {user && <Route path="/tasks" element={<TaskPage />} />}
            {user && <Route path="/create" element={<CreateTaskPage />} />}
            {user && <Route path="/assignee-me" element={<AssigneeMePage />} />}
            {user && <Route path="/update-task/:id" element={<UpdateTaskPage />} />}

            <Route path="/*" element={<AccessDeniedPage />} />
            {/* <Route path="/Widget1" element={<Widget1 />} />
          <Route path="/Widget2" element={<Widget2 />} />
          <Route path="/Widget3" element={<Widget3 />} />
          <Route path="/Widget4" element={<Widget4 />} /> */}
          </Route>
        </Routes>
      </AuthContext.Provider>
    </>
  );
};

export default App;
