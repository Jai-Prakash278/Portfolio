export const About = () => {
  return (
    <section id="about" className="py-8 md:py-8 px-6 md:px-12 lg:px-24 bg-background-secondary border-t border-themeborder relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-soft blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Side: Text Content */}
        <div>
          {/* Badge */}
          <div className="inline-block px-3 py-1.5 rounded bg-accent-soft border border-accent-border text-accent-light text-[10px] font-bold tracking-widest uppercase mb-6">
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            I'm passionate about creating modern digital solutions
          </h2>

          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
            I'm a full-stack developer focused on building modern, scalable web applications and thoughtful digital experiences.
          </p>

          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-10">
            I enjoy working across the frontend and backend, turning ideas into reliable products using technologies such as React, TypeScript, NestJS, Node.js, PostgreSQL and MongoDB.
          </p>

          <a href="#about" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-themeborder text-text-primary text-sm font-medium hover:bg-accent-soft hover:border-themeborder-hover transition-colors">
            Learn More About Me
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        {/* Right Side: Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Card 1 */}
          <div className="bg-surface border border-themeborder rounded-2xl p-6 hover:border-themeborder-hover hover:shadow-[0_10px_40px_rgba(0,0,0,0.20)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-1">B.Tech</h3>
            <p className="text-sm text-text-secondary">Computer Science & Engineering</p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface border border-themeborder rounded-2xl p-6 hover:border-themeborder-hover hover:shadow-[0_10px_40px_rgba(0,0,0,0.20)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-1">Full Stack</h3>
            <p className="text-sm text-text-secondary">Development</p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface border border-themeborder rounded-2xl p-6 hover:border-themeborder-hover hover:shadow-[0_10px_40px_rgba(0,0,0,0.20)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-1">1st Prize</h3>
            <p className="text-sm text-text-secondary">BPUT Hackathon</p>
          </div>

          {/* Card 4 */}
          <div className="bg-surface border border-themeborder rounded-2xl p-6 hover:border-themeborder-hover hover:shadow-[0_10px_40px_rgba(0,0,0,0.20)] transition-all group">
            <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-1">Intern</h3>
            <p className="text-sm text-text-secondary">Technology Analyst</p>
          </div>

        </div>

      </div>
    </section>
  );
};
