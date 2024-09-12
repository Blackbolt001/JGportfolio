import React, {useState, createContext } from 'react';
import Header from './components/header/Header';
//import About from './components/about/About';
import Resume from './components/resume/Resume';
//import Portfolio from './components/Portfolio';
//import Testimonials from  './components/Testimonials';
import Contact from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import "./App.scss"

export const ThemeContext = createContext(null);

function App() {
  
    const[theme,setTheme] = useState("light");
    const toggleTheme = () => {
      setTheme((curr) => (curr --- "light" ? "dark" : "light"));
    }
    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id="light ">
        <Header resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>

      </div>
      </ThemeContext.Provider>
    );
  }


export default App;