import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 80,  damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80,  damping: 20 })
  const snapX   = useSpring(mouseX, { stiffness: 500, damping: 28 })
  const snapY   = useSpring(mouseY, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const move = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY) }
    window.addEventListener('mousemove', move)

    const expand  = () => document.getElementById('cursor-ring')?.classList.add('expanded')
    const shrink  = () => document.getElementById('cursor-ring')?.classList.remove('expanded')
    const targets = document.querySelectorAll('a, button, [data-cursor-expand]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        id="cursor-ring"
        style={{ left: springX, top: springY, position: 'fixed', pointerEvents: 'none', zIndex: 99999, transform: 'translate(-50%, -50%)' }}
        className="cursor-ring"
      />
      <motion.div
        style={{ left: snapX, top: snapY, position: 'fixed', pointerEvents: 'none', zIndex: 99999, transform: 'translate(-50%, -50%)' }}
        className="cursor-dot"
      />
    </>
  )
}
