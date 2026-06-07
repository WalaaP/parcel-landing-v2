export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
  initials: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    quote: "Parcel transformed our delivery operations overnight. Our customers now expect same-day delivery as a standard — and Parcel never lets us down. The real-time tracking alone has cut our support tickets by 60%.",
    name: "Fatima Al-Rashid",
    role: "Operations Director",
    company: "Gulf Retail Co.",
    initials: "FA",
    rating: 5,
  },
  {
    quote: "We integrated Parcel's API with our Shopify store in under two hours. The documentation is excellent, the support team is genuinely helpful, and the delivery reliability is unlike anything we've experienced in Bahrain.",
    name: "Ahmed Khalil",
    role: "Founder & CEO",
    company: "Manama Eats",
    initials: "AK",
    rating: 5,
  },
  {
    quote: "As a pharmacy, we need absolute certainty on delivery timelines. Parcel's 98.7% on-time rate isn't marketing — we've verified it ourselves. For critical healthcare deliveries, that reliability is everything.",
    name: "Dr. Layla Hassan",
    role: "Head of Operations",
    company: "Seef Pharmacy",
    initials: "LH",
    rating: 5,
  },
  {
    quote: "The instant delivery tier is a game-changer for our jewellery business. When a customer in Manama orders a piece for a special occasion, we can get it to them within hours. Our luxury clients love this.",
    name: "Noor Al-Mansoori",
    role: "Managing Director",
    company: "Pearl Jewellers",
    initials: "NM",
    rating: 5,
  },
]
