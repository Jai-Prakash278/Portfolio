export const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-16 lg:px-24 bg-background border-t border-themeborder">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-4">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
          <span className="text-[14px] font-bold text-white tracking-widest">JAI PRAKASH</span>
          <span className="text-[13px] text-white/50 font-medium">Full Stack Developer — Building modern web experiences.</span>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end gap-1.5 text-center md:text-right">
          <span className="text-[12px] text-white/40 font-medium tracking-wide">© 2026</span>
          <a 
            href="#contact" 
            className="text-[14px] text-accent font-semibold flex items-center gap-1 group transition-colors hover:text-accent-light"
          >
            Let's connect 
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </footer>
  );
};
