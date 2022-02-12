import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './Style/style.css'



// Components
import Home from './Components/Home'
import Landing from "./Components/Landing"
import AboutMe from "./Components/AboutMe";
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import NotFound from './Components/NotFound';





function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/about' element={<AboutMe />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/blog' element={<Blog />} /> 
      <Route path='*' element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
