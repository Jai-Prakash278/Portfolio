"use client";
import { useState } from 'react';

export const About = () => {
  const [positions, setPositions] = useState([2, 1, 3, 0, 4]);

  const handleCardClick = (clickedCardIndex: number) => {
    const clickedSlot = positions[clickedCardIndex];
    if (clickedSlot === 2) return; // already active center

    const centerCardIndex = positions.findIndex(slot => slot === 2);
    
    setPositions(prev => {
      const newPos = [...prev];
      newPos[clickedCardIndex] = 2; // Move clicked to center
      newPos[centerCardIndex] = clickedSlot; // Move old center to the clicked slot
      return newPos;
    });
  };

  const SLOT_TRANSFORMS = [
    { transform: 'rotateY(15deg) translateX(-220px) translateZ(-60px) scale(0.70)', zIndex: 10, opacity: 0.4, filter: 'blur(3px) brightness(0.6)' }, 
    { transform: 'rotateY(8deg) translateX(-120px) translateZ(-20px) scale(0.85)', zIndex: 20, opacity: 0.75, filter: 'blur(1px) brightness(0.8)' }, 
    { transform: 'rotateY(0deg) translateX(0px) translateZ(40px) scale(1.1)', zIndex: 30, opacity: 1, filter: 'drop-shadow(0 0 30px rgba(255,90,54,0.3)) brightness(1.05)' }, 
    { transform: 'rotateY(-8deg) translateX(120px) translateZ(-20px) scale(0.85)', zIndex: 20, opacity: 0.75, filter: 'blur(1px) brightness(0.8)' }, 
    { transform: 'rotateY(-15deg) translateX(220px) translateZ(-60px) scale(0.70)', zIndex: 10, opacity: 0.4, filter: 'blur(3px) brightness(0.6)' }, 
  ];

  const getSlotStyle = (slotIndex: number) => {
    return {
      ...SLOT_TRANSFORMS[slotIndex],
      cursor: 'pointer',
      transition: 'all 800ms cubic-bezier(0.22, 1, 0.36, 1)',
    };
  };

  return (
    <section id="about" className="py-16 md:py-16 px-6 md:px-12 lg:px-16 bg-background border-t border-themeborder relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_60%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center mb-0">

          {/* Text Content (Moved to Right on Desktop) */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent text-accent text-[11px] font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(255,90,54,0.2)] bg-accent/10">
              About Me
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Building digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">experiences</span> that solve<br />
              real <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">problems.</span>
            </h2>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              I'm a full-stack developer with experience in building products like a GRC platform and a standalone LMS. I work across the stack — from designing responsive interfaces with React and TypeScript to building scalable APIs with NestJS and GraphQL, and modeling data with PostgreSQL.
            </p>
          </div>          {/* Fan Card Spread — Reference Design */}
          <div className="lg:col-span-6 relative h-[520px] w-full flex items-center justify-center hidden md:flex mt-8 lg:mt-0 order-2 lg:order-1" style={{ perspective: '1200px' }}>

            {/* Ambient orange glow behind cards */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255,90,54,0.10) 0%, transparent 70%)' }}></div>

            {/* Fan container */}
            <div className="relative flex items-center justify-center" style={{ transformStyle: 'preserve-3d', width: '520px', height: '420px' }}>

              {/* ── CARD 0: CODE (AI Agent) ── */}
              <div className="absolute" onClick={() => handleCardClick(0)} style={{
                width: '220px', height: '300px',
                transformOrigin: 'center center',
                borderRadius: '22px',
                background: 'linear-gradient(150deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, rgba(10,15,30,0.65) 100%)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.20), inset 1px 0 0 rgba(255,255,255,0.10), 0 30px 60px rgba(0,0,0,0.7)',
                overflow: 'hidden',
                ...getSlotStyle(positions[0])
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(50,120,255,0.12) 0%, transparent 40%)', borderRadius: '22px' }}></div>
                <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '16px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,95,86,0.5)' }}></div>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,189,46,0.5)' }}></div>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(39,201,63,0.5)' }}></div>
                      <span style={{ marginLeft: '6px', color: 'rgba(255,255,255,0.25)', fontSize: '9px', fontFamily: 'monospace', letterSpacing: '0.05em' }}>agent.py</span>
                    </div>
                    <div style={{ fontFamily: 'monospace', fontSize: '9px', lineHeight: '1.7', color: 'rgba(255,255,255,0.4)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <div><span style={{ color: 'rgba(192,132,252,0.8)' }}>from</span> langgraph.graph <span style={{ color: 'rgba(192,132,252,0.8)' }}>import</span> StateGraph</div>
                      <div style={{ marginTop: '6px' }}><span style={{ color: 'rgba(192,132,252,0.8)' }}>def</span> <span style={{ color: 'rgba(147,197,253,0.8)' }}>agent_node</span>(state):</div>
                      <div style={{ paddingLeft: '12px' }}>msgs = state[<span style={{ color: 'rgba(253,224,71,0.8)' }}>"messages"</span>]</div>
                      <div style={{ paddingLeft: '12px' }}>res = model.invoke(msgs)</div>
                      <div style={{ paddingLeft: '12px' }}><span style={{ color: 'rgba(192,132,252,0.8)' }}>return</span> {'{'} <span style={{ color: 'rgba(253,224,71,0.8)' }}>"messages"</span>: [res] {'}'}</div>
                      <div style={{ marginTop: '6px' }}>workflow = StateGraph(State)</div>
                      <div>workflow.add_node(<span style={{ color: 'rgba(253,224,71,0.8)' }}>"agent"</span>, agent_node)</div>
                    </div>
                  </div>
                  <div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontWeight: 600, display: 'block', marginBottom: '2px' }}>Python · LangGraph</span>
                        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '8px', letterSpacing: '0.10em', textTransform: 'uppercase' }}>CODE</span>
                      </div>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CARD 1: API ── */}
              <div className="absolute" onClick={() => handleCardClick(1)} style={{
                width: '220px', height: '300px',
                transformOrigin: 'center center',
                borderRadius: '22px',
                background: 'linear-gradient(155deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 40%, rgba(15,8,3,0.60) 100%)',
                backdropFilter: 'blur(28px)',
                border: '1px solid rgba(255,255,255,0.14)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), inset 1px 0 0 rgba(255,255,255,0.10), 0 35px 70px rgba(0,0,0,0.75)',
                overflow: 'hidden',
                ...getSlotStyle(positions[1])
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(165deg, rgba(100,40,10,0.2) 0%, transparent 55%)', borderRadius: '22px' }}></div>
                <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,90,54,0.7)' }}></div>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>API</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: 'rgba(74,222,128,0.75)', fontSize: '9px', fontWeight: 700, fontFamily: 'monospace' }}>GET</span>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '10px', fontFamily: 'monospace' }}>/courses</span>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: 'rgba(96,165,250,0.75)', fontSize: '9px', fontWeight: 700, fontFamily: 'monospace' }}>POST</span>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '10px', fontFamily: 'monospace' }}>/assignments</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px', letterSpacing: '0.10em', textTransform: 'uppercase' }}>REST Endpoints</span>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>↗</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CARD 2: ARCHITECTURE ── */}
              <div className="absolute" onClick={() => handleCardClick(2)} style={{
                width: '220px', height: '300px',
                transformOrigin: 'center center',
                borderRadius: '22px',
                background: 'linear-gradient(160deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 40%, rgba(20,10,5,0.55) 100%)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.13)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.20), inset 1px 0 0 rgba(255,255,255,0.10), 0 30px 60px rgba(0,0,0,0.7)',
                overflow: 'hidden',
                ...getSlotStyle(positions[2])
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(170deg, rgba(120,50,10,0.25) 0%, transparent 50%)', borderRadius: '22px' }}></div>
                <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                  <div>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Architecture</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {['RBAC', 'LMS', 'API'].map((item, i) => (
                        <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '8px', padding: '8px 12px', color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {i < 2 && <span style={{ color: 'rgba(255,90,54,0.6)', fontSize: '10px' }}>↓</span>}
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px', letterSpacing: '0.10em', textTransform: 'uppercase' }}>System Design</span>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>↗</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CARD 3: QUERY ── */}
              <div className="absolute" onClick={() => handleCardClick(3)} style={{
                width: '220px', height: '300px',
                transformOrigin: 'center center',
                borderRadius: '22px',
                background: 'linear-gradient(140deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, rgba(20,10,5,0.55) 100%)',
                backdropFilter: 'blur(22px)',
                border: '1px solid rgba(255,255,255,0.11)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18), inset -1px 0 0 rgba(255,255,255,0.08), 0 25px 55px rgba(0,0,0,0.7)',
                overflow: 'hidden',
                ...getSlotStyle(positions[3])
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, rgba(90,30,5,0.20) 0%, transparent 50%)', borderRadius: '22px' }}></div>
                <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                  <div>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Query</span>
                    <div style={{ fontFamily: 'monospace', fontSize: '10px', lineHeight: '1.75', color: 'rgba(255,255,255,0.4)' }}>
                      <div><span style={{ color: 'rgba(255,140,60,0.70)' }}>SELECT</span> * <span style={{ color: 'rgba(255,140,60,0.70)' }}>FROM</span></div>
                      <div style={{ paddingLeft: '10px', color: 'rgba(255,255,255,0.6)' }}>courses</div>
                      <div><span style={{ color: 'rgba(255,140,60,0.70)' }}>WHERE</span> org_id</div>
                      <div style={{ paddingLeft: '10px' }}>= <span style={{ color: 'rgba(147,197,253,0.70)' }}>?</span></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px', letterSpacing: '0.10em', textTransform: 'uppercase' }}>PostgreSQL</span>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CARD 4: PERSONAL PROJECT ── */}
              <div className="absolute" onClick={() => handleCardClick(4)} style={{
                width: '220px', height: '300px',
                transformOrigin: 'center center',
                borderRadius: '22px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, rgba(10,25,15,0.65) 100%)',
                backdropFilter: 'blur(28px)',
                border: '1px solid rgba(255,255,255,0.14)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), inset -1px 0 0 rgba(255,255,255,0.10), 0 35px 70px rgba(0,0,0,0.75)',
                overflow: 'hidden',
                ...getSlotStyle(positions[4])
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, rgba(50,200,100,0.15) 0%, transparent 55%)', borderRadius: '22px' }}></div>
                <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: 'linear-gradient(135deg, #10b981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(16,185,129,0.3)' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Personal Project</span>
                    </div>
                    <div style={{ marginTop: '12px' }}>
                      <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '20px', fontWeight: 700, display: 'block', marginBottom: '6px' }}>O2Pick</span>
                      <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', lineHeight: '1.5', display: 'block' }}>Local Grocery<br/>Ordering Platform</span>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px', letterSpacing: '0.10em', textTransform: 'uppercase' }}>Full Stack App</span>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>↗</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
