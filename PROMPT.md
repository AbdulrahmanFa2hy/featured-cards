# Featured Cards Landing Page — Build Prompt

Build a dark, premium, single-page landing page for an **AI-focused newsletter/content platform** using **React + Vite + Tailwind CSS + Framer Motion (motion/react)**. The page features a sleek dark aesthetic -- deep black backgrounds, subtle grid patterns, gradient-accented cards with radial glow effects, and smooth scroll-triggered animations.

## FONTS

Import from Google Fonts:

```
https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;600;700&family=SF+Pro+Text:wght@300;400;500;600&display=swap
```

**Note:** SF Pro is Apple-proprietary. Use these open-source alternatives that match the aesthetic:

```
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap
```

- **Headings:** Inter (bold, 600-700) -- used via Tailwind class `font-heading`
- **Body:** DM Sans (weights 300, 400, 500, 600) -- used via Tailwind class `font-body`

**Tailwind config extends fontFamily:**

```js
fontFamily: {
  heading: ["'Inter'", "sans-serif"],
  body: ["'DM Sans'", "sans-serif"],
}
```

## COLOR THEME (CSS custom properties, HSL format)

```css
:root {
  --background: 0 0% 5%;
  --foreground: 0 0% 100%;
  --card-newsletter: linear-gradient(160deg, #1a1008 0%, #0d0a06 40%, #1a0a00 100%);
  --card-tools: linear-gradient(160deg, #080d1a 0%, #07090f 40%, #0a0d1e 100%);
  --card-insights: linear-gradient(160deg, #071410 0%, #060d0a 40%, #091a0f 100%);
  --border-orange: rgba(255, 140, 60, 0.18);
  --border-blue: rgba(80, 120, 255, 0.2);
  --border-green: rgba(40, 200, 100, 0.2);
  --glow-orange: radial-gradient(ellipse 90% 80% at 50% 100%, rgba(220,80,10,0.75) 0%, rgba(180,50,0,0.4) 40%, transparent 70%);
  --glow-blue: radial-gradient(ellipse 90% 80% at 50% 100%, rgba(80,120,255,0.7) 0%, rgba(60,90,220,0.35) 40%, transparent 70%);
  --glow-green: radial-gradient(ellipse 90% 80% at 50% 100%, rgba(30,200,90,0.65) 0%, rgba(20,160,70,0.35) 40%, transparent 70%);
  --grid-bg: rgba(255, 255, 255, 0.04);
  --radius: 24px;
}
```

## GRID BACKGROUND (the core visual texture)

A subtle grid pattern applied to the full page background:

```css
body {
  background-color: #0d0d0d;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}
```

This creates a faint engineering-grid texture that adds depth to the dark background.

## CARD GLOW EFFECTS (the core visual feature)

Three accent color variants, each with a matching radial glow at the bottom of the card. The glow uses an absolutely positioned overlay div:

```css
/* Orange glow (Newsletter) */
.card-glow-orange::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  background: radial-gradient(ellipse 90% 80% at 50% 100%, rgba(220,80,10,0.75) 0%, rgba(180,50,0,0.4) 40%, transparent 70%);
  border-radius: 0 0 24px 24px;
  pointer-events: none;
}

/* Blue glow (Tools) */
.card-glow-blue::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  background: radial-gradient(ellipse 90% 80% at 50% 100%, rgba(80,120,255,0.7) 0%, rgba(60,90,220,0.35) 40%, transparent 70%);
  border-radius: 0 0 24px 24px;
  pointer-events: none;
}

/* Green glow (Insights) */
.card-glow-green::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  background: radial-gradient(ellipse 90% 80% at 50% 100%, rgba(30,200,90,0.65) 0%, rgba(20,160,70,0.35) 40%, transparent 70%);
  border-radius: 0 0 24px 24px;
  pointer-events: none;
}
```

## ICON CONTAINER STYLES

Each card icon sits inside a tinted rounded container with a matching accent border:

