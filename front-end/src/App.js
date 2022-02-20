import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style/style.css";


// Components
import Home from "./Components/Functional/Home";
import Landing from "./Components/Functional/Landing";
import AboutMe from "./Components/Functional/AboutMe";
import Projects from "./Components/Functional/Projects";
import ProjectDetail from "./Components/Functional/ProjectDetail";
import ContactMe from "./Components/Functional/ContactMe";
import SentMessage from "./Components/Functional/SentMessage";
import Skills from "./Components/Functional/Skills";
import Blog from "./Components/Functional/Blog";
import BlogDetail from "./Components/Functional/BlogDetail";
import SignIn from "./Components/Functional/SignIn";
import ProtectedRoute from "./Components/Supportive/ProtectedRoute";
import Admin from "./Components/Functional/Admin";
import PostBlog from "./Components/Functional/PostBlog";
import PostProject from './Components/Functional/PostProject'
import MailDetail from './Components/Functional/MailDetail'

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
        <Route path ='/contact-me/message' element={<SentMessage />} /> 
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/sign-in" element={<SignIn />} />


        <Route element={<ProtectedRoute />}>
          {/* ENTER PROTECTED ROUTES HERE! */}
        </Route>


<Route path="/admin" element={<Admin />} />
<Route path='/admin/post-blog' element={<PostBlog />} />
<Route path='/admin/post-project' element={<PostProject />} />
<Route path='/admin/mail/:id' element={<MailDetail />} />

        <Route path="*" element={<NotFound />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
