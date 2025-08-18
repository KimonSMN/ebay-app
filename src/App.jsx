import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Main from './pages/Main';
import Sell from './pages/Sell';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main />} />
        <Route path="/sell" element={<Sell />} />

      </Routes>
    </Router>
  );
}

export default App;
