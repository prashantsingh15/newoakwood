import {
  Destination,
  Package,
  MembershipTier,
  Testimonial,
  FAQItem,
  Stat,
  GalleryImage,
} from "@/app/types";

export const HERO_VIDEOS = [
  {
    id: "maldives",
    src: "https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4",
    fallbackImage:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1920&auto=format&fit=crop",
    label: "Maldives",
  },
  {
    id: "switzerland",
    src: "https://videos.pexels.com/video-files/3031956/3031956-hd_1920_1080_24fps.mp4",
    fallbackImage:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1920&auto=format&fit=crop",
    label: "Switzerland",
  },
  {
    id: "bali",
    src: "https://videos.pexels.com/video-files/2951787/2951787-hd_1920_1080_30fps.mp4",
    fallbackImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1920&auto=format&fit=crop",
    label: "Bali",
  },
  {
    id: "dubai",
    src: "https://videos.pexels.com/video-files/3214448/3214448-hd_1920_1080_24fps.mp4",
    fallbackImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop",
    label: "Dubai",
  },
];

export const NAV_LINKS = [
  { name: "Destinations", href: "#destinations" },
  { name: "Packages", href: "#packages" },
  { name: "Membership", href: "#membership" },
  { name: "Experiences", href: "#experiences" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const STATS: Stat[] = [
  { id: "destinations", value: 120, suffix: "+", label: "Destinations" },
  { id: "members", value: 8500, suffix: "+", label: "Happy Members" },
  { id: "experience", value: 15, suffix: "+", label: "Years Experience" },
  { id: "rating", value: 4.9, suffix: "/5", label: "Average Rating" },
];

export const DESTINATION_CATEGORIES = [
  "All",
  "Beach",
  "Mountains",
  "City",
  "Adventure",
  "Romantic",
  "Cultural",
];

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: "maldives",
    name: "Maldives",
    country: "Indian Ocean",
    category: "Beach",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
    priceFrom: 2499,
    description:
      "Crystal-clear waters, overwater villas, and untouched marine life.",
    coordinates: { x: 65, y: 55 },
  },
  {
    id: "switzerland",
    name: "Swiss Alps",
    country: "Switzerland",
    category: "Mountains",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
    priceFrom: 3299,
    description:
      "Snow-capped peaks, luxury chalets, and world-class skiing.",
    coordinates: { x: 49, y: 30 },
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    category: "Cultural",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    priceFrom: 1899,
    description:
      "Temples, rice terraces, and serene beachfront retreats.",
    coordinates: { x: 78, y: 58 },
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    category: "City",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    priceFrom: 2799,
    description:
      "Futuristic skyline, desert safaris, and opulent hospitality.",
    coordinates: { x: 58, y: 42 },
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    category: "Romantic",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    priceFrom: 2199,
    description:
      "Iconic white-washed villages and breathtaking sunsets.",
    coordinates: { x: 52, y: 34 },
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    category: "Cultural",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    priceFrom: 2599,
    description:
      "Ancient temples, bamboo groves, and refined traditions.",
    coordinates: { x: 85, y: 35 },
  },
  {
    id: "capetown",
    name: "Cape Town",
    country: "South Africa",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=800&auto=format&fit=crop",
    priceFrom: 1999,
    description:
      "Dramatic coastlines, vineyards, and wildlife encounters.",
    coordinates: { x: 51, y: 78 },
  },
  {
    id: "patagonia",
    name: "Patagonia",
    country: "Argentina",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1531761535209-180857e963b9?q=80&w=800&auto=format&fit=crop",
    priceFrom: 3499,
    description:
      "Raw glaciers, towering peaks, and endless wilderness.",
    coordinates: { x: 28, y: 80 },
  },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "silver",
    name: "Silver",
    price: 299,
    period: "year",
    description: "Perfect for occasional luxury escapes.",
    benefits: [
      "Member-only rates",
      "24/7 concierge support",
      "Early access to new destinations",
      "Complimentary room upgrades",
    ],
    color: "from-slate-400 to-slate-300",
  },
  {
    id: "gold",
    name: "Gold",
    price: 799,
    period: "year",
    description: "Our most popular plan for discerning travelers.",
    featured: true,
    benefits: [
      "Everything in Silver",
      "Priority booking window",
      "Free airport transfers",
      "Exclusive experience credits",
      "Dedicated travel advisor",
    ],
    color: "from-amber-400 to-yellow-300",
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 1999,
    period: "year",
    description: "The ultimate passport to extraordinary journeys.",
    benefits: [
      "Everything in Gold",
      "Private jet arrangements",
      "Bespoke itinerary design",
      "VIP lounge access",
      "Personal travel concierge",
      "Invite-only events",
    ],
    color: "from-zinc-200 to-white",
  },
];

