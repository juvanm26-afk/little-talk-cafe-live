import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of Little Talk Cafe in Leigh-on-Sea including food, coffee, atmosphere and private venue hire."
};

const images = [
  ["/images/hero-interior.jpg", "Interior of Little Talk Cafe", "tall"],
  ["/images/coffee-cups.jpg", "Coffee and hot drinks"],
  ["/images/avocado-eggs.jpg", "Avocado and poached eggs brunch"],
  ["/images/venue-boards.jpg", "Venue hire food boards", "wide"],
  ["/images/breakfast-spread.jpg", "Breakfast and brunch spread"],
  ["/images/exterior.jpg", "Exterior of Little Talk Cafe"],
  ["/images/salmon-eggs.jpg", "Smoked salmon and scrambled eggs"],
  ["/images/fish-chips.jpg", "Fish and chips"],
  ["/images/iced-drink.jpg", "Iced green drink"],
  ["/images/charcuterie.jpg", "Charcuterie board for private hire"]
];

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="A look inside Little Talk Cafe."
        text="Food, drinks, cosy corners and special gatherings in the heart of Leigh-on-Sea."
      />

      <section className="galleryGrid">
        {images.map(([src, alt, className]) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width={800}
            height={800}
            className={className || ""}
          />
        ))}
      </section>
    </main>
  );
}
