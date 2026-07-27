import { useState, useEffect, useRef } from 'react'
import logoImg from './imports/logo.png'
import bowlImg from './imports/bowl.jpeg'

function Twemoji({ emoji, className }: { emoji: string; className?: string }) {
  const code = [...emoji].map(c => c.codePointAt(0)!.toString(16)).filter(c => c.length > 0 && c !== 'fe0f').join('-')
  return <img src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/${code}.png`} alt="" className={className} style={{ width: '1em', height: '1em', verticalAlign: 'middle', display: 'inline-block' }} />
}


function IconChili() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3c0 0 1 3 1 6" />
      <path d="M9 9c1.5 0 3 .5 4 2 2 3 1 8-2 10-2 1.5-5 1-6-1.5C3.5 17 4 12 6 10c.8-.8 1.8-1 3-1z" />
      <path d="M9 4c2-1 4 0 4 2" />
    </svg>
  )
}

function IconStrawberry() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-4 0-7-3.5-7-8 0-3 1.5-5.5 4-7" />
      <path d="M12 21c4 0 7-3.5 7-8 0-3-1.5-5.5-4-7" />
      <path d="M9 6c1-2 3-3 3-3s2 1 3 3" />
      <path d="M12 6v2" />
    </svg>
  )
}

function IconMango() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="13" rx="6" ry="8" transform="rotate(-15 12 13)" />
      <path d="M13 5c1-2 3-2 4-1" />
    </svg>
  )
}

function IconTruck() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h13v13H1z" />
      <path d="M14 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function IconLeaf() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 4 13c0-5 3-9 9-10 0 5 0 9-2 10" />
      <path d="M11 20c0-5 3-8 6-9" />
    </svg>
  )
}

function IconZap() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function IconHeart() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.02-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconArrowRight() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function IconShoppingBag() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function IconMenu() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

const menuItems = [
  {
    name: 'Bowl Clásico',
    desc: 'Piña, sandía, fresa y uvas con chamoy artesanal de Jamaica y tajín. 100% natural.',
    price: '$2.5',
    badge: 'FAVORITO',
    badgeColor: '#D61F26',
    bg: 'radial-gradient(circle at 60% 40%, #ff6b6b44, #fce8d8)',
    emoji: '🍓',
  },
]

const preparacionPasos = [
  { emoji: '🍍', title: 'Elegimos', desc: 'Piña, sandía, fresa y uvas frescas de temporada.' },
  { emoji: '🔪', title: 'Cortamos', desc: 'Fruta fresca picada al momento en cubos perfectos.' },
  { emoji: '🌶️', title: 'Bañamos', desc: 'Chamoy rojo de la casa y tajín al gusto.' },
  { emoji: '🍍', title: 'Servimos', desc: 'En tu bowl listo para disfrutar al instante.' },
]

const galleryItems = [
  { bg: 'radial-gradient(circle at 50% 50%, #D61F2655, #fce8d8)', emoji: '🍓', user: '@fresa.lover', tall: false },
  { bg: 'radial-gradient(circle at 40% 60%, #F6B21A55, #fff8e7)', emoji: '🍍', user: '@piña.chamoy', tall: true },
  { bg: 'radial-gradient(circle at 60% 40%, #D61F2655, #fce8d8)', emoji: '🍓', user: '@fresaconchamoy', tall: false },
  { bg: 'radial-gradient(circle at 50% 30%, #F47B2055, #fff3ec)', emoji: '🌶️', user: '@chamoy.life', tall: false },
  { bg: 'radial-gradient(circle at 45% 55%, #A8CF1855, #fff8e7)', emoji: '🍍', user: '@piña.mx', tall: true },
  { bg: 'radial-gradient(circle at 55% 45%, #8B111355, #fce8d8)', emoji: '🍇', user: '@uvas.conchamoy', tall: false },
  { bg: 'radial-gradient(circle at 50% 50%, #F6B21A55, #fff8e7)', emoji: '🍉', user: '@sandiatime', tall: true },
  { bg: 'radial-gradient(circle at 40% 60%, #A8CF1855, #f0f9d8)', emoji: '🍇', user: '@uvas.tajin', tall: true },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function Nav({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled
    ? (dark ? 'bg-[#0d0d0d] border-b border-[#333]' : 'bg-[#F9F5ED]/80 backdrop-blur-md border-b border-[#111]/10')
    : 'bg-transparent'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-10 justify-between transition-all duration-[400ms] ${navBg}`}
      >
        <a href="#hero" className="flex items-center gap-2">
          <img src={logoImg} alt="ChiliBowl logo" className="h-10 w-auto object-contain" />
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', letterSpacing: '0.03em', color: dark ? '#fff' : '#111' }}>CHILIBOWL</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Menú', 'Nosotros', 'Galería', 'Ubicación'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace('ú', 'u').replace('ó', 'o')}`}
              className="font-bold text-sm tracking-wider hover:text-[#D61F26] transition-colors duration-200"
              style={{ fontFamily: "'Nunito', sans-serif", color: dark ? '#fff' : '#111' }}
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="w-11 h-11 flex items-center justify-center border-2 border-current rounded-none hover:bg-[#D61F26] hover:text-white hover:border-[#D61F26] transition-all duration-[400ms]"
            aria-label="Toggle dark mode"
          >
            {dark ? '☀' : '☾'}
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          style={{ color: dark ? '#fff' : '#111' }}
        >
          <IconMenu />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: '#D61F26' }}
        >
          <button
            className="absolute top-5 right-6 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <IconX />
          </button>
          {['Menú', 'Nosotros', 'Galería', 'Ubicación'].map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace('ú', 'u').replace('ó', 'o')}`}
              onClick={() => setMenuOpen(false)}
              className="text-white text-5xl mb-6 hover:text-[#F6B21A] transition-colors"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em', animationDelay: `${i * 0.08}s` }}
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => { setDark(!dark); setMenuOpen(false) }}
            className="mt-4 text-white text-lg font-bold"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {dark ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </div>
      )}
    </>
  )
}

function Hero({ dark }: { dark: boolean }) {
  return (
    <section
      id="hero"
      className="min-h-dvh flex items-center relative overflow-hidden pt-16"
      style={{
        background: dark
          ? '#0d0d0d'
          : 'linear-gradient(135deg, #F9F5ED 0%, #fce8d8 25%, #fff3e0 50%, #fce8d8 75%, #F9F5ED 100%)',
        backgroundSize: '400% 400%',
        animation: 'meshFlow 12s ease infinite',
      }}
    >
      <span className="animate-float-erratic absolute top-16 left-[6%] text-5xl select-none hidden md:block" style={{ animationDuration: '4.5s' }}><Twemoji emoji="🌶️" /></span>
      <span className="animate-float-erratic absolute top-32 right-[10%] text-4xl select-none hidden md:block" style={{ animationDuration: '5.5s', animationDelay: '0.6s', color: '#D61F26' }}><Twemoji emoji="🍓" /></span>
      <span className="animate-float-erratic absolute bottom-28 left-[18%] text-3xl select-none hidden md:block" style={{ animationDuration: '6s', animationDelay: '1s' }}><Twemoji emoji="🥭" /></span>
      <span className="animate-float-erratic absolute bottom-20 right-[6%] text-4xl select-none hidden md:block" style={{ animationDuration: '4.8s', animationDelay: '0.4s' }}><Twemoji emoji="🍍" /></span>

      <div className="max-w-[1120px] mx-auto px-6 md:px-10 w-full grid md:grid-cols-5 gap-8 items-center py-16">
        <div className="md:col-span-3">
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.2rem, 7vw, 5.5rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.05,
              color: dark ? '#fff' : '#111',
            }}
          >
            {'Donde el sabor se vuelve adicción'.split(' ').map((word, i) => (
              <span
                key={i}
                className="animate-word inline-block mr-[0.2em]"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  color: word === 'adicción' ? '#D61F26' : undefined,
                  opacity: 0,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-[48ch]"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: dark ? '#aaa' : '#555',
              animationDelay: '0.6s',
              opacity: 0,
            }}
          >
            Piña, sandía, fresa y uvas bañadas en chamoy artesanal de Jamaica. El sabor que vuelve adicción.
          </p>

          <div
            className="animate-fade-up flex flex-wrap gap-4 mt-8"
            style={{ animationDelay: '0.8s', opacity: 0 }}
          >
            <a
              href="#menu"
              className="inline-flex items-center gap-[10px] px-9 py-[14px] font-display text-white transition-all duration-250 rounded-full"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.3rem',
                letterSpacing: '0.03em',
                backgroundColor: '#D61F26',
                boxShadow: '0 4px 14px rgba(214,31,38,0.35)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#F47B20'
                el.style.boxShadow = '0 8px 24px rgba(244,123,32,0.4)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#D61F26'
                el.style.boxShadow = '0 4px 14px rgba(214,31,38,0.35)'
                el.style.transform = ''
              }}
            >
              <IconShoppingBag /> VER MENÚ
            </a>

            <a
              href="#nosotros"
              className="inline-flex items-center gap-[10px] px-9 py-[14px] rounded-full transition-all duration-250"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.3rem',
                letterSpacing: '0.03em',
                backgroundColor: dark ? '#1a1a1a' : '#fff',
                boxShadow: dark ? 'none' : '0 4px 14px rgba(0,0,0,0.08)',
                color: '#D61F26',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#F6B21A'
                el.style.boxShadow = '0 8px 24px rgba(246,178,26,0.3)'
                el.style.transform = 'translateY(-2px)'
                el.style.color = '#111'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = dark ? '#1a1a1a' : '#fff'
                el.style.boxShadow = dark ? 'none' : '0 4px 14px rgba(0,0,0,0.08)'
                el.style.transform = ''
                el.style.color = '#D61F26'
              }}
            >
              <IconArrowRight /> CONOCENOS
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center items-center">
          <div
            className="animate-scale-in relative"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <img
              src={logoImg}
              alt="ChiliBowl — Piña, Sandía, Fresa, Uvas con Chamoy"
              className="w-full max-w-[400px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Divider() {
  return (
    <div
      className="h-8 flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(90deg, #D61F26, #F47B20, #F6B21A)' }}
    >
      <span
        className="text-white text-xs tracking-[0.2em] font-bold select-none whitespace-nowrap animate-marquee"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(0.6rem, 2.5vw, 0.75rem)' }}
      >
        ★ DULCE ★ PICANTE ★ IRRESISTIBLE ★ FRESA ★ MANGO ★ CHAMOY ★ DULCE ★ PICANTE ★ IRRESISTIBLE ★
        ★ DULCE ★ PICANTE ★ IRRESISTIBLE ★ FRESA ★ MANGO ★ CHAMOY ★ DULCE ★ PICANTE ★ IRRESISTIBLE ★
      </span>
    </div>
  )
}

function Nosotros({ dark }: { dark: boolean }) {
  const { ref, inView } = useInView()
  const text = dark ? '#fff' : '#111'
  const muted = dark ? '#aaa' : '#555'
  const surface = dark ? '#1a1a1a' : '#fff'

  const items = [
    { icon: <IconLeaf />, title: 'SIEMPRE FRESCO', desc: 'Ingredientes de temporada cortados al momento. Sin conservadores, sin pretextos.' },
    { icon: <IconTruck />, title: 'RÁPIDO Y A TIEMPO', desc: 'Pedidos listos en minutos.' },
    { icon: <IconHeart />, title: 'HECHO CON AMOR', desc: 'Receta familiar perfeccionada en cada bowl. Cada mordida cuenta la historia.' },
  ]

  return (
    <section id="nosotros" className="py-20 md:py-28" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <div ref={ref} className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <div
              className={inView ? 'animate-fade-up' : 'opacity-0'}
              className="md:ml-[-1rem]"
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(5rem, 12vw, 10rem)',
                  lineHeight: 0.9,
                  color: 'transparent',
                  WebkitTextStroke: '3px #D61F26',
                  letterSpacing: '0.02em',
                  marginBottom: '0.5rem',
                }}
              >
                3
              </div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.6rem',
                  letterSpacing: '0.05em',
                  color: text,
                }}
              >
                INGREDIENTES
              </div>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.95rem', color: muted, marginTop: '6px', maxWidth: '32ch' }}>
                Piña, sandía, fresa y uvas bañadas en chamoy artesanal de Jamaica. 100% natural.
              </p>
              <div className="flex gap-5 mt-8">
                <span className="text-3xl animate-float" style={{ animationDuration: '3s' }}><Twemoji emoji="🍓" /></span>
                <span className="text-3xl animate-float" style={{ animationDuration: '3.5s', animationDelay: '0.3s' }}><Twemoji emoji="🥭" /></span>
                <span className="text-3xl animate-float" style={{ animationDuration: '2.8s', animationDelay: '0.6s' }}><Twemoji emoji="🌶️" /></span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-0">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`${inView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{
                  animationDelay: `${i * 0.12 + 0.15}s`,
                  borderTop: i > 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  paddingTop: i > 0 ? '1.5rem' : 0,
                  paddingBottom: i < items.length - 1 ? '1.5rem' : 0,
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#D61F26',
                    color: '#fff',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '0.03em', color: text, margin: 0 }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.9rem', color: muted, lineHeight: 1.6, margin: '4px 0 0' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Menu({ dark }: { dark: boolean }) {
  const { ref, inView } = useInView()
  const [modalOpen, setModalOpen] = useState(false)
  const item = menuItems[0]
  const cream = dark ? '#0d0d0d' : '#F9F5ED'
  const surface = dark ? '#1a1a1a' : '#fff'
  const text = dark ? '#fff' : '#111'
  const muted = dark ? '#aaa' : '#555'

  return (
    <section id="menu" style={{ backgroundColor: cream }} className="py-20">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <h2
          className="mb-12"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '0.03em', color: text }}
        >
          NUESTRO <span style={{ color: '#D61F26' }}>MENÚ</span>
        </h2>

        <div
          ref={ref}
          className={`grid gap-8 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', alignItems: 'start' }}
        >
          <div
            onClick={() => setModalOpen(true)}
            style={{
              backgroundColor: surface,
              borderRadius: '1rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              maxWidth: '340px',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = ''
              el.style.boxShadow = '0 8px 30px rgba(0,0,0,0.06)'
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '1/1' }}
            >
              <img src={bowlImg} alt="Bowl Clásico ChiliBowl" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} />
              <span
                className="absolute top-3 right-3"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '0.65rem',
                  letterSpacing: '0.05em',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  backgroundColor: item.badgeColor,
                  color: '#fff',
                }}
              >
                {item.badge}
              </span>
            </div>
            <div style={{ padding: '0.75rem 1rem 1rem' }}>
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.03em', color: text, margin: 0 }}>
                  {item.name}
                </h3>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: '#D61F26', flexShrink: 0 }}>
                  {item.price}
                </span>
              </div>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.82rem', color: muted, lineHeight: 1.4, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>

          {/* Modal */}
          {modalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
              onClick={() => setModalOpen(false)}
            >
              <div
                className="w-full max-w-md animate-scale-in"
                style={{
                  backgroundColor: surface,
                  borderRadius: '1.25rem',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
                  maxHeight: '90dvh',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onClick={e => e.stopPropagation()}
              >
                <div className="relative flex-shrink-0"><img src={bowlImg} alt="Bowl Clásico ChiliBowl" className="w-full object-cover" style={{ maxHeight: '30vh' }} /><button onClick={() => setModalOpen(false)} className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', cursor: 'pointer' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button></div>
                <div style={{ padding: '1.25rem 1.25rem 1.5rem', overflowY: 'auto' }}>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', letterSpacing: '0.03em', color: text, margin: 0 }}>
                      {item.name}
                    </h3>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#D61F26', flexShrink: 0 }}>
                      {item.price}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.9rem', color: muted, lineHeight: 1.5, margin: '0.5rem 0 1.25rem' }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 0.75rem', backgroundColor: dark ? '#222' : '#f5f5f0', borderRadius: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>🍍</span>
                      <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.85rem', color: text }}>Piña, sandía, fresa y uvas frescas</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 0.75rem', backgroundColor: dark ? '#222' : '#f5f5f0', borderRadius: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>🌶️</span>
                      <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.85rem', color: text }}>Chamoy artesanal de Jamaica + tajín</span>
                    </div>
                  </div>

                  <details style={{ marginBottom: '1rem' }}>
                    <summary
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '1rem',
                        letterSpacing: '0.03em',
                        color: text,
                        cursor: 'pointer',
                        padding: '0.5rem 0',
                        userSelect: 'none',
                      }}
                    >
                      💳 MÉTODOS DE PAGO
                    </summary>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                      {[
                        { bank: 'Banco de Loja', account: '2902116304', type: 'Ahorros' },
                        { bank: 'Banco Pichincha', account: '2211729644', type: 'Ahorros' },
                        { bank: 'Banco de Guayaquil', account: '0025303062', type: 'Ahorros' },
                        { bank: 'Cooperativa Mego', account: '401010937170', type: 'Ahorros' },
                      ].map((b) => (
                        <div
                          key={b.bank}
                          className="group relative"
                          style={{
                            padding: '0.6rem 0.75rem',
                            backgroundColor: dark ? '#222' : '#f5f5f0',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            userSelect: 'all',
                          }}
                          onClick={() => navigator.clipboard.writeText(b.account)}
                        >
                          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.8rem', fontWeight: 700, color: text }}>
                            {b.bank}
                          </div>
                          <div style={{ fontSize: '0.9rem', color: '#D61F26', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                            {b.account}
                          </div>
                          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.7rem', color: muted, marginTop: '1px' }}>
                            Cuenta de {b.type} &middot; Titular: Rosa Hurtado
                          </div>
                          <span
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                            style={{ fontFamily: "'Nunito', sans-serif", color: muted }}
                          >
                            📋 Copiar
                          </span>
                        </div>
                      ))}
                    </div>
                  </details>

                  <a
                    href={`https://wa.me/593988683156?text=${encodeURIComponent('¡Hola! Quiero pedir un Bowl Clásico 🍍')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full transition-all duration-250"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.3rem',
                      letterSpacing: '0.03em',
                      padding: '14px 0',
                      borderRadius: '999px',
                      backgroundColor: '#25D366',
                      color: '#fff',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.backgroundColor = '#1ebe5d'
                      el.style.transform = 'translateY(-2px)'
                      el.style.boxShadow = '0 8px 24px rgba(37,211,102,0.45)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.backgroundColor = '#25D366'
                      el.style.transform = ''
                      el.style.boxShadow = '0 4px 14px rgba(37,211,102,0.35)'
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.21 8.21 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.22 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28z"/></svg>
                    PEDIR POR WHATSAPP
                  </a>

                  <button
                    onClick={() => setModalOpen(false)}
                    className="w-full mt-3 text-center text-sm transition-colors"
                    style={{ fontFamily: "'Nunito', sans-serif", color: muted, background: 'none', border: 'none', cursor: 'pointer', padding: '12px 8px' }}
                    onMouseEnter={e => (e.currentTarget.style.color = text)}
                    onMouseLeave={e => (e.currentTarget.style.color = muted)}
                  >
                    Seguir viendo el menú
                  </button>
                </div>
              </div>
            </div>
          )}

          <div>
            <h3
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', letterSpacing: '0.03em', color: text, marginBottom: '1.5rem' }}
            >
              ASÍ LO <span style={{ color: '#D61F26' }}>PREPARAMOS</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {preparacionPasos.map((paso, i) => (
                <div
                  key={paso.title}
                  className={`${inView ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${0.3 + i * 0.12}s`,
                    display: 'flex',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderLeft: '2px solid rgba(214,31,38,0.25)',
                    marginLeft: '1.25rem',
                    position: 'relative',
                    transition: 'border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderLeftColor = '#D61F26'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderLeftColor = 'rgba(214,31,38,0.25)'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '-0.375rem',
                      top: '1.2rem',
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: i === preparacionPasos.length - 1 ? '#A8CF18' : '#D61F26',
                      border: '2px solid transparent',
                    }}
                  />
                  <div style={{ flexShrink: 0, fontSize: '1.6rem', marginTop: '0.1rem' }}><Twemoji emoji={paso.emoji} /></div>
                  <div>
                    <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '0.03em', color: text, margin: 0 }}>
                      {paso.title}
                    </h4>
                    <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.85rem', color: muted, lineHeight: 1.4, margin: '2px 0 0' }}>
                      {paso.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Diferenciadores() {
  const { ref, inView } = useInView()

  const items = [
    { icon: <IconLeaf />, title: 'INGREDIENTES FRESCOS', desc: 'Seleccionamos las mejores frutas de temporada cada mañana. Cero conservadores.' },
    { icon: <IconZap />, title: 'PREPARACIÓN EXPRESS', desc: 'Tu bowl listo en menos de 5 minutos. Rápido sin sacrificar calidad ni sabor.' },
    { icon: <IconTruck />, title: 'DELIVERY DISPONIBLE', desc: 'Enviamos por Uber Eats, DiDi y Rappi. También puedes pasar a recoger.' },
  ]

  return (
    <section style={{ backgroundColor: '#111111' }} className="py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <h2
          className="mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '0.03em', color: '#fff' }}
        >
          POR QUÉ <span style={{ color: '#A8CF18' }}>CHILIBOWL</span>
        </h2>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1rem', color: '#888', marginBottom: '3rem', maxWidth: '45ch' }}>
          Tres razones por las que no vas a querer compartir tu bowl.
        </p>

        <div ref={ref} className="flex flex-col">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`${inView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{
                animationDelay: `${i * 0.12}s`,
                borderTop: i > 0 ? '1px solid rgba(168,207,24,0.15)' : 'none',
                paddingTop: i > 0 ? '2rem' : 0,
                paddingBottom: i < items.length - 1 ? '2rem' : 0,
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '1.25rem',
                alignItems: 'start',
                transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(168,207,24,0.12)',
                  color: '#A8CF18',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', letterSpacing: '0.03em', color: '#A8CF18', margin: '0 0 6px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.92rem', color: '#999', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Galeria({ dark }: { dark: boolean }) {
  const { ref, inView } = useInView()
  const text = dark ? '#fff' : '#111'

  return (
    <section id="galeria" style={{ backgroundColor: dark ? '#0d0d0d' : '#fff' }} className="py-20">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <h2
          className="mb-2 hidden"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '0.03em', color: text }}
        >
          #CHILIBOWL
        </h2>
        <p className="hidden" style={{ fontFamily: "'Nunito', sans-serif", color: dark ? '#aaa' : '#555', marginBottom: '2.5rem', maxWidth: '50ch' }}>
          La comunidad habla. Etiquétanos y aparece aquí.
        </p>

        {galleryItems.length === 0 ? (
          <div ref={ref} className="flex flex-col items-center justify-center py-16 text-center" style={{ opacity: inView ? 1 : 0 }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#D61F26', color: '#fff' }}>
              <IconInstagram />
            </div>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.1rem', color: dark ? '#aaa' : '#555', margin: 0 }}>
              Nadie ha etiquetado aún.
            </p>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.9rem', color: dark ? '#666' : '#999', marginTop: '4px' }}>
              Comparte tu bowl con <strong>#ChiliBowl</strong> y aparece aquí.
            </p>
          </div>
        ) : (
        <div ref={ref} className="masonry-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group cursor-pointer overflow-hidden ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{
                background: item.bg,
                borderRadius: '0.75rem',
                animationDelay: `${i * 0.04}s`,
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = ''
              }}
            >
              <div
                className="flex items-center justify-center w-full"
                style={{
                  aspectRatio: item.tall ? '3/4' : '1/1',
                }}
              >
                <span style={{ fontSize: '2.5rem' }}><Twemoji emoji={item.emoji} /></span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-250"
                style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  paddingTop: '2rem',
                }}
              >
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.75rem', color: '#fff', fontWeight: 700 }}>
                  {item.user}
                </span>
              </div>
            </div>
          ))}
        </div>)}
      </div>
    </section>
  )
}

function Ubicacion({ dark }: { dark: boolean }) {
  const { ref, inView } = useInView()
  const cream = dark ? '#111' : '#F9F5ED'
  const surface = dark ? '#1a1a1a' : '#fff'
  const text = dark ? '#fff' : '#111'
  const muted = dark ? '#aaa' : '#555'

  return (
    <section id="ubicacion" style={{ backgroundColor: cream }} className="py-20">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <h2
          className="mb-12"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '0.03em', color: text }}
        >
          DÓNDE <span style={{ color: '#D61F26' }}>ENCONTRARNOS</span>
        </h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-10">
          <div
            className={inView ? 'animate-fade-up' : 'opacity-0'}
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              backgroundColor: surface,
              aspectRatio: '4/3',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
            }}
          >
            <span style={{ fontSize: '4rem' }}>📍</span>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.03em', color: text, margin: 0 }}>
              MAPA PRÓXIMAMENTE
            </p>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.85rem', color: muted, margin: 0 }}>
              Google Maps embed aquí
            </p>
          </div>

          <div
            className={`flex flex-col gap-6 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.15s' }}
          >
            {[
              { icon: <IconMapPin />, label: 'Dirección', value: 'Av. Insurgentes 1234, Col. Roma, CDMX' },
              { icon: <IconClock />, label: 'Horario', value: 'Lun–Vie 10am–9pm · Sáb–Dom 9am–10pm' },
              { icon: <IconPhone />, label: 'Teléfono', value: '+52 55 1234 5678' },
            ].map((info) => (
              <div key={info.label} className="flex gap-4 items-start">
                <div
                  className="flex-shrink-0 flex items-center justify-center text-white"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#D61F26',
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '0.04em', color: text }}>
                    {info.label}
                  </div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.95rem', color: muted, marginTop: 2 }}>
                    {info.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-2">
              {[
                { icon: <IconInstagram />, label: 'Instagram' },
                { icon: <IconFacebook />, label: 'Facebook' },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    border: '1px solid rgba(0,0,0,0.1)',
                    color: text,
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.backgroundColor = '#D61F26'
                    el.style.color = '#fff'
                    el.style.borderColor = '#D61F26'
                    el.style.transform = 'translateY(-2px)'
                    el.style.boxShadow = '0 4px 12px rgba(214,31,38,0.3)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.backgroundColor = 'transparent'
                    el.style.color = text
                    el.style.borderColor = 'rgba(0,0,0,0.1)'
                    el.style.transform = ''
                    el.style.boxShadow = ''
                  }}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTAFinal() {
  return (
    <section style={{ backgroundColor: '#D61F26' }} className="py-20 md:py-24 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              letterSpacing: '0.03em',
              color: '#fff',
              marginBottom: '1rem',
            }}
          >
            ¿LISTO PARA TU PRIMER BOWL?
          </h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', fontSize: '1.05rem', maxWidth: '40ch' }}>
            Pide tu bowl ahora y te lo llevamos en minutos. Directo a tu puerta.
          </p>

          <a
            href="#menu"
            className="inline-flex items-center gap-[10px] rounded-full transition-all duration-250"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.4rem',
              letterSpacing: '0.03em',
              backgroundColor: '#fff',
              color: '#D61F26',
              padding: '14px 40px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#F6B21A'
              el.style.color = '#111'
              el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#fff'
              el.style.color = '#D61F26'
              el.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)'
              el.style.transform = ''
            }}
          >
            <IconShoppingBag /> PEDIR AHORA
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src={bowlImg} alt="ChiliBowl" className="w-full max-w-[320px] object-contain rounded-2xl shadow-2xl" style={{ transform: 'rotate(3deg)' }} />
        </div>
      </div>
    </section>
  )
}

