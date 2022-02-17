import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style/style.css";

// Components
import Home from "./Components/Functional/Home";
import Landing from "./Components/Functional/Landing";
import AboutMe from "./Components/Functional/AboutMe";
import Projects from "./Components/Functional/Projects";
import ProjectDetail from "./Components/Functional/ProjectDetail";
import ContactMe from "./Components/Functional/ContactMe";
import Skills from "./Components/Functional/Skills";
import Blog from "./Components/Functional/Blog";
import BlogDetail from "./Components/Functional/BlogDetail";
import SignIn from "./Components/Functional/SignIn";
import ProtectedRoute from "./Components/Supportive/ProtectedRoute";
import Admin from "./Components/Functional/Admin";
import NotFound from "./Components/Supportive/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<ProtectedRoute />}>
          
        </Route>
<Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
