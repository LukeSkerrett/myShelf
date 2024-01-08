import { Route, Routes } from "react-router-dom"
import './App.css';
import { Navbar } from './components/Navbar';
import {About, Home, Signup, Shelf, CreateSneaker} from "./components/pages/index.js";

function App() {
  return(
  <div className= "app">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shelf" element={<Shelf/>}/>
      <Route path='/createsneaker' element={<CreateSneaker />}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </div>
  )

}
export default App;
