export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 lg:px-24 bg-background border-t border-themeborder relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-block px-3 py-1.5 rounded bg-accent-soft border border-accent-border text-accent-light text-[10px] font-bold tracking-widest uppercase mb-12">
          Contact
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-text-primary">
          Have an idea?<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Let's build something </span><span className="text-white">meaningful.</span>
        </h2>

        <a
          href="mailto:jay065118@gmail.com"
          className="text-xl md:text-2xl border-b border-themeborder pb-1 hover:border-themeborder-hover text-text-primary transition-colors mb-24 hover:text-accent-light"
        >
          jay065118@gmail.com
        </a>

        <div className="flex flex-wrap justify-center gap-8 text-sm tracking-widest uppercase font-bold text-text-secondary">
          <a href="https://github.com/Jai-Prakash278" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/jai-prakash-952a20296/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors">LinkedIn</a>
          <a href="https://x.com/Jay_SRajput_" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors">Twitter</a>
        </div>
      </div>
    </section>
  );
};
