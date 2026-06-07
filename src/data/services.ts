export interface Service {
  id: string
  tier: string
  badge: string
  tagline: string
  image: string
  accentColor: string
  glowColor: string
  gradient: string
  features: string[]
  href: string
}

export const services: Service[] = [
  {
    id:          'instant',
    tier:        'INSTANT',
    badge:       '⚡ FASTEST',
    tagline:     'Delivered within hours. City-wide.',
    image:       'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    accentColor: '#ff4d4d',
    glowColor:   'rgba(255, 77, 77, 0.25)',
    gradient:    'linear-gradient(170deg, rgba(6,15,24,0.2) 0%, rgba(6,15,24,0.98) 75%)',
    features:    ['Real-time courier matching', 'Live GPS every 30 seconds', 'Contactless & signed handoff', 'Priority routing algorithm'],
    href:        '/services#instant',
  },
  {
    id:          'sameday',
    tier:        'SAME DAY',
    badge:       '★ MOST POPULAR',
    tagline:     'Order today. In your hands today.',
    image:       'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=85',
    accentColor: '#fed12c',
    glowColor:   'rgba(254, 209, 44, 0.25)',
    gradient:    'linear-gradient(170deg, rgba(6,15,24,0.15) 0%, rgba(6,15,24,0.98) 75%)',
    features:    ['Smart multi-stop routing', 'Automated dispatch engine', 'Proactive SMS alerts', 'Digital proof of delivery'],
    href:        '/services#sameday',
  },
  {
    id:          'nextday',
    tier:        'NEXT DAY',
    badge:       '◈ BEST VALUE',
    tagline:     'Scheduled precision. Nationwide.',
    image:       'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=85',
    accentColor: '#14507a',
    glowColor:   'rgba(20, 80, 122, 0.35)',
    gradient:    'linear-gradient(170deg, rgba(6,15,24,0.15) 0%, rgba(6,15,24,0.98) 75%)',
    features:    ['Flexible pickup windows', 'Consolidated warehousing', 'Volume discount pricing', 'Full GCC coverage'],
    href:        '/services#nextday',
  },
]
