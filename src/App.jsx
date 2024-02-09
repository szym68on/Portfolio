import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import ProjectsLayout from "./Project/ProjectsLayout";
import ResumeLayout from "./Resume/ResumeLayout";
import ContactLayout from "./Contact/ContactLayout";
function App() {
  return (
    <div className="bg-dark-background w-[100vw] h-[100vh] overflow-x-hidden font-sans text-dark-on-background pb-10">
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<ProjectsLayout />} />
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
