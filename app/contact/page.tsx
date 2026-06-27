import type { Metadata } from "next";
import Link from "next/link";
import { CalendarHeart, Clock, Mail, MapPin, Phone, Send, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SmartForm } from "@/components/SmartForm";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Contact Little Talk Cafe in Leigh-on-Sea, reserve a table, send a private event enquiry, view opening hours and get directions."
};

const hours = [
  ["Monday", "Closed"],
  ["Tuesday", "9 AM – 3 PM"],
  ["Wednesday", "9 AM – 3 PM"],
  ["Thursday", "9 AM – 3 PM"],
  ["Friday", "9 AM – 3 PM"],
  ["Saturday", "9 AM – 3 PM"],
  ["Sunday", "9 AM – 2 PM"]
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Little Talk Cafe"
        title="Book, enquire or find us."
        text="Reserve a table, ask about a private event, or get directions to Little Talk Cafe on London Road in Leigh-on-Sea."
      />

      <section className="contactQuickCards">
        <a href="tel:+441702883027">
          <Phone size={22} />
          <span>Call</span>
          <strong>01702 883027</strong>
        </a>

        <a href="mailto:littletalkltd@gmail.com">
          <Mail size={22} />
          <span>Email</span>
          <strong>littletalkltd@gmail.com</strong>
        </a>

        <a href="https://www.google.com/maps/search/?api=1&query=Little+Talk+Cafe+1090+London+Rd+Leigh-on-Sea+SS9+3NA">
          <MapPin size={22} />
          <span>Address</span>
          <strong>1090 London Rd, Leigh-on-Sea</strong>
        </a>
      </section>

      <section className="contactMainGrid">
        <div className="contactFormsStack">
          <section className="contactFormPanel" id="reserve">
            <div className="contactFormIntro">
              <CalendarHeart size={24} />
              <p className="eyebrow">Table reservation</p>
              <h2>Reserve a table.</h2>
              <p>
                Fill in the details below and the café team will get back to you as soon as possible.
              </p>
            </div>

            <SmartForm
              className="contactForm"
              subject="New table reservation request — Little Talk Cafe"
              formType="Table reservation"
              successMessage="Thanks — your table request has been sent. The café team will get back to you as soon as possible."
            >
              <label>
                Your name
                <input name="Name" type="text" placeholder="Your name" required />
              </label>

              <label>
                Phone or email
                <input name="Contact" type="text" placeholder="Best way to contact you" required />
              </label>

              <div className="formSplit">
                <label>
                  Date
                  <input name="Date" type="date" required />
                </label>

                <label>
                  Time
                  <input name="Time" type="time" required />
                </label>
              </div>

              <label>
                Number of people
                <input name="Number of people" type="number" min="1" placeholder="e.g. 4" required />
              </label>

              <label>
                Notes
                <textarea name="Notes" rows={4} placeholder="Any prams, high chairs, allergies or special notes?" />
              </label>

              <button className="button gold" type="submit">
                <Send size={16} /> Send reservation request
              </button>
            </SmartForm>
          </section>

          <section className="contactFormPanel" id="venue-enquiry">
            <div className="contactFormIntro">
              <Users size={24} />
              <p className="eyebrow">Private events</p>
              <h2>Ask about a gathering.</h2>
              <p>
                For baby showers, birthdays, afternoon teas or family gatherings, send the basics and the café can guide you from there.
              </p>
            </div>

            <SmartForm
              className="contactForm"
              subject="New private event enquiry — Little Talk Cafe"
              formType="Private event enquiry"
              successMessage="Thanks — your private event enquiry has been sent. The café team will get back to you as soon as possible."
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

              <button className="button gold" type="submit">
                <Send size={16} /> Send event enquiry
              </button>
            </SmartForm>
          </section>
        </div>

        <aside className="contactSidePanel">
          <div className="hoursCard">
            <Clock size={24} />
            <p className="eyebrow">Opening hours</p>
            <h2>Visit us this week.</h2>
            <div className="hoursList">
              {hours.map(([day, time]) => (
                <div key={day}>
                  <span>{day}</span>
                  <strong>{time}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="visitCard">
            <MapPin size={24} />
            <p className="eyebrow">Find us</p>
            <h2>1090 London Road</h2>
            <p>Little Talk Cafe, Leigh-on-Sea, SS9 3NA.</p>
            <a
              className="button dark"
              href="https://www.google.com/maps/search/?api=1&query=Little+Talk+Cafe+1090+London+Rd+Leigh-on-Sea+SS9+3NA"
            >
              Open maps
            </a>
          </div>

          <div className="contactNote">
            <p>
              For table bookings, event enquiries or general questions, send the café a message and the team will get back to you as soon as possible.
            </p>
          </div>
        </aside>
      </section>

      <section className="finalCta">
        <p className="eyebrow">Little Talk Cafe</p>
        <h2>Breakfast, brunch, coffee and private events in Leigh-on-Sea.</h2>
        <div className="buttonRow centered">
          <Link className="button dark" href="/menu">View menu</Link>
          <Link className="button gold" href="/venue-hire">Private events</Link>
        </div>
      </section>
    </main>
  );
}
