export function PageHero({
  eyebrow,
  title,
  text,
  variant = "plain",
  children
}: {
  eyebrow: string;
  title: string;
  text: string;
  variant?: "plain" | "venue";
  children?: React.ReactNode;
}) {
  return (
    <section className={`pageHero ${variant}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </section>
  );
}
