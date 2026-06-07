export interface FaqItem {
  question: string
  answer:   string
}

export const servicesFaqs: FaqItem[] = [
  {
    question: 'What areas do you cover in Bahrain?',
    answer:   'Parcel covers all governorates of Bahrain including Capital, Muharraq, Northern, Southern, and Central. We have dense coverage in Manama, Seef, Juffair, Riffa, Hamad Town, and Sitra.',
  },
  {
    question: 'How do I integrate Parcel with my Shopify store?',
    answer:   'We offer a one-click Shopify plugin. Install it from the Shopify App Store, connect your Parcel account, and orders will automatically sync for dispatch. Setup takes under 10 minutes.',
  },
  {
    question: 'What happens if a delivery fails?',
    answer:   'If a delivery fails (customer not home, wrong address, etc.), our system automatically attempts re-delivery and notifies you. You can also set custom instructions per order in your dashboard.',
  },
  {
    question: 'Do you offer cash on delivery (COD)?',
    answer:   'Yes. COD is available on all delivery tiers. Cash is collected by the courier and transferred to your account per agreed settlement schedule (typically T+1 for active accounts).',
  },
  {
    question: 'Is there a minimum order volume?',
    answer:   'No minimum order volume. Whether you have 1 delivery or 1,000 per day, Parcel handles it. Volume discounts kick in at 50+ orders/day on Next Day tier.',
  },
  {
    question: 'What is your SLA for Same Day deliveries?',
    answer:   'Our SLA for Same Day is delivery by 9 PM for orders placed before 2 PM. We currently achieve 98.7% on-time rate. Enterprise clients can negotiate custom SLA terms.',
  },
]

export const ecommerceFaqs: FaqItem[] = [
  {
    question: 'How long does API integration take?',
    answer:   "Most integrations are live within a day. Our Shopify plugin installs in under 10 minutes. Custom API integrations typically take 1–3 hours with our developer docs.",
  },
  {
    question: 'Do you offer warehousing in Bahrain?',
    answer:   "Yes. We operate a fulfillment center in the Hidd Industrial Area. You can store inventory with us, and we'll pick, pack, and dispatch orders automatically.",
  },
  {
    question: 'How are returns handled?',
    answer:   "Reverse logistics is fully supported. Customers can request a return via your store, and we'll collect the item and bring it back to you or to our fulfillment center.",
  },
  {
    question: 'What payment methods do you support for COD?',
    answer:   'Cash on delivery (Bahraini Dinar) is supported. COD amounts are transferred to your account on a T+1 settlement schedule for verified merchant accounts.',
  },
]
