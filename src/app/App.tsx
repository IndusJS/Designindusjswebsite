import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GoToTopButton } from './components/GoToTopButton';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { Favicon } from './components/Favicon';
import { TawkToChat } from './components/TawkToChat';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ColorDemo } from './pages/ColorDemo';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Favicon />
        <TawkToChat />
        <ScrollToTop />
        <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/colors" element={<ColorDemo />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Floating Action Buttons */}
          <GoToTopButton />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}