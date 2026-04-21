import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Particle config ─────────────────────────────────────────────────────────
const PARTICLE_COUNT = 40;
const rand = (min, max) => Math.random() * (max - min) + min;

const generateParticles = () =>
  Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: rand(0, 100),
    y: rand(0, 100),
    size: rand(1, 2.5),
    opacity: rand(0.06, 0.22),
    duration: rand(8, 22),
    delay: rand(0, 8),
    dy: rand(-50, -15),
    dx: rand(-20, 20),
  }));

// ─── SplitText — letter-by-letter animation ───────────────────────────────────
const SplitText = ({ text, baseDelay = 0, stagger = 0.032, className = '' }) => (
  <span aria-label={text} className={`inline-block ${className}`}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        aria-hidden="true"
        style={{ display: char === ' ' ? 'inline' : 'inline-block', whiteSpace: 'pre' }}
        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{
          duration: 1.1,
          delay: baseDelay + i * stagger,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

// ─── Subtle noise-texture scanline overlay ────────────────────────────────────
const ScanlineOverlay = () => (
  <div
    aria-hidden="true"
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage:
        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)',
      pointerEvents: 'none',
      zIndex: 1,
    }}
  />
);

// ─── Scroll-down indicator ────────────────────────────────────────────────────
const ScrollHint = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 3.0 }}
    style={{
      position: 'absolute',
      bottom: 36,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      zIndex: 10,
    }}
  >
    <span
      style={{
        fontSize: '0.67rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(190,193,207,0.35)',
        fontFamily: "'General Sans', sans-serif",
      }}
    >
      scroll to explore
    </span>
    {/* Animated chevron */}
    <motion.div
      animate={{ y: [0, 7, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}
    >
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
        <path
          d="M1 1L8 8L15 1"
          stroke="rgba(190,193,207,0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ opacity: 0.4 }}>
        <path
          d="M1 1L8 8L15 1"
          stroke="rgba(190,193,207,0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  </motion.div>
);

// ─── Minimal stat pills ───────────────────────────────────────────────────────
const stats = [
  { label: 'Projects', value: '10+' },
  { label: 'Experience', value: '2 yrs' },
  { label: 'Stack', value: 'Full Stack' },
];

const StatPills = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 2.6 }}
    style={{
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 8,
    }}
  >
    {stats.map((s, i) => (
      <motion.div
        key={s.label}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2.6 + i * 0.12 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '8px 18px',
          borderRadius: 8,
          border: '1px solid rgba(190,193,207,0.09)',
          background: 'rgba(14,14,16,0.6)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <span
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#D5D8EA',
            fontFamily: "'General Sans', sans-serif",
            lineHeight: 1.2,
          }}
        >
          {s.value}
        </span>
        <span
          style={{
            fontSize: '0.68rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(190,193,207,0.4)',
            fontFamily: "'General Sans', sans-serif",
            marginTop: 2,
          }}
        >
          {s.label}
        </span>
      </motion.div>
    ))}
  </motion.div>
);

