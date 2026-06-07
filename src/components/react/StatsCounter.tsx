import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats as localStats } from '../../data/stats'
import type { Stat } from '../../data/stats'

function formatValue(value: number, compact?: boolean, decimal?: boolean): string {
  if (compact) {
    if (value >= 1_000_000) return (value / 1_000_000).toFixed(1) + 'M'
    if (value >= 1_000)     return Math.round(value / 1_000) + 'K'
    return String(Math.round(value))
  }
  if (decimal) return value.toFixed(1)
  return Math.round(value).toLocaleString()
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

const defaultSpark = [30, 50, 60, 75, 88, 100]

function Counter({ stat, index }: { stat: Stat; index: number }) {
  const ref        = useRef<HTMLDivElement>(null)
  const isInView   = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true

    const duration  = 1800
    const startTime = performance.now()
    const endValue  = stat.value
    let rafId: number

    const frame = (now: number) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(easeOut(progress) * endValue)
      if (progress < 1) rafId = requestAnimationFrame(frame)
      else setCount(endValue)
    }

    rafId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, stat.value])

  const spark = stat.spark ?? defaultSpark

  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="stat-sparkline" aria-hidden="true">
        <svg viewBox="0 0 60 28" preserveAspectRatio="none">
          {spark.map((h, i) => (
            <rect
              key={i}
              x={i * 11}
              y={28 - h * 0.28}
              width="8"
              height={h * 0.28}
              rx="2"
              fill="rgba(254,209,44,0.25)"
            />
          ))}
        </svg>
      </div>
      <div className="stat-number">
        {formatValue(count, stat.compact, stat.decimal)}
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  )
}

interface Props {
  stats?: Stat[]
}

export default function StatsCounter({ stats = localStats }: Props) {
  return (
    <div className="stats-grid">
      {stats.map((stat, i) => (
        <Counter key={stat.label} stat={stat} index={i} />
      ))}

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }
        .stat-item {
          padding: 24px 32px;
          border-right: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        .stat-item:last-child { border-right: none; }
        .stat-sparkline {
          width: 60px;
          height: 28px;
          margin-bottom: 12px;
        }
        .stat-sparkline svg { width: 100%; height: 100%; }
        .stat-number {
          font-family: var(--font-display);
          font-size: clamp(40px, 4vw, 64px);
          font-weight: 900;
          color: var(--signal);
          line-height: 1;
          letter-spacing: -0.02em;
          font-variant-numeric: tabular-nums;
        }
        .stat-suffix {
          font-size: 0.5em;
          vertical-align: super;
          font-weight: 700;
        }
        .stat-label {
          font-family: var(--font-ui);
          font-size: 13px;
          color: var(--ink-muted);
          margin-top: 6px;
          letter-spacing: 0.02em;
        }
        @media (max-width: 1023px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
          .stat-item:nth-child(3) { border-right: none; }
        }
        @media (max-width: 639px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-item { padding: 20px; }
          .stat-item:nth-child(2n) { border-right: none; }
        }
      `}</style>
    </div>
  )
}
