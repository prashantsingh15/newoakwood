import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oakwood Holiday | Luxury Travel Membership",
  description:
    "Discover extraordinary journeys across the world. Explore handpicked destinations, premium stays, exclusive member benefits, and unforgettable travel experiences with Oakwood Holiday.",
  keywords: [
    "luxury travel",
    "travel membership",
    "premium holidays",
    "exclusive destinations",
    "Oakwood Holiday",
  ],
  authors: [{ name: "Oakwood Holiday" }],
  creator: "Oakwood Holiday",
  publisher: "Oakwood Holiday",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oakwoodholiday.com",
    siteName: "Oakwood Holiday",
    title: "Oakwood Holiday | Luxury Travel Membership",
    description:
      "Discover extraordinary journeys across the world. Handpicked destinations, premium stays, and exclusive member benefits.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1920&auto=format&fit=crop",
        width: 1920,
        height: 1080,
        alt: "Oakwood Holiday Luxury Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oakwood Holiday | Luxury Travel Membership",
    description:
      "Discover extraordinary journeys across the world. Handpicked destinations, premium stays, and exclusive member benefits.",
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1920&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://oakwoodholiday.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Oakwood Holiday",
  url: "https://oakwoodholiday.com",
  logo: "https://oakwoodholiday.com/logo.png",
  description:
    "Luxury travel membership platform offering handpicked destinations, premium stays, and exclusive member benefits.",
  sameAs: [
    "https://instagram.com/oakwoodholiday",
    "https://facebook.com/oakwoodholiday",
    "https://twitter.com/oakwoodholiday",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
