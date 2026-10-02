import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6 bg-transparent'}`} style={scrolled ? { background: 'rgba(5, 5, 8, 0.55)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.08)' } : {}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-mono font-bold text-xl transition-colors text-accent">{"</>"}</span>
          <span className="text-white text-xl font-bold tracking-tight">Jai Prakash</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide transition-all ${
                item === 'Home' 
                  ? 'text-white border-b-2 border-accent pb-1' 
                  : 'text-white/70 hover:text-white pb-1 border-b-2 border-transparent'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hire Me Button Desktop */}
        <div className="hidden lg:block">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-white text-sm font-medium hover:-translate-y-0.5 transition-all duration-300 hover:brightness-110" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-light))', boxShadow: '0 4px 15px var(--accent-glow)' }}>
            Hire Me
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px transition-colors ${mobileMenuOpen ? 'bg-accent' : 'bg-white'}`}></span>
            <span className={`block w-6 h-px transition-colors ${mobileMenuOpen ? 'bg-accent' : 'bg-white'}`}></span>
            <span className={`block w-6 h-px transition-colors ${mobileMenuOpen ? 'bg-accent' : 'bg-white'}`}></span>
          </div>
        </button>
      </div>

    </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 lg:hidden backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-[#050508] z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <a href="#" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-mono font-bold text-xl text-accent">{"</>"}</span>
            <span className="text-white text-xl font-bold tracking-tight">Jai Prakash</span>
          </a>
          <button onClick={() => setMobileMenuOpen(false)} className="text-white/60 hover:text-white p-1 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6 overflow-y-auto">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="pt-6 mt-2 border-t border-white/10">
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-white text-base font-medium w-full text-center hover:brightness-110" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-light))' }}>
              Hire Me
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
