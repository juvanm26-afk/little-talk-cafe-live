import Image from "next/image";
import Link from "next/link";
import { Coffee, MapPin, CalendarHeart, Phone, Sparkles, Utensils, CakeSlice } from "lucide-react";
import { OfferModal } from "@/components/OfferModal";
import { SectionHeader } from "@/components/SectionHeader";

const events = [
  "Baby showers",
  "Birthday brunches",
  "Afternoon tea",
  "Family gatherings",
  "Work lunches",
  "Small private parties"
];

const eventCards = [
  {
    title: "Baby Showers",
    text: "A warm daytime setting for family, friends, food and photos.",
    image: "/images/venue-boards.jpg"
  },
  {
    title: "Birthday Brunches",
    text: "Celebrate with breakfast, brunch, coffee and sharing boards.",
    image: "/images/breakfast-spread.jpg"
  },
  {
    title: "Afternoon Tea & Gatherings",
    text: "A relaxed café atmosphere for smaller, more personal occasions.",
    image: "/images/charcuterie.jpg"
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Independent café • Leigh-on-Sea</p>
          <h1>Breakfast, brunch & coffee in Leigh-on-Sea.</h1>
          <p className="lead">
            Freshly prepared food, proper coffee and a warm local space for everyday visits and special moments.
          </p>
          <div className="buttonRow">
            <Link className="button dark" href="/menu">View menu</Link>
            <Link className="button gold" href="/venue-hire">Private events</Link>
            <Link className="button light" href="/contact#reserve">Reserve a table</Link>
          </div>
          <div className="trustRow">
            <span><Coffee size={16} /> Coffee</span>
            <span><Utensils size={16} /> Brunch</span>
            <span><CakeSlice size={16} /> Sweet treats</span>
            <span><CalendarHeart size={16} /> Events</span>
          </div>
        </div>

        <div className="heroMedia">
          <Image className="heroMain" src="/images/hero-interior.jpg" alt="Interior of Little Talk Cafe in Leigh-on-Sea" width={900} height={650} priority />
          <Image className="heroSide" src="/images/venue-boards.jpg" alt="Food boards for private events at Little Talk Cafe" width={520} height={420} />
          <div className="heroCard">
            <Sparkles size={18} />
            <strong>Special gatherings welcome</strong>
            <span>Baby showers • birthdays • afternoon teas</span>
          </div>
        </div>
      </section>

      <section className="infoDock">
        <a href="tel:+441702883027"><Phone size={18} /><small>Call</small><strong>01702 883027</strong></a>
        <a href="https://www.google.com/maps/search/?api=1&query=Little+Talk+Cafe+1090+London+Rd+Leigh-on-Sea+SS9+3NA"><MapPin size={18} /><small>Find us</small><strong>1090 London Rd</strong></a>
        <Link href="/venue-hire"><CalendarHeart size={18} /><small>Events</small><strong>Private gatherings</strong></Link>
      </section>

      <section className="splitSection">
        <SectionHeader
          eyebrow="Café by day, gathering space when it matters"
          title="A local café made for food, comfort and bringing people together."
          text="Little Talk Cafe should feel like the easy choice for breakfast, coffee catch-ups, family brunches and smaller celebrations that still feel personal."
        />
        <div className="storyPanel">
          <p>
            Whether you are popping in for coffee, meeting for brunch or planning a smaller celebration, Little Talk Cafe keeps things warm, relaxed and personal.
          </p>
          <Link className="textLink" href="/venue-hire">Explore private events →</Link>
        </div>
      </section>

      <section className="featureGrid">
        <article className="featureCard">
          <Image src="/images/coffee-cups.jpg" alt="Coffee and hot drinks at Little Talk Cafe" width={600} height={420} />
          <div><h3>Coffee & catch-ups</h3><p>Warm, relaxed and local.</p></div>
        </article>
        <article className="featureCard">
          <Image src="/images/avocado-eggs.jpg" alt="Brunch dish at Little Talk Cafe" width={600} height={420} />
          <div><h3>Breakfast & brunch</h3><p>Fresh café favourites with a cosy feel.</p></div>
        </article>
        <article className="featureCard featureDark">
          <Image src="/images/venue-boards.jpg" alt="Venue hire food boards at Little Talk Cafe" width={600} height={420} />
          <div><h3>Private events</h3><p>Baby showers, birthdays, afternoon teas and intimate gatherings.</p><Link href="/venue-hire">Plan a gathering →</Link></div>
        </article>
      </section>

      <section className="venueBand">
        <div>
          <p className="eyebrow">Private events in Leigh-on-Sea</p>
          <h2>Celebrate at Little Talk Cafe.</h2>
          <p>
            From baby showers and birthdays to afternoon teas and small family gatherings, Little Talk Cafe offers a warm setting with food and drink options shaped around your plans.
          </p>
          <div className="buttonRow">
            <Link className="button gold" href="/venue-hire">View private events</Link>
            <Link className="button outline" href="/contact#venue-enquiry">Send an enquiry</Link>
          </div>
        </div>
        <ul className="eventList">
          {events.map((event) => <li key={event}>{event}</li>)}
        </ul>
      </section>


      <section className="eventShowcase simpleEvents">
        <SectionHeader
          eyebrow="Special moments"
          title="Small events, made personal."
          text="For birthdays, baby showers, afternoon teas and family gatherings, Little Talk Cafe offers a warm setting without feeling like a plain hired room."
          centered
        />
        <div className="simpleEventGrid">
          {eventCards.map((card) => (
            <article key={card.title}>
              <Image src={card.image} alt={`${card.title} at Little Talk Cafe`} width={700} height={520} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="galleryTease">
        <SectionHeader
          eyebrow="Gallery"
          title="A warm local spot in Leigh-on-Sea."
          text="Food, drinks, the space and event setups all show the cosy, welcoming feel of Little Talk Cafe."
          centered
        />
        <div className="imageMosaic">
          <Image src="/images/hero-interior.jpg" alt="Little Talk Cafe interior seating" width={520} height={520} />
          <Image src="/images/coffee-cups.jpg" alt="Coffee and hot drinks at Little Talk Cafe" width={520} height={520} />
          <Image src="/images/avocado-eggs.jpg" alt="Brunch dish at Little Talk Cafe" width={520} height={520} />
          <Image src="/images/exterior.jpg" alt="Exterior of Little Talk Cafe in Leigh-on-Sea" width={520} height={520} />
        </div>
      </section>

      <section className="finalCta">
        <p className="eyebrow">Visit or celebrate</p>
        <h2>Breakfast, brunch, coffee and private events in Leigh-on-Sea.</h2>
        <div className="buttonRow centered">
          <Link className="button dark" href="/contact">Contact & directions</Link>
          <Link className="button gold" href="/venue-hire">Private events</Link>
        </div>
      </section>

      <OfferModal />
    </main>
  );
}
