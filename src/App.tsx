import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Inicio from './components/Inicio';
import ConsolasRetro from './components/ConsolasRetro';
import VideojuegosClasicos from './components/VideojuegosClasicos';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/consolas" element={<ConsolasRetro />} />
        <Route path="/juegos" element={<VideojuegosClasicos />} />
      </Routes>
    </Router>
  );
};

export default App;
