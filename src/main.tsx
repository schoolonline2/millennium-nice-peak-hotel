import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Restaurant from './pages/Restaurant';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);
