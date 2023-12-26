import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Careers from "./pages/careers";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="About" element={<About />}></Route>
          <Route path="Blogs" element={<Blog />}></Route>
          <Route path="Careers" element={<Careers />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