```
Newsletter: bg-[rgba(200,70,20,0.35)] border-[rgba(220,100,30,0.3)]
Tools:      bg-[rgba(60,90,200,0.35)] border-[rgba(80,120,255,0.3)]
Insights:   bg-[rgba(20,150,60,0.35)] border-[rgba(40,200,100,0.3)]
```

All icon containers: `w-14 h-14 rounded-2xl flex items-center justify-center`

## ASSETS & ICONS

Icons from `lucide-react`:
- `Inbox` -- Newsletter card icon
- `Wrench` -- Curated Tools card icon
- `Brain` -- Expert Insights card icon
- `Zap` -- "Always Current" badge icon
- `Target` -- "Focused for You" badge icon
- `ArrowRight` -- CTA links + "Actionable Steps" badge icon

All icons: `size={26} color="white" strokeWidth={1.6}` on cards, `size={14} strokeWidth={2}` on badges.

## SECTION-BY-SECTION BREAKDOWN

### 1. PAGE WRAPPER

- Full viewport height: `min-h-screen flex items-center justify-center p-10`
- Background: `#0d0d0d` with grid pattern (48px grid lines, `rgba(255,255,255,0.04)`)
- Content container: `w-full max-w-6xl`

### 2. HEADER SECTION

- Container: `mb-10`
- **Main heading:** "How We Keep You Ahead®" -- `text-5xl font-bold text-white mb-4 tracking-tight font-heading`
- **Subtitle:** "From quick daily updates to deep expert insights, we give you every advantage in the AI revolution." -- `text-gray-400 text-base max-w-md leading-relaxed font-body`
- Bridge text: "Here's how we deliver on that promise every day." -- `text-gray-300 text-sm mb-8 font-body`

### 3. FEATURE CARDS (3-column grid)

Container: `grid grid-cols-3 gap-4 mb-10`

#### Card 1: Daily Newsletter (Orange accent)
- Container: `relative rounded-3xl overflow-hidden flex flex-col p-7`, `min-height: 380px`
- Background: `linear-gradient(160deg, #1a1008 0%, #0d0a06 40%, #1a0a00 100%)`
- Border: `1px solid rgba(255,140,60,0.18)`
- Bottom glow overlay (orange radial gradient, 160px height)
- Icon: `Inbox` in orange-tinted container
- Title: "Daily Newsletter" -- `text-3xl font-bold text-white mb-3 leading-tight font-heading`
- Body: "Your shortcut to staying ahead—delivered every morning." -- `text-gray-400 text-sm leading-relaxed mb-5 font-body`
- CTA: "Get Daily Briefs" + `ArrowRight` icon -- `flex items-center gap-1.5 text-white text-sm font-semibold mt-auto font-body`

#### Card 2: Curated Tools (Blue accent)
- Container: same structure as Card 1
- Background: `linear-gradient(160deg, #080d1a 0%, #07090f 40%, #0a0d1e 100%)`
- Border: `1px solid rgba(80,120,255,0.2)`
- Bottom glow overlay (blue radial gradient)
- Icon: `Wrench` in blue-tinted container
- Title: "Curated Tools"
- Body: "The most powerful AI apps and platforms—tested and reviewed for you."
- CTA: "Find My Tools" + `ArrowRight` icon

#### Card 3: Expert Insights (Green accent)
- Container: same structure as Card 1
- Background: `linear-gradient(160deg, #071410 0%, #060d0a 40%, #091a0f 100%)`
- Border: `1px solid rgba(40,200,100,0.2)`
- Bottom glow overlay (green radial gradient)
- Icon: `Brain` in green-tinted container
- Title: "Expert Insights"
- Body: "Actionable analysis from researchers and founders shaping the future of AI."
- CTA: "Unlock Insights" + `ArrowRight` icon

### 4. BADGES BAR (bottom trust signals)

Container: `flex items-center gap-8`

Three inline badges, each: `flex items-center gap-2 text-gray-400 text-sm font-body`
1. `Zap` icon -- "Always Current"
2. `Target` icon -- "Focused for You"
3. `ArrowRight` icon -- "Actionable Steps"

