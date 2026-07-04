import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter basename="/my-portfolio">
      <Navbar />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:projectId" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
