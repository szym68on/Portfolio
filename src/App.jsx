import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
function App() {
  return (
    <div className="bg-dark-background w-[100vw] h-[100vh] overflow-hidden font-sans text-dark-on-background">
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
          <Route path="/" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
