export interface Stat {
  value: number
  suffix: string
  label: string
  compact?: boolean
  decimal?: boolean
  spark: number[]
}

export const stats: Stat[] = [
  { value: 6,       suffix: '+',  label: 'Years serving Bahrain', spark: [40,55,60,70,80,100] },
  { value: 2000000, suffix: '+',  label: 'Orders delivered',       compact: true, spark: [20,35,50,65,80,100] },
  { value: 500,     suffix: '+',  label: 'Active businesses',      spark: [30,40,55,70,85,100] },
  { value: 12,      suffix: '+',  label: 'Cities covered',         spark: [50,60,65,75,90,100] },
  { value: 98.7,    suffix: '%',  label: 'On-time delivery',       decimal: true, spark: [88,91,94,96,97,100] },
]
