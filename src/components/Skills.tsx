import { useEffect, useRef, useState } from 'react';
import { SkillsParticles } from './SkillsParticles';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  // ─── LEFT COLUMN: Languages · Frontend · Databases ───────────────────────
  const leftColumnCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 'Advanced', icon: '/pngs/js.webp' },
        { name: 'TypeScript', level: 'Advanced', icon: '/pngs/ts.png' },
        { name: 'SQL', level: 'Proficient', icon: '/pngs/sql2.png' },
        { name: 'Python', level: 'Familiar', icon: '/pngs/python.webp' },
        { name: 'C', level: 'Familiar', icon: '/pngs/c.webp' },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: '/pngs/html5.webp' },
        { name: 'CSS', icon: '/pngs/css.png' },
        { name: 'React', level: 'Advanced', icon: '/pngs/react.webp' },
        { name: 'Redux Toolkit', icon: '/pngs/redux-logo.svg' },
        { name: 'Tailwind CSS', level: 'Advanced', icon: '/pngs/Tailwind_CSS.png' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 'Proficient', icon: '/pngs/mongodb-icon.webp' },
        { name: 'PostgreSQL', level: 'Proficient', icon: '/pngs/Postgresql.webp' },
      ]
    },
  ];

  // ─── RIGHT COLUMN: Backend & APIs · Tools · Fundamentals ─────────────────
  const rightColumnCategories = [
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'NestJS', level: 'Proficient', icon: '/pngs/nest.webp' },
        { name: 'Node.js', icon: '/pngs/node.webp' },
        { name: 'Express.js', icon: '/pngs/expressjs.png', invert: true },
        { name: 'REST APIs', icon: '/pngs/restApi.webp', invert: true },
        {
          name: 'GraphQL',
          level: 'Proficient',
          svg: (
            <svg viewBox="0 0 24 24" fill="#E10098" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
              <path d="M17.482 17.51l-4.498-7.79H3.987l-2 3.464 5.498 9.524 8-4.62zm-12.247-4.33l-2.25 3.896 2.25 3.898h4.498l2.25-3.898-2.25-3.896H5.235zm12.247-8.66l-8-4.62-5.498 9.524 2 3.464 4.498-7.79h9zm1.253 10.392l-2.25-3.896-4.498.001-2.25 3.897 2.25 3.896h4.498l2.25-3.898zM20.013 7.026l-5.498-9.524-8 4.62 4.498 7.79h8.996l2-3.464z" />
            </svg>
          )
        },
        { name: 'JWT', icon: '/pngs/JWT.webp' },
        { name: 'RBAC', icon: '/pngs/RBAC-Logo.webp' },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', level: 'Advanced', icon: '/pngs/git.png' },
        { name: 'GitHub', icon: '/pngs/github.png', invert: true },
        { name: 'Docker', level: 'Proficient', icon: '/pngs/docker.png' },
        { name: 'Postman', icon: '/pngs/postman.webp' },
        { name: 'Jira', icon: '/pngs/jira.svg' },
      ]
    },
    {
      title: 'Fundamentals',
      skills: [
        { name: 'Data Structures & Algorithms (DSA)', icon: '/pngs/DSA.webp' },
      ]
    },
  ];

  const renderCategory = (category: any, catIdx: number, baseDelay: number) => (
    <div
      key={category.title}
      className={`flex flex-col transition-all duration-700 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${baseDelay + catIdx * 150}ms`
      }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-7 w-full">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-[5px] h-[5px] rounded-full bg-[#FF5A36] shadow-[0_0_8px_rgba(255,90,54,0.4)]"></div>
          <h3 className="text-[#A0A0A0] text-[15px] font-medium tracking-wide whitespace-nowrap">{category.title}</h3>
        </div>
        <div className="flex-grow h-[1px] bg-white/[0.05]"></div>
      </div>

      {/* Technologies Grid */}
      <div className={`grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3`}>
        {category.skills.map((skill: any, skillIdx: number) => (
          <div
            key={skillIdx}
            className="flex items-center gap-4 transition-all duration-300 group cursor-default"
          >
            <div className="w-11 h-11 shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm flex items-center justify-center p-2.5 transition-all duration-300 group-hover:border-[#FF5A36]/[0.25] group-hover:bg-white/[0.05] group-hover:shadow-[0_0_15px_rgba(255,90,54,0.1)] overflow-hidden">
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name} className={`w-full h-full object-contain drop-shadow-sm ${skill.invert ? 'brightness-0 invert opacity-90' : ''}`} />
              ) : skill.svg ? (
                skill.svg
              ) : (
                <span className="text-white/40 text-[13px] font-bold font-mono group-hover:text-white/80 transition-colors">{skill.name.charAt(0)}</span>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white font-medium text-[15px] tracking-wide transition-colors leading-tight">{skill.name}</span>
              {skill.level && (
                <span className="text-[#777777] text-[12px] font-medium tracking-wide mt-1">{skill.level}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-8 bg-background relative overflow-hidden">

      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

        {/* INTERACTIVE PARTICLES */}
        <SkillsParticles />

        {/* TOP RIGHT ORBIT EFFECTS */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full border-[1px] border-solid border-[#FF5A36]/[0.15] border-l-transparent border-b-transparent transform rotate-12 opacity-80 blur-[1px]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full border-[1.5px] border-solid border-[#FF5A36]/[0.1] border-r-transparent border-b-transparent transform -rotate-12 opacity-60"></div>
        <div className="absolute top-[-15%] right-[-15%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,90,54,0.07)_0%,transparent_60%)] blur-2xl"></div>

        {/* BOTTOM LEFT ORBIT EFFECTS */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full border-[1px] border-solid border-[#FF5A36]/[0.12] border-r-transparent border-t-transparent transform -rotate-12 opacity-70 blur-[1px]"></div>
        <div className="absolute bottom-[-20%] left-[-5%] w-[900px] h-[900px] rounded-full border-[1.5px] border-solid border-[#FF5A36]/[0.08] border-l-transparent border-t-transparent transform rotate-12 opacity-50"></div>
        <div className="absolute bottom-[-20%] left-[-15%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,90,54,0.05)_0%,transparent_60%)] blur-2xl"></div>

        {/* PARTICLES */}
        {/* Top Right */}
        <div className="absolute top-[15%] right-[25%] w-1 h-1 bg-[#FF5A36] rounded-full shadow-[0_0_12px_2px_rgba(255,90,54,0.8)] opacity-60"></div>
        <div className="absolute top-[5%] right-[40%] w-1.5 h-1.5 bg-[#FF5A36] rounded-full shadow-[0_0_15px_3px_rgba(255,90,54,0.6)] opacity-40 blur-[0.5px]"></div>
        <div className="absolute top-[35%] right-[5%] w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_8px_1px_rgba(255,255,255,0.8)] opacity-50"></div>

        {/* Bottom Left */}
        <div className="absolute bottom-[25%] left-[20%] w-1 h-1 bg-[#FF5A36] rounded-full shadow-[0_0_12px_2px_rgba(255,90,54,0.8)] opacity-70"></div>
        <div className="absolute bottom-[10%] left-[30%] w-1.5 h-1.5 bg-[#FF5A36] rounded-full shadow-[0_0_15px_3px_rgba(255,90,54,0.5)] opacity-40 blur-[1px]"></div>
        <div className="absolute bottom-[40%] left-[5%] w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_8px_1px_rgba(255,255,255,0.8)] opacity-60"></div>
      </div>

      {/* =========================================
          PART 1 — TOP INTRODUCTION
      ========================================= */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] lg:px-[8vw] flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20 relative z-10">

        {/* LEFT SIDE (45%) */}
        <div
          className={`lg:w-[50%] flex flex-col items-start transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex px-3 py-1 rounded-full border border-[#FF5A36]/30 text-[#FF5A36] text-[10px] font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(255,90,54,0.1)]">
            SKILLS
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-2 leading-[1.05] whitespace-nowrap">
            Building with Modern <br /><span className="text-[#FF5A36]">Technology.</span>
          </h2>

          <p className="text-[#B5B5B5] text-[16px] leading-relaxed max-w-sm">
            A focused toolkit I use to build scalable, secure, and production-ready web applications.
          </p>
        </div>

        {/* RIGHT SIDE (55%) */}
        <div
          className={`lg:w-[50%] flex justify-end w-full transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="w-full max-w-[500px] px-6 py-4 md:px-10 md:py-5 rounded-full border border-[#FF5A36]/20 border-t-white/[0.3] border-l-white/[0.2] border-r-[#FF5A36]/[0.1] border-b-[#FF5A36]/[0.3] bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-[24px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5),_inset_0_1px_3px_rgba(255,255,255,0.4),_inset_0_-2px_10px_rgba(255,90,54,0.2)] relative overflow-hidden group hover:border-[#FF5A36]/40 hover:shadow-[0_20px_50px_-10px_rgba(255,90,54,0.2),_inset_0_1px_3px_rgba(255,255,255,0.5),_inset_0_-2px_10px_rgba(255,90,54,0.3)] transition-all duration-500">

            {/* Top Gloss Highlight */}
            <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.6] to-transparent"></div>

            {/* Subtle internal glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF5A36] opacity-[0.15] blur-[40px] rounded-full group-hover:opacity-[0.25] transition-opacity duration-500"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF5A36] opacity-[0.1] blur-[40px] rounded-full group-hover:opacity-[0.2] transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col items-center text-center justify-center">
              <h3 className="text-[#F0F0F0] text-xl md:text-[22px] font-medium leading-[1.6] tracking-wide">
                <span className='text-[#FF5A36] text-2xl mr-1 font-serif'>&quot;</span>
                Turning ideas into reliable digital <span className="text-[#FF5A36]">experiences.</span>
              </h3>
            </div>
          </div>
        </div>

      </div>


      {/* =========================================
          PART 2 — BOTTOM SKILLS CATALOG
      ========================================= */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-[5vw] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {leftColumnCategories.map((category, idx) => renderCategory(category, idx, 300))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {rightColumnCategories.map((category, idx) => renderCategory(category, idx, 450))}
        </div>

      </div>
    </section>
  );
};
