import { Inbox, Wrench, Brain, Zap, Target, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-10"
      style={{
        backgroundColor: '#0d0d0d',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-5xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
          >
            How We Keep You Ahead®
          </h1>
          <p className="text-gray-400 text-base max-w-md leading-relaxed" style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
            From quick daily updates to deep expert insights, we give you<br />
            every advantage in the AI revolution.
          </p>
        </div>

        <p className="text-gray-300 text-sm mb-8" style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
          Here's how we deliver on that promise every day.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {/* Daily Newsletter Card */}
          <div
            className="relative rounded-3xl overflow-hidden flex flex-col p-7"
            style={{
              background: 'linear-gradient(160deg, #1a1008 0%, #0d0a06 40%, #1a0a00 100%)',
              border: '1px solid rgba(255,140,60,0.18)',
              minHeight: '380px',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: '160px',
                background: 'radial-gradient(ellipse 90% 80% at 50% 100%, rgba(220,80,10,0.75) 0%, rgba(180,50,0,0.4) 40%, transparent 70%)',
                borderRadius: '0 0 24px 24px',
                pointerEvents: 'none',
              }}
            />
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(200,70,20,0.35)', border: '1px solid rgba(220,100,30,0.3)' }}
            >
              <Inbox size={26} color="white" strokeWidth={1.6} />
            </div>
            <h2
              className="text-3xl font-bold text-white mb-3 leading-tight"
              style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
            >
              Daily Newsletter
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
              Your shortcut to staying ahead—<br />delivered every morning.
            </p>
            <a
              href="#"
              className="flex items-center gap-1.5 text-white text-sm font-semibold mt-auto"
              style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}
            >
              Get Daily Briefs <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          {/* Curated Tools Card */}
          <div
            className="relative rounded-3xl overflow-hidden flex flex-col p-7"
            style={{
              background: 'linear-gradient(160deg, #080d1a 0%, #07090f 40%, #0a0d1e 100%)',
              border: '1px solid rgba(80,120,255,0.2)',
              minHeight: '380px',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: '160px',
                background: 'radial-gradient(ellipse 90% 80% at 50% 100%, rgba(80,120,255,0.7) 0%, rgba(60,90,220,0.35) 40%, transparent 70%)',
                borderRadius: '0 0 24px 24px',
                pointerEvents: 'none',
              }}
            />
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(60,90,200,0.35)', border: '1px solid rgba(80,120,255,0.3)' }}
            >
              <Wrench size={26} color="white" strokeWidth={1.6} />
            </div>
            <h2
              className="text-3xl font-bold text-white mb-3 leading-tight"
              style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
            >
              Curated Tools
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
              The most powerful AI apps and<br />platforms—tested and reviewed for you.
            </p>
            <a
              href="#"
              className="flex items-center gap-1.5 text-white text-sm font-semibold mt-auto"
              style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}
            >
              Find My Tools <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          {/* Expert Insights Card */}
          <div
            className="relative rounded-3xl overflow-hidden flex flex-col p-7"
            style={{
              background: 'linear-gradient(160deg, #071410 0%, #060d0a 40%, #091a0f 100%)',
              border: '1px solid rgba(40,200,100,0.2)',
              minHeight: '380px',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: '160px',
                background: 'radial-gradient(ellipse 90% 80% at 50% 100%, rgba(30,200,90,0.65) 0%, rgba(20,160,70,0.35) 40%, transparent 70%)',
                borderRadius: '0 0 24px 24px',
                pointerEvents: 'none',
              }}
            />
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(20,150,60,0.35)', border: '1px solid rgba(40,200,100,0.3)' }}
            >
              <Brain size={26} color="white" strokeWidth={1.6} />
            </div>
            <h2
              className="text-3xl font-bold text-white mb-3 leading-tight"
              style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
            >
              Expert Insights
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
              Actionable analysis from researchers<br />and founders shaping the future of AI.
            </p>
            <a
              href="#"
              className="flex items-center gap-1.5 text-white text-sm font-semibold mt-auto"
              style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}
            >
              Unlock Insights <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Bottom badges */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm" style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
            <Zap size={14} strokeWidth={2} className="text-gray-500" />
            Always Current
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm" style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
            <Target size={14} strokeWidth={2} className="text-gray-500" />
            Focused for You
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm" style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
            <ArrowRight size={14} strokeWidth={2} className="text-gray-500" />
            Actionable Steps
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
