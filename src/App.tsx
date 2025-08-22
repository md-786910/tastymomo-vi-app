import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Location from './pages/Location';
import MomoDetail from './pages/MomoDetail';
import { TastyMomoInvestment } from './pages/TastyMomoInvestment';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu/:id" element={<MomoDetail />} />
            <Route path="/location" element={<Location />} />
            <Route path="/investment" element={<TastyMomoInvestment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;