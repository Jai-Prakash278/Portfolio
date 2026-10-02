import React from 'react';

export const CurrentlyBuilding = () => {
  return (
    <section className="py-8 md:py-8 px-6 md:px-[6vw] lg:px-[8vw] bg-background relative overflow-hidden flex items-center min-h-[70vh]">

      {/* Background left plain deep black, grid moved to right visual */}

      <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-12 relative z-10">

        {/* LEFT SIDE (40%) */}
        <div className="w-full lg:w-[40%] flex flex-col items-start text-left relative z-20">
          <div className="inline-flex px-3 py-1 rounded-full border border-[#FF5A36]/30 text-[#FF5A36] text-[10px] font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(255,90,54,0.1)]">
            Currently Building
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            O<span className='text-[#FF5A36] text-[80px]'>2</span>Pick
          </h2>

          <p className="text-[#B5B5B5] text-[16px] md:text-lg leading-relaxed mb-10 max-w-md">
            A simple way for customers to order from local grocery shops and pick up their orders.
          </p>

          <ul className="flex flex-col gap-5">
            {[
              { text: "Local Grocery Shops", icon: "/pngs/shop.png" },
              { text: "Quick Ordering", icon: "/pngs/order.png" },
              { text: "Easy Pickup", icon: "/pngs/pickup2.webp" }
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[#E0E0E0] text-[15px] font-medium group">
                <div className="w-8 h-8 rounded-full bg-background border border-[#FF5A36]/20 flex items-center justify-center group-hover:border-[#FF5A36]/60 group-hover:shadow-[0_0_15px_rgba(255,90,54,0.2)] transition-all duration-300">
                  <img src={feature.icon} alt={feature.text} className="w-4 h-4 object-contain" />
                </div>
                {feature.text}
              </li>
            ))}
          </ul>

          <a href="#" className="mt-10 inline-block px-8 py-3.5 rounded-full border border-[#FF5A36]/20 border-t-white/[0.3] border-l-white/[0.2] border-r-[#FF5A36]/[0.1] border-b-[#FF5A36]/[0.3] bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-[24px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5),_inset_0_1px_3px_rgba(255,255,255,0.4),_inset_0_-2px_10px_rgba(255,90,54,0.2)] relative overflow-hidden group hover:border-[#FF5A36]/40 hover:shadow-[0_20px_50px_-10px_rgba(255,90,54,0.2),_inset_0_1px_3px_rgba(255,255,255,0.5),_inset_0_-2px_10px_rgba(255,90,54,0.3)] transition-all duration-500">
            {/* Top Gloss Highlight */}
            <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.6] to-transparent"></div>

            {/* Subtle internal glow */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#FF5A36] opacity-[0.15] blur-[20px] rounded-full group-hover:opacity-[0.25] transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#FF5A36] opacity-[0.1] blur-[20px] rounded-full group-hover:opacity-[0.2] transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-center">
              <span className='text-[#FF5A36] text-xl font-serif mr-1.5 mt-1 leading-none'>&quot;</span>
              <span className="text-[#F0F0F0] text-[15px] font-medium tracking-wide">O2Pick — Demo Coming Soon</span>
            </div>
          </a>
        </div>

        {/* RIGHT SIDE (60%) */}
        <div className="w-full lg:w-[60%] flex items-center justify-center relative min-h-[450px] md:min-h-[550px] mt-10 lg:mt-0">

          {/* Localized Background Grid with clearly visible orange tint */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.5] z-0">
            <div className="w-[120%] h-[120%] absolute" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,90,54,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,90,54,0.12) 1px, transparent 1px)',
              backgroundSize: '45px 45px',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)'
            }}></div>

            {/* Glowing Intersections on Grid */}
            <div className="absolute top-[25%] left-[25%] w-[3px] h-[3px] bg-[#FF5A36] rounded-full shadow-[0_0_8px_2px_rgba(255,90,54,0.8)]"></div>
            <div className="absolute top-[65%] right-[20%] w-[4px] h-[4px] bg-[#FF5A36] rounded-full shadow-[0_0_10px_2px_rgba(255,90,54,0.9)]"></div>
            <div className="absolute top-[15%] right-[35%] w-[2px] h-[2px] bg-[#FF5A36]/90 rounded-full shadow-[0_0_6px_1px_rgba(255,90,54,0.6)]"></div>
            <div className="absolute bottom-[25%] left-[30%] w-[3px] h-[3px] bg-[#FF5A36] rounded-full shadow-[0_0_8px_2px_rgba(255,90,54,0.7)]"></div>
            <div className="absolute top-[45%] left-[10%] w-[2px] h-[2px] bg-[#FF5A36]/80 rounded-full shadow-[0_0_5px_1px_rgba(255,90,54,0.5)]"></div>
            <div className="absolute bottom-[40%] right-[15%] w-[2px] h-[2px] bg-[#FF5A36]/80 rounded-full shadow-[0_0_5px_1px_rgba(255,90,54,0.5)]"></div>
          </div>

          {/* Central Radial Glow (Dark atmospheric warmth) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[280px] md:h-[280px] bg-[#FF5A36] opacity-[0.15] blur-[70px] rounded-full pointer-events-none z-0"></div>

          {/* Circuit Connection Lines with 90-degree turns and glowing nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ opacity: 0.8 }}>
            <defs>
              <filter id="circuit-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Center to Top-Left (Grocery) */}
            <path d="M 50% 50% L 25% 50% L 25% 23%" fill="none" stroke="#FF5A36" strokeWidth="1.5" strokeOpacity="0.4" filter="url(#circuit-glow)" />
            <circle cx="25%" cy="50%" r="3" fill="#FF5A36" filter="url(#circuit-glow)" />
            <circle cx="25%" cy="23%" r="3" fill="#FF5A36" filter="url(#circuit-glow)" />

            {/* Center to Top-Right (Local Shops) */}
            <path d="M 50% 50% L 50% 23% L 75% 23%" fill="none" stroke="#FF5A36" strokeWidth="1.5" strokeOpacity="0.4" filter="url(#circuit-glow)" />
            <circle cx="50%" cy="23%" r="3" fill="#FF5A36" filter="url(#circuit-glow)" />
            <circle cx="75%" cy="23%" r="3" fill="#FF5A36" filter="url(#circuit-glow)" />

            {/* Center to Bottom-Left (Order) */}
            <path d="M 50% 50% L 50% 77% L 25% 77%" fill="none" stroke="#FF5A36" strokeWidth="1.5" strokeOpacity="0.4" filter="url(#circuit-glow)" />
            <circle cx="50%" cy="77%" r="3" fill="#FF5A36" filter="url(#circuit-glow)" />
            <circle cx="25%" cy="77%" r="3" fill="#FF5A36" filter="url(#circuit-glow)" />

            {/* Center to Bottom-Right (Pickup) */}
            <path d="M 50% 50% L 75% 50% L 75% 82%" fill="none" stroke="#FF5A36" strokeWidth="1.5" strokeOpacity="0.4" filter="url(#circuit-glow)" />
            <circle cx="75%" cy="50%" r="3" fill="#FF5A36" filter="url(#circuit-glow)" />
            <circle cx="75%" cy="82%" r="3" fill="#FF5A36" filter="url(#circuit-glow)" />
          </svg>

          {/* Central Cart Container (Stronger edge glow, clearly illuminated) */}
          <div className="relative z-20 w-[130px] h-[130px] md:w-[160px] md:h-[160px] rounded-[32px] border border-[#FF5A36]/60 bg-gradient-to-br from-[#1A0A05] to-[#050200] shadow-[0_0_35px_rgba(255,90,54,0.35),_inset_0_2px_15px_rgba(255,90,54,0.2)] flex items-center justify-center transition-all duration-500">
            {/* Glowing Icon (Colorized with CSS mask) */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF5A36] drop-shadow-[0_0_12px_rgba(255,90,54,0.8)]" style={{
              maskImage: 'url(/pngs/cart.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: 'url(/pngs/cart.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center'
            }}></div>
          </div>

          {/* Top-Left: Grocery */}
          <div className="absolute top-[18%] md:top-[20%] left-[6%] md:left-[12%] px-4 md:px-5 py-2.5 min-w-[120px] rounded-[14px] border border-[#FF5A36]/30 bg-[#080302]/95 backdrop-blur-md shadow-[0_0_20px_rgba(255,90,54,0.12),_0_8px_16px_rgba(0,0,0,0.6)] flex items-center justify-center gap-2.5 z-30 transition-all duration-300 hover:border-[#FF5A36]/60">
            <img src="/pngs/grosaries.png" alt="Grocery" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
            <span className="text-[13px] md:text-[14px] font-medium text-white/95">Grocery</span>
          </div>

          {/* Top-Right: Local Shops */}
          <div className="absolute top-[18%] md:top-[20%] right-[6%] md:right-[12%] px-4 md:px-5 py-2.5 min-w-[130px] rounded-[14px] border border-[#FF5A36]/30 bg-[#080302]/95 backdrop-blur-md shadow-[0_0_20px_rgba(255,90,54,0.12),_0_8px_16px_rgba(0,0,0,0.6)] flex items-center justify-center gap-2.5 z-30 transition-all duration-300 hover:border-[#FF5A36]/60">
            <img src="/pngs/shop.png" alt="Local Shops" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
            <span className="text-[13px] md:text-[14px] font-medium text-white/95">Local Shops</span>
          </div>

          {/* Bottom-Left: Order */}
          <div className="absolute bottom-[20%] md:bottom-[20%] left-[8%] md:left-[12%] px-4 md:px-5 py-2.5 min-w-[110px] rounded-[14px] border border-[#FF5A36]/30 bg-[#080302]/95 backdrop-blur-md shadow-[0_0_20px_rgba(255,90,54,0.12),_0_8px_16px_rgba(0,0,0,0.6)] flex items-center justify-center gap-2.5 z-30 transition-all duration-300 hover:border-[#FF5A36]/60">
            <img src="/pngs/order.png" alt="Order" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
            <span className="text-[13px] md:text-[14px] font-medium text-white/95">Order</span>
          </div>

          {/* Bottom-Right: Pickup */}
          <div className="absolute bottom-[14%] md:bottom-[15%] right-[8%] md:right-[12%] px-4 md:px-5 py-2.5 min-w-[110px] rounded-[14px] border border-[#FF5A36]/30 bg-[#080302]/95 backdrop-blur-md shadow-[0_0_20px_rgba(255,90,54,0.12),_0_8px_16px_rgba(0,0,0,0.6)] flex items-center justify-center gap-2.5 z-30 transition-all duration-300 hover:border-[#FF5A36]/60">
            <img src="/pngs/pickup2.webp" alt="Pickup" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
            <span className="text-[13px] md:text-[14px] font-medium text-white/95">Pickup</span>
          </div>

        </div>

      </div>
    </section>
  );
};
