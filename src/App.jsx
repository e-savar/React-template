import { Button, Navbar } from "@blueprintjs/core";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar className="topNav">
        <Navbar.Group>
          <Navbar.Heading>The Arlington Consulting Group</Navbar.Heading>
          <Navbar.Divider />
          <Link to="/">
            <Button className="bp5-minimal" text="Home" />
          </Link>
          <Link to="/about">
            <Button className="bp5-minimal" text="About" />
          </Link>
          <Link to="/contact">
            <Button className="bp5-minimal" text="Contact Us" />
          </Link>
        </Navbar.Group>
      </Navbar>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;