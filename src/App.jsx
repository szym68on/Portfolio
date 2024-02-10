import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import ProjectsLayout from "./Project/ProjectsLayout";
import ResumeLayout from "./Resume/ResumeLayout";
import ContactLayout from "./Contact/ContactLayout";
function App() {
  return (
    <div className=" bg-light-background dark:bg-dark-background w-[100vw] h-[100vh] overflow-x-hidden font-sans text-light-on-background dark:text-dark-on-background pb-10">
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/project" />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<ProjectsLayout />} />
            <Route path="project" element={<ProjectsLayout />} />
            <Route path="resume" element={<ResumeLayout />} />
            <Route path="contact" element={<ContactLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
