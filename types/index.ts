export interface MediaKitData {
  quote1: string
  name: string
  title: string
  about: string
  mission: string
  vision: string
  values: string
  photo: string | null
  stats: {
    instagram: string
    tiktok: string
    reach: string
    posts: string
  }
  portfolioQuote: string
  companies: Company[]
  storiesLink: string
  packagesQuote: string
  packages: Package[]
  services: string[]
  finalQuote: string
  contact: {
    email: string
    phone: string
    instagram: string
    whatsapp: string
  }
}

export interface Company {
  name: string
  link: string
  logo?: string | null  // NOVO: Logo da empresa em círculo
}

export interface Package {
  name: string
  price: string
  description: string
  featured: boolean
}
