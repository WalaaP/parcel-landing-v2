import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const demoOrder = {
  id: 'PCL-00482',
  status: 'In Transit',
  eta: '2:30 PM',
  steps: [
    { label: 'Picked up',        time: '10:15 AM', done: true,  active: false },
    { label: 'Sorting facility', time: '11:02 AM', done: true,  active: false },
    { label: 'In transit',       time: 'Now',      done: true,  active: true  },
    { label: 'Out for delivery', time: '—',        done: false, active: false },
    { label: 'Delivered',        time: '—',        done: false, active: false },
  ],
}

interface Props {
  placeholder?: string
  trackBtn?: string
  notFoundMsg?: string
}

export default function TrackingWidget({ placeholder, trackBtn, notFoundMsg }: Props) {
  const inputPlaceholder = placeholder ?? 'Enter your order ID (e.g. PCL-00482)'
  const btnLabel         = trackBtn    ?? 'Track →'
  const notFound         = notFoundMsg ?? 'Order not found. Try "PCL-00482" for a demo.'

  const [query, setQuery] = useState('')
  const [result, setResult] = useState<typeof demoOrder | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    setLoading(true)
    setError('')
    setResult(null)

    setTimeout(() => {
      setLoading(false)
      if (query.trim().toUpperCase() === 'PCL-00482' || query.trim() === 'demo') {
        setResult(demoOrder)
      } else {
        setError(notFound)
      }
    }, 1200)
  }

  return (
    <div className="tracking-widget">
      <form onSubmit={handleTrack} className="track-form">
        <div className="track-input-wrap">
          <svg className="track-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={inputPlaceholder}
            className="track-input"
            aria-label="Order tracking ID"
          />
        </div>
        <button type="submit" className="track-btn" disabled={loading}>
          {loading ? (
            <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite', width: 16, height: 16, border: '2px solid rgba(9,39,61,0.3)', borderTopColor: '#09273d', borderRadius: '50%' }} />
          ) : btnLabel}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ color: 'var(--red)', fontFamily: 'var(--font-ui)', fontSize: 14, marginTop: 12 }}
          >
            {error}
          </motion.p>
        )}
        {result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
            className="track-result"
          >
            <div className="track-row">
              <span className="order-id">{result.id}</span>
              <span className="status-pill">🟢 {result.status.toUpperCase()}</span>
            </div>

            <div className="map-area">
              <div className="map-grid"></div>
              <svg className="map-route" viewBox="0 0 340 160" aria-hidden="true">
                <path d="M30,130 C80,110 140,80 200,70 S280,50 320,40"
                      fill="none" stroke="rgba(254,209,44,0.3)"
                      strokeWidth="2" strokeDasharray="6 4"/>
                <circle cx="30" cy="130" r="5" fill="#22c55e"/>
                <circle cx="320" cy="40" r="5" fill="#ef4444"/>
                <circle className="courier-dot" cx="0" cy="0" r="7" fill="#fed12c">
                  <animateMotion dur="6s" repeatCount="indefinite"
                    path="M30,130 C80,110 140,80 200,70 S280,50 320,40"/>
                </circle>
              </svg>
              <div className="map-badge">
                <span className="map-live-dot"></span>
                Updating live
              </div>
            </div>

            <div className="track-timeline">
              {result.steps.map(step => (
                <div key={step.label} className={`t-step${step.done ? ' done' : ''}${step.active ? ' active' : ''}`}>
                  <div className="t-dot"></div>
                  <span className="t-label">{step.label}</span>
                  <span className="t-time">{step.time}</span>
                </div>
              ))}
            </div>

            <div className="eta-row">
              <span className="eta-label">Estimated Arrival</span>
              <span className="eta-time">{result.eta}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .tracking-widget { width: 100%; }
        .track-form {
          display: flex;
          gap: 12px;
          width: 100%;
        }
        .track-input-wrap {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
        }
        .track-icon {
          position: absolute;
          left: 16px;
          color: var(--ink-faint);
          pointer-events: none;
        }
        .track-input {
          width: 100%;
          background: var(--navy);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 14px 16px 14px 46px;
          font-family: var(--font-ui);
          font-size: 15px;
          color: var(--ink);
          outline: none;
          transition: border-color 0.2s ease;
        }
        .track-input::placeholder { color: var(--ink-faint); }
        .track-input:focus { border-color: var(--signal); }
        .track-btn {
          background: var(--signal);
          color: var(--ink-inverse);
          font-family: var(--font-ui);
          font-weight: 700;
          font-size: 14px;
          padding: 14px 28px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .track-btn:hover:not(:disabled) {
          background: var(--signal-dim);
          transform: translateY(-1px);
        }
        .track-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .track-result {
          margin-top: 24px;
          background: var(--navy);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 20px;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
