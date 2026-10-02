import { useEffect, useRef, useState } from 'react';
import { experiences } from '../data/experience';

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  const handleToggle = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" ref={sectionRef} className="py-4 md:py-8 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">

      <style>{`
        @keyframes slow-pan {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .card-border-wrapper {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          overflow: hidden;
        }
        .card-border-inner {
          position: absolute;
          inset: -100%;
          background: conic-gradient(from 0deg, transparent 60%, rgba(108, 99, 255, 0.4) 100%);
          animation: spin-border 6s linear infinite;
        }
        @keyframes spin-border {
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_60%)]"></div>
        {/* Subtle Noise/Grain */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-24 text-center flex flex-col items-center">
          <span className="px-3 py-1.5 rounded-md bg-accent-soft border border-accent-border text-[10px] font-bold tracking-widest uppercase text-accent-light mb-6">
            Experience
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Professional Journey</span>
          </h2>

          <p className="text-[13px] md:text-sm text-text-secondary tracking-wide max-w-md">
            A timeline of the roles, products and experiences that shaped my journey.
          </p>
        </div>

        {/* =========================================
            DESKTOP TIMELINE (Hidden on mobile)
        ========================================= */}
        <div className="hidden md:flex flex-col relative w-full pb-10">

          {/* Main Vertical Center Line (Dashed) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 overflow-hidden">
            <div
              className="w-full h-full bg-[image:linear-gradient(to_bottom,var(--accent-border)_50%,transparent_50%)] bg-[length:1px_8px] transition-transform duration-1000 ease-in-out"
              style={{ transformOrigin: 'top', transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}
            ></div>
          </div>

          <div className="space-y-32">
            {experiences.map((exp, index) => {
              const isRight = index % 2 === 0;
              const nodeDelay = index === 0 ? '400ms' : index === 1 ? '700ms' : '1000ms';
              const cardDelay = index === 0 ? '600ms' : index === 1 ? '900ms' : '1200ms';
              const numberStr = String(index + 1).padStart(2, '0');
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className={`relative flex items-start justify-between w-full group ${isRight ? 'flex-row-reverse' : 'flex-row'}`}>

                  {/* 1. CARD SIDE */}
                  <div className={`w-[calc(50%-60px)] flex ${isRight ? 'justify-start' : 'justify-end'}`}>
                    <div
                      className={`relative w-full max-w-[460px] transition-all duration-700 ease-out hover:-translate-y-1 ${isRight ? 'hover:translate-x-1' : 'hover:-translate-x-1'}`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : `translateX(${isRight ? '25px' : '-25px'})`,
                        transitionDelay: cardDelay
                      }}
                    >
                      {/* Inner Glass Card */}
                      <div
                        className="relative z-10 p-6 rounded-[16px] overflow-hidden transition-colors duration-500 hover:border-themeborder-hover group-hover:border-themeborder-hover"
                        style={{
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.20)',
                        }}
                      >
                        {/* Background Number */}
                        <span className="absolute top-4 right-5 text-4xl font-bold text-white/[0.03] pointer-events-none select-none">{numberStr}</span>

                        <div className="flex justify-between items-start mb-2 relative z-10">
                          <h3 className={`font-bold text-text-primary tracking-wide ${exp.id === 1 ? 'text-[20px]' : 'text-[17px]'}`}>{exp.title}</h3>
                          {exp.label && (
                            <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold tracking-widest uppercase whitespace-nowrap ${exp.id === 1 ? 'bg-accent-soft border border-accent/30 text-accent' : 'bg-background border border-themeborder text-text-secondary'}`}>
                              {exp.label}
                            </span>
                          )}
                        </div>

                        <h4 className="text-[13px] font-medium text-accent-light mb-3 relative z-10">
                          {exp.company}{exp.location ? ` · ${exp.location}` : ''}
                        </h4>

                        <p className={`text-[13.5px] text-white/80 leading-relaxed relative z-10 mb-4 ${exp.id === 1 ? 'font-medium' : ''}`}>
                          {exp.description}
                        </p>

                        {/* Expandable Bullets — CSS Grid for smooth animation */}
                        {exp.bullets && exp.bullets.length > 0 && (
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateRows: isExpanded ? '1fr' : '0fr',
                              transition: 'grid-template-rows 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                              willChange: 'grid-template-rows'
                            }}
                            className="relative z-10"
                          >
                            <div style={{ overflow: 'hidden' }}>
                              <div
                                style={{
                                  opacity: isExpanded ? 1 : 0,
                                  transition: 'opacity 350ms ease',
                                  transitionDelay: isExpanded ? '50ms' : '0ms',
                                  transform: 'translateZ(0)',
                                  willChange: 'opacity'
                                }}
                              >
                                <ul className="list-none space-y-2.5 pb-5 pt-1">
                                  {exp.bullets.map((bullet: string, bIdx: number) => (
                                    <li key={bIdx} className="text-[13px] text-text-secondary leading-relaxed flex items-start">
                                      <span className="text-accent/70 mr-2.5 mt-[1px] shrink-0">•</span>
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Tech Pills + Expand Button row */}
                        <div className="flex items-center justify-between gap-3 mt-auto relative z-10 pt-4 border-t border-white/[0.05]">
                          <div className="flex flex-wrap gap-2 flex-1">
                            {exp.tech && exp.tech.map((t: string) => (
                              <span key={t} className="px-2.5 py-[3px] rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] text-[10.5px] text-white/80 tracking-wide">{t}</span>
                            ))}
                          </div>

                          {/* Expand / Collapse button */}
                          {exp.bullets && exp.bullets.length > 0 && (
                            <button
                              onClick={() => handleToggle(exp.id)}
                              className={`shrink-0 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-300 ${isExpanded ? 'border-accent/40 text-accent bg-accent/[0.08] hover:bg-accent/[0.15]' : 'border-white/10 text-white/40 hover:text-white hover:border-white/20'}`}
                            >
                              {isExpanded ? 'Less' : 'Details'}
                              <svg
                                xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                              >
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Animated Traveling Border Light */}
                      <div className="card-border-wrapper opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                        <div className="card-border-inner"></div>
                      </div>
                    </div>
                  </div>

                  {/* 2. CENTER NODE */}
                  <div
                    className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0)',
                      transitionDelay: nodeDelay,
                      transition: 'all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    {/* Node Glow */}
                    <div className="absolute w-[22px] h-[22px] rounded-full bg-accent-soft blur-[3px] group-hover:bg-accent-glow group-hover:scale-110 transition-all duration-500"></div>
                    {/* Node Ring */}
                    <div className="absolute w-[12px] h-[12px] rounded-full border border-accent-border bg-background group-hover:border-accent transition-all duration-500"></div>
                    {/* Bright Center */}
                    <div className="w-[4px] h-[4px] rounded-full bg-accent-light shadow-[0_0_6px_var(--accent-glow)] group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,1)] transition-all duration-500 z-10"></div>
                  </div>

                  {/* 3. CONNECTOR LINE */}
                  <div
                    className={`absolute top-10 -translate-y-1/2 h-[1px] bg-accent-border group-hover:bg-accent transition-colors duration-500 z-10 w-[60px] ${isRight ? 'left-1/2' : 'right-1/2'}`}
                    style={{ opacity: isVisible ? 1 : 0, transitionDelay: nodeDelay }}
                  ></div>

                  {/* 4. DATE SIDE */}
                  <div className={`w-[calc(50%-60px)] flex flex-col justify-center pt-4 ${isRight ? 'items-end text-right pr-6' : 'items-start text-left pl-6'}`}>
                    <div
                      className="transition-all duration-700 ease-out group-hover:scale-[1.02]"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : `translateX(${isRight ? '-15px' : '15px'})`,
                        transitionDelay: cardDelay
                      }}
                    >
                      <div className="text-3xl font-semibold text-accent-light mb-1 tracking-wide drop-shadow-sm">{exp.year}</div>
                      <div className="text-[12.5px] text-text-muted tracking-widest font-medium uppercase">{exp.period}</div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            MOBILE TIMELINE (Hidden on desktop)
        ========================================= */}
        <div className="flex md:hidden flex-col relative w-full mt-10">

          {/* Main Vertical Left Line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[1px] overflow-hidden">
            <div
              className="w-full h-full bg-[image:linear-gradient(to_bottom,var(--accent-border)_50%,transparent_50%)] bg-[length:1px_8px] transition-transform duration-1000 ease-in-out"
              style={{ transformOrigin: 'top', transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}
            ></div>
          </div>

          <div className="space-y-12 py-6">
            {experiences.map((exp, index) => {
              const nodeDelay = index === 0 ? '400ms' : index === 1 ? '700ms' : '1000ms';
              const cardDelay = index === 0 ? '600ms' : index === 1 ? '900ms' : '1200ms';
              const numberStr = String(index + 1).padStart(2, '0');
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className="relative w-full pl-16 group">

                  {/* NODE */}
                  <div
                    className="absolute left-[24px] top-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20"
                    style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1)' : 'scale(0)', transitionDelay: nodeDelay }}
                  >
                    <div className="absolute w-[12px] h-[12px] rounded-full border border-accent-border bg-background"></div>
                    <div className="w-[4px] h-[4px] rounded-full bg-accent-light shadow-[0_0_6px_var(--accent-glow)] z-10"></div>
                  </div>

                  {/* CONNECTOR LINE */}
                  <div
                    className="absolute left-[24px] top-10 -translate-y-1/2 h-[1px] w-[40px] bg-accent-border z-10"
                    style={{ opacity: isVisible ? 1 : 0, transitionDelay: nodeDelay }}
                  ></div>

                  {/* DATE */}
                  <div
                    className="mb-4 flex items-center gap-4 transition-all duration-700 ease-out"
                    style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-15px)', transitionDelay: cardDelay }}
                  >
                    <span className="text-xl font-semibold text-accent-light">{exp.year}</span>
                    <span className="text-[11px] text-text-muted tracking-widest font-medium uppercase">{exp.period}</span>
                  </div>

                  {/* CARD */}
                  <div
                    className="relative w-full transition-all duration-700 ease-out"
                    style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-20px)', transitionDelay: cardDelay }}
                  >
                    <div
                      className="relative z-10 rounded-[16px] p-6 hover:border-themeborder-hover group-hover:border-themeborder-hover"
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 10px 40px rgba(0,0,0,0.20)' }}
                    >
                      <span className="absolute top-4 right-5 text-4xl font-bold text-white/[0.03] pointer-events-none select-none">{numberStr}</span>

                      <div className="flex justify-between items-start mb-2 relative z-10">
                        <h3 className={`font-bold text-text-primary tracking-wide ${exp.id === 1 ? 'text-[18px]' : 'text-[16px]'}`}>{exp.title}</h3>
                        {exp.label && (
                          <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold tracking-widest uppercase ${exp.id === 1 ? 'bg-accent-soft border border-accent/30 text-accent' : 'bg-background border border-themeborder text-text-secondary'}`}>
                            {exp.label}
                          </span>
                        )}
                      </div>

                      <h4 className="text-[12.5px] font-medium text-accent-light mb-3 relative z-10">
                        {exp.company}{exp.location ? ` · ${exp.location}` : ''}
                      </h4>

                      <p className={`text-[13px] text-white/80 leading-relaxed relative z-10 mb-4 ${exp.id === 1 ? 'font-medium' : ''}`}>
                        {exp.description}
                      </p>

                      {/* Expandable Bullets — CSS Grid for smooth animation */}
                      {exp.bullets && exp.bullets.length > 0 && (
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateRows: isExpanded ? '1fr' : '0fr',
                            transition: 'grid-template-rows 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                            willChange: 'grid-template-rows'
                          }}
                          className="relative z-10"
                        >
                          <div style={{ overflow: 'hidden' }}>
                            <div
                              style={{
                                opacity: isExpanded ? 1 : 0,
                                transition: 'opacity 350ms ease',
                                transitionDelay: isExpanded ? '50ms' : '0ms',
                                transform: 'translateZ(0)',
                                willChange: 'opacity'
                              }}
                            >
                              <ul className="list-none space-y-2.5 pb-5 pt-1">
                                {exp.bullets.map((bullet: string, bIdx: number) => (
                                  <li key={bIdx} className="text-[12.5px] text-text-secondary leading-relaxed flex items-start">
                                    <span className="text-accent/70 mr-2.5 mt-[1px] shrink-0">•</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tech Pills + Expand Button */}
                      <div className="flex flex-wrap items-center gap-2 mt-auto relative z-10 pt-4 border-t border-white/[0.05]">
                        {exp.tech && exp.tech.map((t: string) => (
                          <span key={t} className="px-2.5 py-[3px] rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] text-[10.5px] text-white/80 tracking-wide">{t}</span>
                        ))}
                        {exp.bullets && exp.bullets.length > 0 && (
                          <button
                            onClick={() => handleToggle(exp.id)}
                            className={`ml-auto flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-300 ${isExpanded ? 'border-accent/40 text-accent bg-accent/[0.08]' : 'border-white/10 text-white/40 hover:text-white hover:border-white/20'}`}
                          >
                            {isExpanded ? 'Less' : 'Details'}
                            <svg
                              xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="card-border-wrapper opacity-0">
                      <div className="card-border-inner"></div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