Badge icons: `size={14} strokeWidth={2} className="text-gray-500"`

## ANIMATION PATTERNS (Framer Motion additions)

### 1. StaggerReveal (cards)
Cards appear one by one from below with a subtle fade:
- Each card: `motion.div` with `initial={{ opacity: 0, y: 30 }}` -> `animate={{ opacity: 1, y: 0 }}`
- Stagger: 150ms delay between each card
- Duration: 0.5s, ease: `[0.25, 0.1, 0.25, 1]`

### 2. FadeInUp (header)
- Heading: `motion.h1` with `initial={{ opacity: 0, y: 20 }}` -> `animate={{ opacity: 1, y: 0 }}`, delay 0s
- Subtitle: same animation, delay 0.15s
- Bridge text: same animation, delay 0.3s

### 3. FadeInUp (badges)
- Badge bar: `motion.div` with `initial={{ opacity: 0 }}` -> `animate={{ opacity: 1 }}`, delay 0.6s
- Individual badges stagger with 100ms between each

### 4. GlowPulse (card bottom glows)
- The radial glow on each card subtly pulses: `animate={{ opacity: [0.7, 1, 0.7] }}`, `transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}`

### 5. HoverScale (cards)
- On hover, each card slightly lifts: `whileHover={{ y: -4, transition: { duration: 0.2 } }}`
- The bottom glow intensifies on hover: glow opacity goes from 0.7 to 1

### 6. IconFloat (card icons)
- Each card icon gently floats: `animate={{ y: [-2, 2, -2] }}`, `transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}`

## DESIGN PATTERNS USED THROUGHOUT

- **All card containers:** `relative rounded-3xl overflow-hidden flex flex-col p-7`
- **All card titles:** `text-3xl font-bold text-white mb-3 leading-tight font-heading`
- **All body text:** `text-gray-400 text-sm leading-relaxed mb-5 font-body`
- **All CTAs:** `flex items-center gap-1.5 text-white text-sm font-semibold mt-auto font-body`
- **Radial glows:** Always positioned `absolute bottom-0`, 160px height, `pointer-events: none`
- **Icon containers:** `w-14 h-14 rounded-2xl flex items-center justify-center` with color-matched tinted bg and border
- **Grid pattern:** 48px grid lines at `rgba(255,255,255,0.04)` opacity on the `#0d0d0d` background

## KEY DEPENDENCIES

```json
{
  "motion": "^12.35.0",
  "lucide-react": "^0.344.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

Icons used from lucide-react: `Inbox`, `Wrench`, `Brain`, `Zap`, `Target`, `ArrowRight`

## OVERALL PAGE STRUCTURE

```
<div min-h-screen bg-[#0d0d0d] grid-pattern p-10 flex items-center justify-center>
  <div max-w-6xl>
    <motion.div mb-10>                          // Header
      <motion.h1> ... heading ... </motion.h1>
      <motion.p> ... subtitle ... </motion.p>
    </motion.div>
    <motion.p> ... bridge text ... </motion.p>
    <div grid grid-cols-3 gap-4 mb-10>          // Cards
      <motion.div card-newsletter> ... </motion.div>
      <motion.div card-tools> ... </motion.div>
      <motion.div card-insights> ... </motion.div>
    </div>
    <motion.div flex gap-8>                      // Badges
      <span> Zap + "Always Current" </span>
      <span> Target + "Focused for You" </span>
      <span> ArrowRight + "Actionable Steps" </span>
    </motion.div>
  </div>
</div>
```

## RESPONSIVE BREAKPOINTS

- **Mobile (<768px):** Cards stack vertically (`grid-cols-1`), heading scales to `text-3xl`, padding reduces to `p-6`
- **Tablet (768-1024px):** Cards in 2-column grid (`md:grid-cols-2`), third card spans full width
- **Desktop (>1024px):** Full 3-column grid (`lg:grid-cols-3`), heading at `text-5xl`, padding at `p-10`
