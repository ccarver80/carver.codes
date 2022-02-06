import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Components
import Header from "./Components/Header";
import Home from "./Components/Home"
import AboutMe from "./Components/AboutMe";
import Projects from './Components/Projects';
import Blog from './Components/Blog';


function App() {
  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<AboutMe />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/blog' element={<Blog />} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
