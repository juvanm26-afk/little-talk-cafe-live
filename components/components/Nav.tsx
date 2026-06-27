"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/venue-hire", label: "Venue Hire" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navShell">
      <Link href="/" className="brand brandWithLogo" onClick={() => setOpen(false)}>
        <Image src="/images/little-talk-logo.jpg" alt="Little Talk Cafe logo" width={54} height={54} priority />
        <span>
          <strong>Little Talk Cafe</strong>
          <small>Leigh-on-Sea</small>
        </span>
      </Link>

      <button className="navToggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`navLinks ${open ? "open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={path === link.href ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
        <Link className="reservePill" href="/contact#reserve" onClick={() => setOpen(false)}>
          Reserve
        </Link>
      </nav>
    </header>
  );
}
