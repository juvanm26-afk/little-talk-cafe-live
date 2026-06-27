import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarHeart, CakeSlice, Coffee, Heart, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SmartForm } from "@/components/SmartForm";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Private Events & Gatherings in Leigh-on-Sea",
  description:
    "Plan a baby shower, birthday, afternoon tea, family gathering or small private event at Little Talk Cafe in Leigh-on-Sea."
};

const eventTypes = [
  {
    icon: CakeSlice,
    title: "Baby showers",
    text: "A bright, welcoming setting for friends and family to celebrate together."
  },
  {
    icon: CalendarHeart,
    title: "Birthdays",
    text: "A relaxed way to mark a birthday with brunch, coffee, food boards or afternoon tea."
  },
  {
    icon: Coffee,
    title: "Afternoon tea",
    text: "A cosy café atmosphere for a slower, more personal celebration."
  },
  {
    icon: Users,
    title: "Family gatherings",
    text: "A comfortable local space for bringing people together without it feeling too formal."
  }
];

const galleryImages = [
  {
    src: "/images/venue-boards.jpg",
    alt: "Food boards for a private event at Little Talk Cafe"
  },
  {
    src: "/images/charcuterie.jpg",
    alt: "Grazing board and event food at Little Talk Cafe"
  },
  {
    src: "/images/hero-interior.jpg",
    alt: "Warm interior of Little Talk Cafe in Leigh-on-Sea"
  }
];

export default function VenueHirePage() {
  return (
    <main>
      <PageHero
        eyebrow="Private Events & Gatherings"
        title="Celebrate at Little Talk Cafe."
        text="A warm Leigh-on-Sea café setting for baby showers, birthdays, afternoon teas, family gatherings and smaller private events."
        variant="venue"
      >
        <div className="buttonRow">
          <Link className="button gold" href="/contact#venue-enquiry">Send venue enquiry</Link>
          <a className="button light" href="tel:+441702883027">Call 01702 883027</a>
        </div>
      </PageHero>

      <section className="eventsIntro">
        <div>
          <p className="eyebrow">Not just a hired room</p>
          <h2>A café setting that already feels warm, relaxed and personal.</h2>
        </div>
        <p>
          Little Talk Cafe is suited to smaller celebrations where the atmosphere matters as much as the food. It works well for daytime gatherings, family moments, relaxed birthdays and events that should feel thoughtful without feeling overly formal.
        </p>
      </section>

      <section className="eventPhotoStrip">
        {galleryImages.map((image) => (
          <Image key={image.src} src={image.src} alt={image.alt} width={760} height={560} />
        ))}
      </section>

      <section className="eventTypesBlock">
        <SectionHeader
          eyebrow="Popular occasions"
          title="Made for special moments."
          text="From baby showers to birthdays, the café is a warm setting for smaller, more personal gatherings."
          centered
        />
        <div className="eventTypeGrid">
          {eventTypes.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="eventFoodBlock slimEventFoodBlock">
        <div className="eventFoodCards">
          <article>
            <Coffee size={20} />
            <h3>Brunch gatherings</h3>
            <p>Great for birthdays, family meetups and relaxed daytime celebrations.</p>
          </article>
          <article>
            <Heart size={20} />
            <h3>Afternoon tea</h3>
            <p>A softer option for baby showers, catch-ups and smaller special moments.</p>
          </article>
          <article>
            <Users size={20} />
            <h3>Sharing-style food</h3>
            <p>Boards and café favourites help the table feel full and welcoming.</p>
          </article>
        </div>
      </section>

      <section className="eventEnquiryPanel realEventFormPanel" id="event-enquiry">
        <div>
          <p className="eyebrow">Event enquiry</p>
          <h2>Tell us what you are planning.</h2>
          <p>
            Share a few details about your plans and the café team will get back to you as soon as possible.
          </p>
        </div>

        <SmartForm
          className="eventEnquiryForm"
          subject="New venue hire enquiry — Little Talk Cafe"
          formType="Venue hire enquiry"
          successMessage="Thanks — your venue hire enquiry has been sent. The café team will get back to you as soon as possible."
        >
          <label>
            Your name
            <input name="Name" type="text" placeholder="Your name" required />
          </label>

          <label>
            Phone or email
            <input name="Contact" type="text" placeholder="Best way to contact you" required />
          </label>

          <label>
            Event type
            <select name="Event type" defaultValue="">
              <option value="" disabled>Choose one</option>
              <option>Baby shower</option>
              <option>Birthday</option>
              <option>Afternoon tea</option>
              <option>Family gathering</option>
              <option>Other private event</option>
            </select>
          </label>

          <div className="formSplit">
            <label>
              Preferred date
              <input name="Preferred date" type="date" required />
            </label>

            <label>
              Guests
              <input name="Guest number" type="number" min="1" placeholder="e.g. 20" required />
            </label>
          </div>

          <label>
            Message
            <textarea
              name="Message"
              rows={5}
              placeholder="Tell us about food, drinks, timings or anything else you have in mind."
            />
          </label>
              <button className="button dark" type="submit">Send venue enquiry</button>
            </SmartForm>
      </section>

      <section className="stepsBlock eventSteps">
        <p className="eyebrow">Simple planning</p>
        <h2>Enquire, plan, celebrate.</h2>
        <div className="steps">
          <article>
            <b>1</b>
            <h3>Share your idea</h3>
            <p>Tell the café what you are celebrating and when you are hoping to hold it.</p>
          </article>
          <article>
            <b>2</b>
            <h3>Shape the food</h3>
            <p>Choose the style of food and drinks that suits the occasion.</p>
          </article>
          <article>
            <b>3</b>
            <h3>Enjoy the day</h3>
            <p>Arrive to a warm café setting that feels personal and welcoming.</p>
          </article>
        </div>
      </section>

      <section className="finalCta">
        <p className="eyebrow">Private events</p>
        <h2>Planning something special in Leigh-on-Sea?</h2>
        <div className="buttonRow centered">
          <Link className="button gold" href="/contact#venue-enquiry">Send venue enquiry</Link>
          <a className="button light" href="tel:+441702883027"><Phone size={16} /> Call the café</a>
        </div>
      </section>
    </main>
  );
}
