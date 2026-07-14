export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  video?: string;
  priceFrom: number;
  category: string;
  description?: string;
  coordinates?: { x: number; y: number };
}

export interface Package {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  image: string;
  video?: string;
  highlights: string[];
  rating: number;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  benefits: string[];
  featured?: boolean;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: string;
}
