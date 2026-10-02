import { CharacterScrollAnimation } from './CharacterScrollAnimation';

export const Contact = () => {
  return (
    <section id="contact" className="relative h-[250vh] w-full bg-background border-t border-themeborder">
      
      {/* Sticky Inner Scene */}
      <div className="sticky top-0 w-full h-screen flex items-center overflow-hidden">
        
        {/* Full-screen background animation layer */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <CharacterScrollAnimation 
            startFrame={15}
            endFrame={50}
            folderPath="/Verticalframes" 
            filePrefix="ezgif-frame-" 
          />
        </div>

        {/* Stronger dark gradient to ensure text readability over the bright laptop */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />

        {/* Content Overlay */}
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 flex items-center justify-start relative z-20 pointer-events-none">
          
          {/* Left Side: Contact Content (45-50%) */}
          <div className="w-full lg:w-[50%] flex flex-col items-start text-left pointer-events-auto">
            <div className="inline-block px-3 py-1.5 rounded bg-accent-soft border border-accent-border text-accent-light text-[10px] font-bold tracking-widest uppercase mb-12 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Contact
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-white leading-[1.1]" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.5)' }}>
              Have an idea?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light" style={{ textShadow: 'none' }}>Let's build something </span>
              <span className="text-white">meaningful.</span>
            </h2>

            <a
              href="mailto:jay065118@gmail.com"
              className="text-xl md:text-2xl border-b-2 border-themeborder pb-1 hover:border-accent-light text-white transition-colors mb-16 hover:text-accent-light"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7)' }}
            >
              jay065118@gmail.com
            </a>

            <div className="flex flex-wrap items-center gap-8 text-sm tracking-widest uppercase font-bold text-white/90">
              <a href="https://github.com/Jai-Prakash278" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>GitHub</a>
              <a href="https://www.linkedin.com/in/jai-prakash-952a20296/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>LinkedIn</a>
              <a href="https://x.com/Jay_SRajput_" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Twitter</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
