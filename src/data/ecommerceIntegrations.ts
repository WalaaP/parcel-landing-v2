export interface Integration {
  name: string
  icon: string
  desc: string
}

export const integrations: Integration[] = [
  { name: 'Shopify',      icon: '🛍️', desc: 'One-click plugin. Auto-sync all orders.' },
  { name: 'Salla',        icon: '🏪', desc: 'Native integration for GCC merchants.' },
  { name: 'WooCommerce',  icon: '🌐', desc: 'WordPress plugin with full feature support.' },
  { name: 'Zid',          icon: '⚡', desc: 'Direct API connection for Zid stores.' },
  { name: 'REST API',     icon: '🔗', desc: 'Build any integration with our full API.' },
  { name: 'Webhooks',     icon: '🔔', desc: 'Real-time order event notifications.' },
]

export const apiFeatures: string[] = [
  'REST API with JSON responses',
  'Webhooks for real-time events',
  'Sandbox environment for testing',
  'SDKs for Node.js, Python, PHP',
  'Rate limit: 1,000 req/min on standard plans',
]
