import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Counter from "./pages/Counter.jsx";
import ColorPicker from "./pages/Color.jsx";
import ToDoList from "./pages/ToDoList.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/counter" element = {<Counter/>} />
          <Route path = "/colorpicker" element = {<ColorPicker/>}></Route>
          <Route path = "/todolist" element = {<ToDoList/>}></Route>
          <Route path = "/contact" element = {<Contact/>} />
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