function Footer({ dark }: { dark: boolean }) {
  const muted = dark ? '#aaa' : '#888'

  return (
    <footer style={{ backgroundColor: '#111111' }} className="py-14">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 grid gap-12 md:grid-cols-3">
        <div>
          <img src={logoImg} alt="ChiliBowl" className="h-16 w-auto object-contain mb-4" style={{ filter: 'brightness(1.1)' }} />
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.85rem', color: muted, maxWidth: '28ch', lineHeight: 1.6 }}>
            Piña, sandía, fresa y uvas con chamoy artesanal. Hecho en Loja, Ecuador.
          </p>
        </div>

        {[
          {
            title: 'MENÚ', links: [{ name: 'Bowl Clásico', href: '#menu' }],
          },
          {
            title: 'CONTACTO', links: [{ name: 'WhatsApp', href: 'https://wa.me/593988683156' }],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '0.05em', color: '#A8CF18', marginBottom: '1rem' }}
            >
              {col.title}
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {col.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.88rem', color: muted, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#F6B21A')}
                    onMouseLeave={e => (e.currentTarget.style.color = muted)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-[1120px] mx-auto px-6 md:px-10 mt-10 pt-6" style={{ borderTop: '1px solid #222' }}>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.8rem', color: '#555', margin: 0 }}>
          © 2026 ChiliBowl. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Nunito', sans-serif" }}>
      <Nav dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <Divider />
      <Nosotros dark={dark} />
      <Menu dark={dark} />
      <Diferenciadores />
      {/* <Galeria dark={dark} /> */}
      <CTAFinal />
      <Footer dark={dark} />
    </div>
  )
}
