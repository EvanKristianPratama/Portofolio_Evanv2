import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ExperienceDetail from './pages/ExperienceDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project/:slug" element={<ProjectDetail />} />
          <Route path="experience/:slug" element={<ExperienceDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
