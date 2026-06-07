export interface Step {
  number: string
  icon:   string
  title:  string
  desc:   string
}

export const steps: Step[] = [
  {
    number: '01',
    icon:   '📲',
    title:  'Place Your Order',
    desc:   'Book via our app, website, or API integration. Set pickup address, drop-off, and choose your delivery speed.',
  },
  {
    number: '02',
    icon:   '⚡',
    title:  'Instant Dispatch',
    desc:   'Our AI engine matches your order to the nearest available courier and auto-dispatches within minutes.',
  },
  {
    number: '03',
    icon:   '📍',
    title:  'Real-Time Tracking',
    desc:   "Watch your package move on a live map. Every 30 seconds, your courier's position updates in real time.",
  },
  {
    number: '04',
    icon:   '✅',
    title:  'Proof of Delivery',
    desc:   "A photo, GPS stamp, and timestamp are captured at every handoff — logged and accessible in your dashboard.",
  },
]