// ─── Loading dots ─────────────────────────────────────────────────────────────
const LoadingDots = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} role="status">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        style={{
          display: 'block',
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: 'rgba(190,193,207,0.5)',
        }}
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
        transition={{ duration: 1.1, delay: i * 0.18, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

// ─── Thin horizontal line (portfolio's subtle divider style) ──────────────────
const Divider = ({ delay = 2.0 }) => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
    style={{
      width: 80,
      height: 1,
      background: 'linear-gradient(90deg, transparent, rgba(190,193,207,0.25), transparent)',
      margin: '2px auto',
      transformOrigin: 'center',
    }}
  />
);

// ─── Main IntroLoader ─────────────────────────────────────────────────────────
/**
 * IntroLoader
 *
 * Props
 *   onComplete  – () => void   called when overlay fully exits (optional)
 *   isReady     – bool         pass true when 3D content is ready
 *   minDuration – number       minimum ms before exit (default 4000)
 */
const IntroLoader = ({ onComplete, isReady = false, minDuration = 4000 }) => {
  const [particles] = useState(generateParticles);
  const [phase, setPhase] = useState('visible');   // 'visible' | 'exiting'
  const [showSubtitle, setShowSubtitle] = useState(false);
  const minTimerRef = useRef(null);
  const exitTriggered = useRef(false);

  const triggerExit = () => {
    if (exitTriggered.current) return;
    exitTriggered.current = true;
    setPhase('exiting');
  };

  // Show "Loading 3D Experience…" after text animation finishes
  useEffect(() => {
    const t = setTimeout(() => setShowSubtitle(true), 2600);
    return () => clearTimeout(t);
  }, []);

  // Minimum display time
  useEffect(() => {
    minTimerRef.current = setTimeout(() => {
      if (isReady) triggerExit();
      else minTimerRef.current = null;
    }, minDuration);
    return () => clearTimeout(minTimerRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // React when isReady arrives after minDuration
  useEffect(() => {
    if (isReady && !minTimerRef.current) triggerExit();
  }, [isReady]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lines — matched to portfolio's grey-silver gradient palette
  const lines = [
    { text: "Hi, I'm Adivigneshwaran 👋", stagger: 0.034, baseDelay: 0.25 },
    { text: 'Full Stack Developer | AI Enthusiast', stagger: 0.026, baseDelay: 0.9 },
    { text: 'Building modern web experiences', stagger: 0.028, baseDelay: 1.6 },
  ];

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== 'exiting' && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            /* Portfolio exact background */
            background: '#010103',
          }}
        >
          {/* ── Subtle radial glow — matches portfolio depth ── */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(30,30,38,0.9) 0%, transparent 80%)',
              pointerEvents: 'none',
            }}
          />

          {/* ── Very faint top-edge glow (like a spotlight from above) ── */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60%',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, rgba(190,193,207,0.12), transparent)',
              pointerEvents: 'none',
            }}
          />

          {/* ── Scanlines ── */}
          <ScanlineOverlay />

          {/* ── Floating particles ── */}
          {particles.map((p) => (
            <motion.span
              key={p.id}
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                borderRadius: '50%',
                background: `rgba(190,193,207,${p.opacity * 2})`,
                pointerEvents: 'none',
                zIndex: 2,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, p.opacity, 0], y: p.dy, x: p.dx }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* ── Main content ── */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 14,
              padding: '0 28px',
              textAlign: 'center',
              maxWidth: 780,
              width: '100%',
            }}
          >
            {/* ── Text lines ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* Line 1 – name (white, medium weight — matches Hero) */}
              <h1
                style={{
                  fontSize: 'clamp(1.25rem, 3.5vw, 2rem)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  fontFamily: "'General Sans', sans-serif",
                  margin: 0,
                }}
              >
                <SplitText
                  text={lines[0].text}
                  baseDelay={lines[0].baseDelay}
                  stagger={lines[0].stagger}
                />
              </h1>

              {/* Line 2 – role (grey gradient — matches hero_tag / text-gray_gradient) */}
              <p
                style={{
                  fontSize: 'clamp(1.4rem, 5vw, 3.2rem)',
                  fontWeight: 900,
                  // Matches .text-gray_gradient exactly
                  background:
                    'linear-gradient(to right, #BEC1CF 0%, #BEC1CF 60%, #D5D8EA 60%, #D5D8EA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                  fontFamily: "'General Sans', sans-serif",
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                }}
              >
                <SplitText
                  text={lines[1].text}
                  baseDelay={lines[1].baseDelay}
                  stagger={lines[1].stagger}
                />
              </p>

              {/* Line 3 – tagline (dimmed white-600) */}
              <p
                style={{
                  fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
                  fontWeight: 400,
                  color: '#AFB0B6',
                  margin: 0,
                  fontFamily: "'General Sans', sans-serif",
                  letterSpacing: '0.01em',
                }}
              >
                <SplitText
                  text={lines[2].text}
                  baseDelay={lines[2].baseDelay}
                  stagger={lines[2].stagger}
                />
              </p>
            </div>

            {/* ── Divider ── */}
            <Divider delay={2.1} />

            {/* ── Stat pills (fade in after text) ── */}
            <StatPills />

            {/* ── Loading subtitle + dots ── */}
            <AnimatePresence>
              {showSubtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                    marginTop: 4,
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(190,193,207,0.38)',
                      fontFamily: "'General Sans', sans-serif",
                      margin: 0,
                    }}
                  >
                    Loading 3D Experience
                  </p>
                  <LoadingDots />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Corner bracket accents — matches portfolio card borders ── */}
          {[
            { top: 20, left: 20, rotate: 0 },
            { top: 20, right: 20, rotate: 90 },
            { bottom: 20, left: 20, rotate: -90 },
            { bottom: 20, right: 20, rotate: 180 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.07 }}
              style={{
                position: 'absolute',
                width: 20,
                height: 20,
                borderTop: '1px solid rgba(190,193,207,0.12)',
                borderLeft: '1px solid rgba(190,193,207,0.12)',
                transform: `rotate(${pos.rotate}deg)`,
                zIndex: 10,
                ...pos,
              }}
            />
          ))}

          {/* ── Scroll-down hint ── */}
          <ScrollHint />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
