import logo from './logo.svg';
import './App.css';
import './Tutorial.css'
import './Bio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Crew } from "./components/Crew";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Tutorial } from "./components/Tutorial";
import { Game } from "./components/Game";
import { Login } from "./components/Login";
import { Bio } from "./components/Bio";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<>
              <Banner />
              <Crew />
              <Projects />
              <Contact />
              <Login /> 
              <Footer />
            </>} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Bio" element={<Bio />} />
        </Routes>      
       
      </BrowserRouter>
    </div>
  );
}

export default App;



