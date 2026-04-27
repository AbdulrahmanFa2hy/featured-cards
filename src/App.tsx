import { Inbox, Wrench, Brain, Zap, CircleUserRound, Sparkle, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-10"
      style={{
        backgroundColor: '#0d0d0d',
        backgroundImage: 'url("https://res.cloudinary.com/deplilexq/image/upload/q_auto/f_auto/v1777270371/img2_ebjvig.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-4xl font-semibold text-white mb-4 tracking-tight "
          >
            How We Keep You Ahead®
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            From quick daily updates to deep expert insights, we give you<br />
            every advantage in the AI revolution.
          </p>
        </div>

        <p className="text-gray-300 text-sm mb-8">
          Here's how we deliver on that promise every day.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 mb-10">

          {/* ── Daily Newsletter Card ── */}
          <article
            className="relative rounded-[2.75rem] overflow-hidden flex flex-col p-9"
            style={{
              background: 'radial-gradient(120% 80% at 50% 115%, #ff7a18 0%, #c2410c 18%, #7c2d12 34%, #1a0e06 55%, #0d0804 75%, #080502 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
              minHeight: '360px',
            }}
          >
            {/* top-left specular highlight */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.75rem]"
              style={{
                background: 'radial-gradient(55% 45% at 0% 0%, rgba(255,180,120,0.35), rgba(255,140,80,0.12) 35%, transparent 65%)',
                mixBlendMode: 'screen',
              }}
            />
            {/* inner side shadows */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.75rem]"
              style={{ boxShadow: 'inset 40px 0 80px rgba(0,0,0,0.75), inset -40px 0 80px rgba(0,0,0,0.75)' }}
            />
            {/* bottom orange glow */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 rounded-b-[2.75rem]"
              style={{
                background: 'radial-gradient(60% 70% at 50% 100%, rgba(255,140,40,0.55), rgba(255,90,20,0.25) 40%, transparent 70%)',
                mixBlendMode: 'screen',
              }}
            />

            <div className="relative flex flex-col h-full">
              {/* icon */}
              <div
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 overflow-hidden mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(60,30,15,0.85) 0%, rgba(20,10,5,0.9) 50%, rgba(0,0,0,0.95) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 8px 0 14px rgba(0,0,0,0.6), inset -8px 0 14px rgba(0,0,0,0.6), inset 0 -6px 12px rgba(0,0,0,0.5), 0 6px 16px rgba(0,0,0,0.5)',
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    background: 'radial-gradient(70% 70% at 0% 0%, rgba(255,190,130,0.55), rgba(255,140,80,0.18) 40%, transparent 70%)',
                    mixBlendMode: 'screen',
                  }}
                />
                <Inbox className="relative" size={24} color="white" strokeWidth={2} />
              </div>

              <h2
                className="text-2xl font-medium text-white leading-tight tracking-tight mb-3"
              >
                Daily Newsletter
              </h2>
              <p className="text-white/60 text-sm leading-snug mb-4">
                Your shortcut to staying ahead—<br />delivered every morning.
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Get Daily Briefs <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </article>

          {/* ── Curated Tools Card ── */}
          <article
            className="relative rounded-[2.75rem] overflow-hidden flex flex-col p-9"
            style={{
              background: 'radial-gradient(120% 80% at 50% 115%, #3b82f6 0%, #1d4ed8 18%, #1e3a8a 34%, #0a1628 55%, #050b14 75%, #020609 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
              minHeight: '360px',
            }}
          >
            {/* top-left specular highlight */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.75rem]"
              style={{
                background: 'radial-gradient(55% 45% at 0% 0%, rgba(130,180,255,0.35), rgba(80,140,255,0.12) 35%, transparent 65%)',
                mixBlendMode: 'screen',
              }}
            />
            {/* inner side shadows */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.75rem]"
              style={{ boxShadow: 'inset 40px 0 80px rgba(0,0,0,0.75), inset -40px 0 80px rgba(0,0,0,0.75)' }}
            />
            {/* bottom blue glow */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 rounded-b-[2.75rem]"
              style={{
                background: 'radial-gradient(60% 70% at 50% 100%, rgba(80,140,255,0.55), rgba(50,100,240,0.25) 40%, transparent 70%)',
                mixBlendMode: 'screen',
              }}
            />

            <div className="relative flex flex-col h-full">
              {/* icon */}
              <div
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 overflow-hidden mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(15,30,60,0.85) 0%, rgba(5,10,25,0.9) 50%, rgba(0,0,0,0.95) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 8px 0 14px rgba(0,0,0,0.6), inset -8px 0 14px rgba(0,0,0,0.6), inset 0 -6px 12px rgba(0,0,0,0.5), 0 6px 16px rgba(0,0,0,0.5)',
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    background: 'radial-gradient(70% 70% at 0% 0%, rgba(130,190,255,0.55), rgba(80,140,255,0.18) 40%, transparent 70%)',
                    mixBlendMode: 'screen',
                  }}
                />
                <Wrench className="relative" size={24} color="white" strokeWidth={2} />
              </div>

              <h2
                className="text-2xl font-medium text-white leading-tight tracking-tight mb-3"
              >
                Curated Tools
              </h2>
              <p className="text-white/60 text-sm leading-snug mb-4">
                The most powerful AI apps and<br />platforms—tested and reviewed for you.
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Find My Tools <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </article>

          {/* ── Expert Insights Card ── */}
          <article
            className="relative rounded-[2.75rem] overflow-hidden flex flex-col p-9"
            style={{
              background: 'radial-gradient(120% 80% at 50% 115%, #22c55e 0%, #15803d 18%, #14532d 34%, #061a0e 55%, #030d07 75%, #010604 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
              minHeight: '360px',
            }}
          >
            {/* top-left specular highlight */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.75rem]"
              style={{
                background: 'radial-gradient(55% 45% at 0% 0%, rgba(130,255,180,0.35), rgba(80,255,140,0.12) 35%, transparent 65%)',
                mixBlendMode: 'screen',
              }}
            />
            {/* inner side shadows */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.75rem]"
              style={{ boxShadow: 'inset 40px 0 80px rgba(0,0,0,0.75), inset -40px 0 80px rgba(0,0,0,0.75)' }}
            />
            {/* bottom green glow */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 rounded-b-[2.75rem]"
              style={{
                background: 'radial-gradient(60% 70% at 50% 100%, rgba(40,200,90,0.55), rgba(20,160,60,0.25) 40%, transparent 70%)',
                mixBlendMode: 'screen',
              }}
            />

            <div className="relative flex flex-col h-full">
              {/* icon */}
              <div
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 overflow-hidden mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(10,35,20,0.85) 0%, rgba(5,15,8,0.9) 50%, rgba(0,0,0,0.95) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 8px 0 14px rgba(0,0,0,0.6), inset -8px 0 14px rgba(0,0,0,0.6), inset 0 -6px 12px rgba(0,0,0,0.5), 0 6px 16px rgba(0,0,0,0.5)',
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    background: 'radial-gradient(70% 70% at 0% 0%, rgba(130,255,180,0.55), rgba(80,255,140,0.18) 40%, transparent 70%)',
                    mixBlendMode: 'screen',
                  }}
                />
                <Brain className="relative" size={24} color="white" strokeWidth={2} />
              </div>

              <h2
                className="text-2xl font-medium text-white leading-tight tracking-tight mb-3"
              >
                Expert Insights
              </h2>
              <p className="text-white/60 text-sm leading-snug mb-4">
                Actionable analysis from researchers<br />and founders shaping the future of AI.
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Unlock Insights <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </article>

        </div>

        {/* Bottom badges */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Zap size={14} strokeWidth={2} className="text-white" />
            Always Current
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <CircleUserRound size={14} strokeWidth={2} className="text-white" />
            Focused for You
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Sparkle size={14} strokeWidth={2} className="text-white" />
            Actionable Steps
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
