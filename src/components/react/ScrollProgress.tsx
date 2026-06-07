import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const fn = () => {
      const d = document.documentElement
      setP((window.scrollY / (d.scrollHeight - d.clientHeight)) * 100)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, zIndex: 9997,
      height: '3px', width: `${p}%`,
      background: 'linear-gradient(90deg, #fed12c, #ffec80)',
      boxShadow: '0 0 14px rgba(254,209,44,0.7)',
      transition: 'width 0.08s linear',
      pointerEvents: 'none',
    }} />
  )
}
