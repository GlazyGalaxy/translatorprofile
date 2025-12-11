import React, { useState, useEffect, useCallback } from 'react';
import { Language } from './types';
import { CONTENT, EXPERIENCES, PORTFOLIO, EDUCATION } from './constants';
import { LanguageSwitch } from './components/LanguageSwitch';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { Icons } from './components/Icons';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'portfolio'>('profile');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
    setLang(browserLang);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = useCallback((newLang: Language) => {
    setLang(newLang);
  }, []);

  const NavItem = ({ label, target, isActive }: { label: string, target: 'profile' | 'portfolio', isActive: boolean }) => (
    <button
      onClick={() => {
        setActiveTab(target);
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`relative px-2 py-1 text-lg md:text-sm font-medium transition-colors ${
        isActive ? 'text-ink' : 'text-gray-500 hover:text-ink'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-100 transition-transform duration-300"></span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen font-sans text-ink flex flex-col selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-paper/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div 
            className="text-2xl font-display font-bold tracking-tight cursor-pointer flex items-center space-x-2" 
            onClick={() => setActiveTab('profile')}
          >
            <span className="text-accent text-3xl">L.</span>
            <span>Fangyuan</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem 
              label={CONTENT.nav.home[lang]} 
              target="profile" 
              isActive={activeTab === 'profile'} 
            />
            <NavItem 
              label={CONTENT.nav.portfolio[lang]} 
              target="portfolio" 
              isActive={activeTab === 'portfolio'} 
            />
            <div className="w-px h-4 bg-gray-300 mx-2"></div>
            <LanguageSwitch currentLang={lang} onToggle={toggleLang} />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
             <LanguageSwitch currentLang={lang} onToggle={toggleLang} />
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-ink">
              {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-paper border-b border-gray-100 p-6 flex flex-col space-y-6 shadow-xl animate-fade-in">
            <NavItem 
              label={CONTENT.nav.home[lang]} 
              target="profile" 
              isActive={activeTab === 'profile'} 
            />
            <NavItem 
              label={CONTENT.nav.portfolio[lang]} 
              target="portfolio" 
              isActive={activeTab === 'portfolio'} 
            />
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24 md:pt-32">
        {activeTab === 'profile' && (
          <div className="animate-fade-in space-y-24 pb-20">
            <Hero 
              content={CONTENT.hero} 
              lang={lang} 
              onCtaClick={() => {
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }} 
            />
            
            {/* About & Education Section */}
            <section className="px-6 max-w-5xl mx-auto grid md:grid-cols-12 gap-12">
               <div className="md:col-span-4 space-y-8">
                  <div className="bg-white p-6 rounded-sm shadow-sm border-t-4 border-accent">
                    <h3 className="font-serif font-bold text-lg mb-4">{CONTENT.about.skillsTitle[lang]}</h3>
                    <ul className="space-y-3">
                      {CONTENT.about.skills.map((skill, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-secondary">
                          <span className="text-accent mt-1">•</span>
                          <span>{typeof skill === 'string' ? skill : (skill as any)[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
               
               <div className="md:col-span-8 space-y-10">
                  <div>
                    <h2 className="text-3xl font-display font-bold mb-6 text-ink relative inline-block">
                      {CONTENT.about.title[lang]}
                      <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent"></span>
                    </h2>
                    <p className="text-lg leading-relaxed text-secondary font-light">
                      {CONTENT.about.text[lang]}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold mb-6 text-ink">{CONTENT.about.educationTitle[lang]}</h3>
                    <div className="space-y-6">
                      {EDUCATION.map((edu, idx) => (
                         <div key={idx} className="border-l-2 border-gray-200 pl-4 hover:border-accent transition-colors">
                           <h4 className="font-bold text-lg">{edu.institution[lang]}</h4>
                           <p className="text-ink font-serif">{edu.degree[lang]}</p>
                           <p className="text-sm text-gray-400 mt-1">{edu.period[lang]}</p>
                         </div>
                      ))}
                    </div>
                  </div>
               </div>
            </section>

            <div id="experience">
              <Experience items={EXPERIENCES} title={CONTENT.experience.title} lang={lang} />
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
           <div className="animate-fade-in pb-20">
             <Portfolio items={PORTFOLIO} title={CONTENT.portfolio.title} lang={lang} />
           </div>
        )}
      </main>

      <Footer content={CONTENT.footer} lang={lang} />
    </div>
  );
}

export default App;