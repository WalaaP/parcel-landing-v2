export interface TechFeature {
  icon:  string
  title: string
  desc:  string
}

export const techFeatures: TechFeature[] = [
  { icon: '📍', title: 'Live GPS Tracking',       desc: 'Every courier tracked every 30 seconds' },
  { icon: '🔔', title: 'Proactive Notifications', desc: 'SMS + email on every status change' },
  { icon: '📊', title: 'Merchant Dashboard',      desc: 'Full analytics on deliveries, returns, SLAs' },
  { icon: '🔗', title: 'E-Commerce API',          desc: 'Native Shopify, Salla, WooCommerce plugins' },
  { icon: '🧠', title: 'AI Route Optimization',   desc: 'Dynamic re-routing around traffic in real time' },
  { icon: '📷', title: 'Proof of Delivery',       desc: 'Photo + GPS coordinate + timestamp on every drop' },
]
