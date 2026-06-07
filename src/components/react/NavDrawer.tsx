import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLink {
  label: string
  href:  string
}

interface Props {
  links: NavLink[]
}

export default function NavDrawer({ links }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          width: '40px',
          height: '40px',
          background: 'none',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '8px',
          padding: '0',
          cursor: 'pointer',
        }}
      >
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            style={{
              display: 'block',
              width: '18px',
              height: '1.5px',
              background: 'var(--ink)',
              borderRadius: '2px',
              transformOrigin: 'center',
            }}
            animate={open ? (
              i === 0 ? { rotate: 45, y: 6.5 } :
              i === 1 ? { opacity: 0 } :
              { rotate: -45, y: -6.5 }
            ) : { rotate: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 9985,
                background: 'rgba(6,15,24,0.7)',
                backdropFilter: 'blur(4px)',
              }}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '300px', zIndex: 9988,
                background: 'var(--navy-mid)',
                borderLeft: '1px solid var(--border)',
                padding: '80px 32px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
              aria-label="Mobile navigation"
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '28px',
                    textTransform: 'uppercase',
                    color: 'var(--ink)',
                    padding: '8px 0',
                    borderBottom: '1px solid var(--border-subtle)',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    background: 'var(--signal)',
                    color: 'var(--ink-inverse)',
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 700,
                    fontSize: '15px',
                    textAlign: 'center',
                    padding: '14px 24px',
                    borderRadius: '100px',
                  }}
                >
                  Get a Quote →
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
