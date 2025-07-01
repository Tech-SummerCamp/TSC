import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home2025 from './pages/2025/Home';
import About from './pages/2025/About';
import Schedule from './pages/2025/Schedule';
import Entry from './pages/2025/Entry';
import News from './pages/2025/News';
import FAQ from './pages/2025/FAQ';
import Results2024 from './pages/2024/Results';
import Gallery2024 from './pages/2024/Gallery';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/2025" replace />} />
        
        <Route path="/2025" element={<Layout year="2025" />}>
          <Route index element={<Home2025 />} />
          <Route path="about" element={<About />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="entry" element={<Entry />} />
          <Route path="news" element={<News />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
        
        <Route path="/2024" element={<Layout year="2024" />}>
          <Route index element={<Results2024 />} />
          <Route path="results" element={<Results2024 />} />
          <Route path="gallery" element={<Gallery2024 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
