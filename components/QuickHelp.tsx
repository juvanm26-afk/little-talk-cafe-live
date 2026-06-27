"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function QuickHelp() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="quickHelp">
      <button onClick={() => setOpen(!open)} className="quickButton" aria-expanded={open}>
        <MessageCircle size={18} />
        Need help?
      </button>
      {open && (
        <div className="quickPanel">
          <a href="/contact#reserve">Book a table</a>
          <a href="/venue-hire">Ask about venue hire</a>
          <a href="/menu">View menu</a>
          <a href="/contact">Opening hours</a>
        </div>
      )}
    </aside>
  );
}
