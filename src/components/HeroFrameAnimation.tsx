import { useMouseFrameAnimation } from '../hooks/useMouseFrameAnimation';

export const HeroFrameAnimation = () => {
  const { currentFrame, images, loaded } = useMouseFrameAnimation(1, 150);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center bg-background">

      {/* Decorative Dotted Grid */}
      <div
        className="absolute top-32 right-[15%] w-48 h-48 opacity-10 pointer-events-none z-10 hidden lg:block"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
      />

      {/* Frame rendering - Character Animation Layer */}
      <div className="absolute inset-0 z-0">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background text-muted">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin"></div>
              <p className="text-sm tracking-widest uppercase">Loading Experience...</p>
            </div>
          </div>
        )}

        {loaded && images.length > 0 && images[currentFrame] && (
          <img
            src={images[currentFrame].src}
            alt={`Frame ${currentFrame + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-[center_top] md:object-center pointer-events-none"
          />
        )}
      </div>

      {/* Background Gradients for Readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-black/90 md:hidden" />
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.1) 65%, transparent 80%)' }} />

      {/* Left Content Overlay */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col justify-center h-full pt-24 md:pt-0 pointer-events-none">
        <div className="max-w-[600px] pointer-events-auto mt-6 md:mt-0">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase mb-6 shadow-sm bg-accent-soft border border-accent-border text-accent-light">
            I'm a Developer
          </div>

          {/* Headings */}
          <h1 className="text-[32px] sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-2 leading-tight" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)' }}>
            Hi, I'm <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, var(--accent), var(--accent-light))' }}>Jai Prakash</span>
          </h1>
          <h2 className="text-[18px] sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight uppercase" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)' }}>
            I code reality you <span style={{ color: '#9c2402ff' }}>imagine.</span>
          </h2>

          {/* Description */}
          <p className="text-[15px] sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 sm:mb-10 max-w-[560px]" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)' }}>
            I'm a passionate Full Stack Developer specializing in building exceptional digital experiences with modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-16 lg:mb-24">
            <a href="#projects" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold transition-all hover:brightness-110" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-light))', boxShadow: '0 8px 30px var(--accent-glow)' }}>
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
            <a href="/resume/resume.pdf" download="Jai_Prakash_Resume.pdf" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#111]/40 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-white/10 sm:border-themeborder-hover text-white font-semibold transition-colors hover:bg-accent-soft">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* Let's Connect (Socials) */}
          <div className='mt-4 sm:mt-5'>
            <h3 className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/50 mb-3 sm:mb-4">Let's Connect</h3>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="https://github.com/Jai-Prakash278" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#131B2B]/60 backdrop-blur-md border border-white/5 text-white/80 hover:text-white hover:-translate-y-1 hover:bg-[#131B2B] transition-all hover:border-accent-border hover:shadow-[0_0_15px_var(--accent-glow)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jai-prakash-952a20296/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#131B2B]/60 backdrop-blur-md border border-white/5 text-white/80 hover:text-white hover:-translate-y-1 hover:bg-[#131B2B] transition-all hover:border-accent-border hover:shadow-[0_0_15px_var(--accent-glow)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://x.com/Jay_SRajput_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#131B2B]/60 backdrop-blur-md border border-white/5 text-white/80 hover:text-white hover:-translate-y-1 hover:bg-[#131B2B] transition-all hover:border-accent-border hover:shadow-[0_0_15px_var(--accent-glow)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#contact" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#131B2B]/60 backdrop-blur-md border border-white/5 text-white/80 hover:text-white hover:-translate-y-1 hover:bg-[#131B2B] transition-all hover:border-accent-border hover:shadow-[0_0_15px_var(--accent-glow)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Learning Card (Right side) */}
      <div
        className="hidden lg:flex absolute right-[3%] xl:right-[5%] bottom-[10%] xl:bottom-[10%] w-[220px] flex-col rounded-[16px] overflow-hidden z-20 pointer-events-auto p-4 group"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.10)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.12), 0 16px 32px rgba(0,0,0,0.30), 0 0 40px rgba(255,90,54,0.06)',
          transition: 'transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.18)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 40px rgba(0,0,0,0.30), 0 0 50px rgba(255,90,54,0.12)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.10)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'inset 0 1px 1px rgba(255,255,255,0.12), 0 16px 32px rgba(0,0,0,0.30), 0 0 40px rgba(255,90,54,0.06)';
        }}
      >
        {/* Card Header */}
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-light"></div>
          <span className="font-semibold tracking-[0.15em] text-[8px] uppercase text-accent-light">Currently Learning</span>
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-bold text-white mb-1.5 tracking-tight">Agentic AI</h3>

        {/* Description */}
        <p className="text-white/70 text-[11px] leading-relaxed mb-3.5">
          Exploring AI agents, LLM workflows, and intelligent application development.
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {['LangGraph', 'LLMs', 'AI Agents', 'MCP Servers'].map(tech => (
            <span key={tech} className="px-2 py-0.5 rounded-md text-[9px] font-medium text-white/85 transition-colors" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-light shadow-[0_0_6px_var(--accent-glow)]"></div>
            <span className="text-white/80 text-[10px] font-medium">Learning & Building</span>
          </div>
          <a href="https://github.com/Jai-Prakash278/MCP-Learning" target="_blank" rel="noopener noreferrer" className="text-white/40 group-hover:text-accent-light hover:!text-white transition-all text-[12px] cursor-pointer">↗</a>
        </div>
      </div>

    </section>
  );
};
