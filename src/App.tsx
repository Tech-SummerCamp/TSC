import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home2025 from './pages/2025/Home';
import Schedule from './pages/2025/Schedule';
import News from './pages/2025/News';
import NewsDetail from './pages/2025/NewsDetail';
import FAQ from './pages/2025/FAQ';
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home2025 />} />
          <Route path="about" element={<Navigate to="/" replace />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<NewsDetail />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App