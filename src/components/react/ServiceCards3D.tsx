import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { Service } from '../../data/services'

function ServiceCard({ service, index, learnMore }: { service: Service; index: number; learnMore: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top  + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setRotate({ x: -dy * 6, y: dx * 6 })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: hovered
          ? 'transform 0.1s ease'
          : 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      className="service-card"
    >
      <div
        className="card-bg"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <div className="card-gradient" style={{ background: service.gradient }} />
      <div
        className="card-glow"
        style={{
          boxShadow: hovered ? `0 40px 120px ${service.glowColor}` : 'none',
          transition: 'box-shadow 0.4s ease',
          position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
        }}
      />
      <div className="card-content">
        <span className="card-badge" style={{ background: service.accentColor + '22', color: service.accentColor, borderColor: service.accentColor + '44' }}>
          {service.badge}
        </span>
        <h3 className="card-tier">{service.tier}</h3>
        <p className="card-tagline">{service.tagline}</p>
        <ul className="card-features">
          {service.features.map(f => (
            <li key={f}><span style={{ color: service.accentColor }}>✓</span> {f}</li>
          ))}
        </ul>
        <a href={service.href} className="card-cta" style={{ background: service.accentColor, color: service.id === 'sameday' ? '#09273d' : '#fff' }}>
          {learnMore}
        </a>
      </div>

      <style>{`
        .service-card {
          position: relative;
          height: 560px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.3s ease;
          flex: 1;
          min-width: 0;
        }
        .service-card:hover { border-color: rgba(254,209,44,0.35); }
        .card-bg {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease, filter 0.3s ease;
        }
        .service-card:hover .card-bg {
          transform: scale(1.04);
          filter: brightness(1.1);
        }
        .card-gradient {
          position: absolute; inset: 0;
        }
        .card-content {
          position: absolute; inset: 0;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 12px;
        }
        .card-badge {
          display: inline-flex;
          align-self: flex-start;
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          border: 1px solid;
          margin-bottom: 8px;
        }
        .card-tier {
          font-family: var(--font-display);
          font-size: clamp(52px, 6vw, 80px);
          font-weight: 900;
          text-transform: uppercase;
          color: #fff;
          line-height: 0.9;
          letter-spacing: -0.02em;
        }
        .card-tagline {
          font-family: var(--font-ui);
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          margin-bottom: 4px;
        }
        .card-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: var(--font-ui);
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          margin-bottom: 8px;
        }
        .card-features li { display: flex; align-items: center; gap: 8px; }
        .card-cta {
          display: inline-flex;
          align-self: flex-start;
          font-family: var(--font-ui);
          font-size: 13px;
          font-weight: 700;
          padding: 10px 22px;
          border-radius: 100px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          margin-top: 4px;
        }
        .card-cta:hover { transform: translateY(-2px); }
      `}</style>
    </motion.div>
  )
}

export default function ServiceCards3D({ services, learnMore = 'Learn More →' }: { services: Service[]; learnMore?: string }) {
  return (
    <div style={{ padding: '0 var(--section-x) var(--section-y)', maxWidth: 'var(--max-width)', margin: '0 auto', display: 'flex', gap: '24px' }}>
      {services.map((service, i) => (
        <ServiceCard key={service.id} service={service} index={i} learnMore={learnMore} />
      ))}

      <style>{`
        @media (max-width: 1023px) {
          div { flex-direction: column; }
          .service-card { height: 480px; }
        }
        @media (max-width: 639px) {
          .service-card { height: 420px; }
        }
      `}</style>
    </div>
  )
}