export const HOLIDAY_PACKAGES: Package[] = [
  {
    id: "maldives-escape",
    title: "Maldives Overwater Escape",
    destination: "Maldives",
    duration: "7 Days / 6 Nights",
    price: 4899,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
    video:
      "https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4",
    highlights: [
      "Overwater villa",
      "Private infinity pool",
      "Sunset dolphin cruise",
    ],
    rating: 4.9,
  },
  {
    id: "alps-chalet",
    title: "Swiss Alps Luxury Chalet",
    destination: "Zermatt, Switzerland",
    duration: "5 Days / 4 Nights",
    price: 5699,
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop",
    video:
      "https://videos.pexels.com/video-files/3031956/3031956-hd_1920_1080_24fps.mp4",
    highlights: [
      "Matterhorn views",
      "Private chef",
      "Helicopter transfer",
    ],
    rating: 4.8,
  },
  {
    id: "bali-retreat",
    title: "Bali Wellness Retreat",
    destination: "Ubud, Bali",
    duration: "6 Days / 5 Nights",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
    video:
      "https://videos.pexels.com/video-files/2951787/2951787-hd_1920_1080_30fps.mp4",
    highlights: [
      "Jungle villa",
      "Daily spa treatments",
      "Private yoga sessions",
    ],
    rating: 4.7,
  },
  {
    id: "dubai-luxe",
    title: "Dubai Ultra-Luxe Week",
    destination: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: 4599,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    video:
      "https://videos.pexels.com/video-files/3214448/3214448-hd_1920_1080_24fps.mp4",
    highlights: [
      "Burj Al Arab stay",
      "Desert safari",
      "Yacht dinner cruise",
    ],
    rating: 4.9,
  },
  {
    id: "santorini-romance",
    title: "Santorini Romantic Getaway",
    destination: "Santorini, Greece",
    duration: "4 Days / 3 Nights",
    price: 3899,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "Caldera suite",
      "Private wine tasting",
      "Sunset catamaran",
    ],
    rating: 4.8,
  },
];

export const WHY_US_ITEMS = [
  {
    id: "support",
    title: "24×7 Support",
    description: "Round-the-clock assistance wherever you roam.",
    icon: "Headset",
  },
  {
    id: "verified",
    title: "Verified Hotels",
    description: "Every property is personally inspected by us.",
    icon: "ShieldCheck",
  },
  {
    id: "flexible",
    title: "Flexible Booking",
    description: "Change plans with confidence and ease.",
    icon: "CalendarClock",
  },
  {
    id: "price",
    title: "Best Price",
    description: "Member rates that beat public booking sites.",
    icon: "BadgePercent",
  },
  {
    id: "worldwide",
    title: "Worldwide Destinations",
    description: "Curated stays across 120+ destinations.",
    icon: "Globe",
  },
  {
    id: "exclusive",
    title: "Exclusive Membership",
    description: "Access experiences money usually cannot buy.",
    icon: "Crown",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Eleanor Whitmore",
    role: "Gold Member",
    location: "New York, USA",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Oakwood transformed how we travel. Every detail was flawless, from the private transfers to the surprise anniversary dinner.",
  },
  {
    id: "2",
    name: "James & Sarah Chen",
    role: "Platinum Member",
    location: "Singapore",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "The level of personalization is unmatched. They know our preferences before we do. Truly a luxury experience.",
  },
  {
    id: "3",
    name: "Marcus Andersen",
    role: "Silver Member",
    location: "London, UK",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Incredible value and impeccable service. Our family trip to Bali was the easiest vacation we have ever planned.",
  },
  {
    id: "4",
    name: "Sofia Rossi",
    role: "Gold Member",
    location: "Milan, Italy",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "I have traveled with many agencies, but Oakwood feels like having a friend in every destination.",
  },
  {
    id: "5",
    name: "David & Emma Thompson",
    role: "Platinum Member",
    location: "Sydney, Australia",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "From Patagonia to Paris, every journey has been extraordinary. The membership pays for itself.",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
    alt: "Maldives villa",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
    alt: "Swiss Alps",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    alt: "Bali temple",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    alt: "Dubai skyline",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    alt: "Santorini sunset",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    alt: "Kyoto bamboo",
    span: "md:col-span-2",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=800&auto=format&fit=crop",
    alt: "Cape Town coast",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1531761535209-180857e963b9?q=80&w=800&auto=format&fit=crop",
    alt: "Patagonia glacier",
  },
];

export const PARTNERS = [
  "Four Seasons",
  "Aman",
  "Ritz-Carlton",
  "St. Regis",
  "Mandarin Oriental",
  "One&Only",
  "Belmond",
  "Rosewood",
];

export const FAQS: FAQItem[] = [
  {
    id: "1",
    question: "How does the Oakwood membership work?",
    answer:
      "Membership grants you access to exclusive rates, priority booking, dedicated concierge support, and invite-only travel experiences across our curated portfolio of 120+ destinations.",
  },
  {
    id: "2",
    question: "Can I book without a membership?",
    answer:
      "Yes, select packages are available to non-members. However, members enjoy significantly better rates, upgrades, and perks on every booking.",
  },
  {
    id: "3",
    question: "What is your cancellation policy?",
    answer:
      "We offer flexible cancellation on most bookings up to 14 days before departure. Members receive even more flexible terms and full concierge assistance.",
  },
  {
    id: "4",
    question: "Do you arrange flights and transfers?",
    answer:
      "Absolutely. Our team can coordinate private jets, business class flights, airport transfers, and every detail of your journey.",
  },
  {
    id: "5",
    question: "How do I contact my dedicated travel advisor?",
    answer:
      "Gold and Platinum members are assigned a dedicated advisor accessible via phone, email, or WhatsApp 24/7.",
  },
];
