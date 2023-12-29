import { Route, Routes } from "react-router-dom"
import './App.css';
import { Navbar } from './components/Navbar';
import {About, Contact, Home, Services} from "./components/pages";

function App() {
  return(
  <div className= "homepage">
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element= {<About />}/>
      <Route path="/contact" element= {<Contact />}/>
      <Route path="/services" element= {<Services />}/>
    </Routes>
  </div>
  )

}
export default App;
