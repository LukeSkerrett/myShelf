import { Route, Routes } from "react-router-dom"
import './App.css';
import { Navbar } from './components/Navbar';
import {About, Contact, Home, Services, Signup} from "./components/pages";

function App() {
  return(
  <div className= "app">
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element= {<About />}/>
      <Route path="/contact" element= {<Contact />}/>
      <Route path="/services" element= {<Services />}/>
    </Routes>
  </div>
  )

}
export default App;
