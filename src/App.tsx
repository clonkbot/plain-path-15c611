import { useState } from 'react';
import { Hero } from './components/Hero';
import { Principles } from './components/Principles';
import { PathwaySteps } from './components/PathwaySteps';
import { Checklist } from './components/Checklist';
import { Resources } from './components/Resources';
import { Footer } from './components/Footer';
import './styles.css';

type Section = 'home' | 'principles' | 'pathway' | 'checklist' | 'resources';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: Section; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'principles', label: 'Principles' },
    { id: 'pathway', label: 'The Pathway' },
    { id: 'checklist', label: 'Readiness' },
    { id: 'resources', label: 'Resources' },
  ];

  return (
    <div className="min-h-screen bg-parchment relative overflow-x-hidden">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-texture" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-sm border-b-2 border-barn-red/20">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveSection('home')}
              className="font-display text-xl md:text-2xl text-barn-red hover:text-barn-red/80 transition-colors"
            >
              Plain Path
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`font-body text-sm tracking-wide transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-barn-red border-b-2 border-barn-red'
                      : 'text-charcoal/70 hover:text-charcoal border-b-2 border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-charcoal"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-2 border-t border-barn-red/20 pt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`font-body text-left py-2 px-3 rounded transition-all ${
                    activeSection === item.id
                      ? 'bg-barn-red/10 text-barn-red'
                      : 'text-charcoal/70 hover:bg-cream'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {activeSection === 'home' && <Hero onNavigate={setActiveSection} />}
        {activeSection === 'principles' && <Principles />}
        {activeSection === 'pathway' && <PathwaySteps />}
        {activeSection === 'checklist' && <Checklist />}
        {activeSection === 'resources' && <Resources />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
