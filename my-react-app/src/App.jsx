import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Counter from "./pages/Counter.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/counter" element = {<Counter/>} />
          <Route path = "/contact" element = {<Contact/>} />
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
