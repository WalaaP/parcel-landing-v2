import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const article = document.querySelector('.post-content') as HTMLElement
    if (!article) return

    const fn = () => {
      const rect = article.getBoundingClientRect()
      const start = rect.top + window.scrollY
      const end   = rect.bottom + window.scrollY - window.innerHeight
      const progress = Math.min(Math.max((window.scrollY - start) / (end - start) * 100, 0), 100)
      setP(progress)
    }

    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: '3px', left: 0, zIndex: 9996,
      height: '2px', width: `${p}%`,
      background: 'rgba(254,209,44,0.4)',
      transition: 'width 0.1s linear',
      pointerEvents: 'none',
    }} />
  )
}
