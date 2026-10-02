import { useState, type TouchEvent, useEffect } from 'react';
import { projects } from '../data/projects';

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const Projects = () => {
  const extendedProjects = [...projects, ...projects, ...projects];
  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setTransitionEnabled(true);
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    setTransitionEnabled(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= projects.length * 2) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - projects.length);
    } else if (currentIndex <= projects.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + projects.length);
    }
  };

  // Swipe logic
  const minSwipeDistance = 40;
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  return (
    <section id="projects" className="py-8 md:py-8 flex justify-center w-full">
      <div className="w-full max-w-[1300px] px-6">

        {/* Header Area */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-6">
          <div>
            <div className="inline-block px-3 py-1.5 rounded bg-accent-soft border border-accent-border text-accent-light text-[10px] font-bold tracking-widest uppercase mb-3">
              Selected Work
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary tracking-wide">
              Featured Projects
            </h3>
          </div>

          <a href="#projects" className="px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-text-primary border border-themeborder hover:border-themeborder-hover transition-all flex items-center gap-2 group">
            View All Projects
            <span className="transition-transform group-hover:translate-x-1 text-accent">→</span>
          </a>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden relative -mx-2 px-2 pb-2">
          <div
            className="flex gap-5"
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (20 / cardsToShow)}px))`,
              transition: transitionEnabled ? 'transform 400ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {extendedProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="flex-shrink-0 group"
                style={{
                  width: cardsToShow === 1 ? '100%' : cardsToShow === 2 ? 'calc(50% - 10px)' : 'calc(33.333% - 13.33px)',
                }}
              >
                <div
                  className="flex flex-col h-[400px] rounded-xl overflow-hidden transition-all duration-300 relative bg-surface border border-themeborder group-hover:border-themeborder-hover group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.20)]"
                >
                  {/* Image Area (60%) */}
                  <div className="h-[240px] w-full bg-[#181a20] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                    {project.id === 1 && (
                      <div className="absolute inset-0 bg-[#0A0D14] flex items-center justify-center overflow-hidden">
                        <div className="absolute w-40 h-40 bg-[#FF5A36] opacity-10 blur-[50px] rounded-full group-hover:opacity-20 transition-opacity duration-700"></div>
                        <div className="relative w-16 h-16 border border-[#FF5A36]/20 rounded-xl flex items-center justify-center bg-[#FF5A36]/5 group-hover:scale-110 group-hover:border-[#FF5A36]/40 transition-all duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                          </svg>
                        </div>
                      </div>
                    )}
                    {project.id === 2 && (
                      <div className="absolute inset-0 bg-[#0A0D14] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                        <div className="relative w-16 h-16 border border-white/10 rounded-full flex items-center justify-center bg-white/5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                          <div className="absolute w-full h-[1px] bg-white/10 top-1/2 left-0 -translate-y-1/2"></div>
                          <div className="absolute h-full w-[1px] bg-white/10 left-1/2 top-0 -translate-x-1/2"></div>
                          <div className="w-3 h-3 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.3)] z-10 group-hover:bg-white/80 transition-colors"></div>
                          <div className="absolute w-2 h-2 rounded-full bg-white/20 top-2 left-2"></div>
                          <div className="absolute w-2 h-2 rounded-full bg-white/20 bottom-2 right-3"></div>
                        </div>
                      </div>
                    )}
                    {project.id === 3 && (
                      <div className="absolute inset-0 bg-[#0A0D14] flex items-center justify-center overflow-hidden">
                        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent top-1/2 -translate-y-1/2 -rotate-12"></div>
                        <div className="relative w-16 h-16 border border-white/10 rounded-xl flex items-center justify-center bg-white/5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                        </div>
                      </div>
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>

                  {/* Content Area (40%) */}
                  <div className="flex-1 p-5 flex flex-col relative z-10">
                    <div className="flex justify-between items-start mb-1.5">
                      <h3 className="text-[17px] font-bold text-text-primary">{project.title}</h3>
                      {project.status && (
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${project.status === 'Live' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-accent/10 text-accent border border-accent-border'}`}>
                          {project.status === 'In Progress' ? 'Currently Building' : project.status}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-[12px] font-medium text-white/50 mb-2 uppercase tracking-wide">
                      {project.category}
                    </p>
                    
                    <p className="text-text-secondary text-[13px] leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {project.achievement && (
                      <div className="mb-3 text-[11px] font-medium text-accent flex items-center gap-1.5">
                        <span className="text-[10px]">🏆</span> {project.achievement}
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2 flex-1">
                        {project.technologies.map(tech => (
                          <span key={tech} className="px-2.5 py-1 text-[10px] font-medium text-text-secondary rounded bg-background border border-themeborder">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-accent/70 group-hover:text-accent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 bg-background border border-themeborder group-hover:border-accent-border hover:shadow-[0_0_10px_var(--accent-glow)]">
                          <ArrowUpRight />
                        </a>
                      ) : (
                        <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-accent/70 group-hover:text-accent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 bg-background border border-themeborder group-hover:border-accent-border">
                          <ArrowUpRight />
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls - Bottom Center */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded border border-themeborder text-text-secondary hover:text-text-primary hover:bg-accent-soft hover:border-themeborder-hover transition-all"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center rounded border border-themeborder text-text-secondary hover:text-text-primary hover:bg-accent-soft hover:border-themeborder-hover transition-all"
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
};
