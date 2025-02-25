import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Singin from "./pages/Singin";
import SingUp from "./pages/singUp";
import About from "./pages/about";
import Profiles from "./pages/Profiles";
import Header from "./components/Header";


const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sign-in" element={<Singin/>} />
    <Route path="/Sing-up" element={<SingUp/>} />
    <Route path="/about" element={<About />} />
    <Route path="/profiles" element={<Profiles/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
