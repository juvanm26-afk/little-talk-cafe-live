import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuickHelp } from "@/components/QuickHelp";

export const metadata: Metadata = {
  metadataBase: new URL("https://littletalkcafe.co.uk"),
  title: {
    default: "Little Talk Cafe | Breakfast, Brunch & Venue Hire in Leigh-on-Sea",
    template: "%s | Little Talk Cafe"
  },
  description:
    "Little Talk Cafe in Leigh-on-Sea for breakfast, brunch, coffee, lunch and private venue hire for birthdays, baby showers and small events.",
  openGraph: {
    title: "Little Talk Cafe",
    description:
      "Breakfast, brunch, coffee and private venue hire in Leigh-on-Sea.",
    url: "https://littletalkcafe.co.uk",
    siteName: "Little Talk Cafe",
    images: ["/images/hero-brunch.svg"],
    locale: "en_GB",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Little Talk Cafe",
    url: "https://littletalkcafe.co.uk",
    telephone: "01702 883027",
    email: "littletalkltd@gmail.com",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1090 London Rd",
      addressLocality: "Leigh-on-Sea",
      postalCode: "SS9 3NA",
      addressCountry: "GB"
    },
    servesCuisine: ["Breakfast", "Brunch", "Lunch", "Coffee"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "14:00"
      }
    ]
  };

  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="topNotice">
          <span>Baby showers, birthdays & private gatherings</span>
          <a href="/venue-hire">View events →</a>
        </div>
        <Nav />
        {children}
        <Footer />
        <QuickHelp />
      </body>
    </html>
  );
}
