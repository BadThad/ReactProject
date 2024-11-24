import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Counter from "./pages/Counter.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/counter" element = {<Counter/>} />
          <Route path = "/contact" element = {<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
