import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
// import Academic from './pages/AcademicExperience';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/academic" element={<Academic />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;