type SocialLink = {
  name: string;
  href: string;
  icon: "instagram" | "facebook" | "tripadvisor" | "deliveroo";
};

const links: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/little_talk_cafe/",
    icon: "instagram"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/littletalkcafe.leighonsea/",
    icon: "facebook"
  },
  {
    name: "Tripadvisor",
    href: "https://www.tripadvisor.com/Restaurant_Review-g1138967-d15124783-Reviews-Little_Talk_Cafe-Leigh_on_Sea_Southend_on_Sea_Essex_England.html",
    icon: "tripadvisor"
  },
  {
    name: "Deliveroo",
    href: "https://deliveroo.co.uk/menu/london/leigh-on-sea/little-talk-cafe-1090-london-road",
    icon: "deliveroo"
  }
];

function Icon({ type }: { type: SocialLink["icon"] }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="16.3" cy="7.8" r="1" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 8.2H16V5.4c-.7-.1-1.5-.2-2.3-.2-2.4 0-4 1.5-4 4.2v2.1H7v3.1h2.7V20h3.3v-5.4h2.7l.4-3.1h-3.1V9.7c0-.9.3-1.5 1.5-1.5Z" />
      </svg>
    );
  }

  if (type === "tripadvisor") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.3 9.4c1.6-1 3.1-1.5 4.6-1.5 1.1 0 2.1.3 3.1.9 1-.6 2-.9 3.1-.9 1.5 0 3 .5 4.6 1.5" />
        <circle cx="8.2" cy="13.1" r="3.2" />
        <circle cx="15.8" cy="13.1" r="3.2" />
        <circle cx="8.2" cy="13.1" r=".9" />
        <circle cx="15.8" cy="13.1" r=".9" />
        <path d="M11.2 15.2 12 17l.8-1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5.2 12 19 19 5.2h-4.2L12 11.6 9.2 5.2H5Z" />
    </svg>
  );
}

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  const wrapStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: compact ? ".55rem" : ".7rem",
    alignItems: "center",
    marginTop: compact ? ".9rem" : "1.1rem"
  };

  const linkStyle: React.CSSProperties = {
    width: compact ? "46px" : "50px",
    height: compact ? "46px" : "50px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(248,239,227,.24)",
    background: "rgba(255,250,242,.08)",
    color: "inherit"
  };

  const svgStyle = `
    .socialLinks svg {
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.9;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .socialLinks a:hover {
      transform: translateY(-2px);
      background: rgba(255,250,242,.15);
    }
    .socialLinks a {
      transition: transform .2s ease, background .2s ease;
    }
    .socialLinks [data-solid="true"] svg {
      fill: currentColor;
      stroke: none;
    }
  `;

  return (
    <div className="socialLinks" style={wrapStyle} aria-label="Little Talk Cafe social links">
      <style>{svgStyle}</style>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open Little Talk Cafe on ${link.name}`}
          title={link.name}
          style={linkStyle}
          data-solid={link.icon === "facebook" || link.icon === "deliveroo" ? "true" : "false"}
        >
          <Icon type={link.icon} />
        </a>
      ))}
    </div>
  );
}
