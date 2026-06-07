export interface Client {
  name: string
  industry: string
  logo?: string
  initials: string
  color: string
}

export const clients: Client[] = [
  { name: 'Gulf Retail Co.',     industry: 'Retail',         initials: 'GR', color: '#fed12c' },
  { name: 'Manama Eats',         industry: 'Food & Beverage', initials: 'ME', color: '#ff4d4d' },
  { name: 'BahrainTech',        industry: 'Technology',     initials: 'BT', color: '#14507a' },
  { name: 'Pearl Jewellers',    industry: 'Luxury Retail',  initials: 'PJ', color: '#fed12c' },
  { name: 'Seef Pharmacy',      industry: 'Healthcare',     initials: 'SP', color: '#22c55e' },
  { name: 'Desert Rose',        industry: 'Fashion',        initials: 'DR', color: '#ff4d4d' },
  { name: 'Capital Logistics',  industry: 'Logistics',      initials: 'CL', color: '#14507a' },
  { name: 'Bahrain Books',      industry: 'Media & Books',  initials: 'BB', color: '#fed12c' },
  { name: 'AlAhlia Insurance',  industry: 'Finance',        initials: 'AI', color: '#8fa8be' },
  { name: 'Gulf Electronics',   industry: 'Electronics',    initials: 'GE', color: '#14507a' },
  { name: 'Saffron Kitchen',    industry: 'Food & Beverage', initials: 'SK', color: '#ff4d4d' },
  { name: 'NorthStar Realty',   industry: 'Real Estate',    initials: 'NS', color: '#22c55e' },
]
