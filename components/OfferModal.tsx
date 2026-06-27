"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function OfferModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("ltc-offer-closed")) return;
    const timer = setTimeout(() => setVisible(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    localStorage.setItem("ltc-offer-closed", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="offerModal" role="dialog" aria-label="Venue hire offer">
      <button className="closeButton" onClick={close} aria-label="Close offer">
        <X size={18} />
      </button>
      <p className="eyebrow">Limited availability</p>
      <h3>Planning something special?</h3>
      <p>
        Baby showers, birthdays and afternoon teas can feel warm and personal at Little Talk Cafe.
      </p>
      <Link className="button dark" href="/venue-hire">
        View events
      </Link>
    </div>
  );
}
