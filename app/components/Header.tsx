"use client";

const navItems = [
  { id: "home", label: "Главная", href: "/" },
  { id: "about", label: "О нас", href: "#" },
  { id: "rooms", label: "Размещение", href: "#rooms" },
  { id: "services", label: "Услуги", href: "#" },
  { id: "restaurant", label: "Ресторан", href: "#" },
  { id: "staritsa", label: "Старица", href: "#" },
  { id: "contact", label: "Контакты", href: "#" },
];

type HeaderProps = { current?: string };

export default function Header({ current = "home" }: HeaderProps) {
  return (
    <header style={{ position: "relative", zIndex: 50 }}>
      <div style={{ padding: "32px 0 24px", textAlign: "center", position: "relative" }}>
        <div data-side-right style={{
          position: "absolute", right: 0, top: 38, textAlign: "right",
          fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600,
          letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-soft)",
          lineHeight: 1.6,
        }}>
          <a href="tel:88002009235" style={{
            display: "block", fontFamily: "var(--font-display)",
            fontStyle: "italic", fontSize: 16, letterSpacing: 0, textTransform: "none",
            color: "var(--ink-deep)",
          }}>
            8 (800) 200-92-35
          </a>
          <div style={{
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: 13, letterSpacing: 0, textTransform: "none", color: "var(--ink-faint)",
          }}>
            круглосуточно
          </div>
        </div>

        <div style={{ display: "inline-block" }}>
          <h1 style={{
            margin: 0,
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(48px, 6vw, 84px)", lineHeight: 0.95,
            letterSpacing: "-0.005em", color: "var(--ink-deep)",
            fontVariant: "small-caps",
          }}>
            Резиденция Братьев Нобель
          </h1>
          <div style={{
            marginTop: 8, fontFamily: "var(--font-display)",
            fontStyle: "italic", fontWeight: 400, fontSize: 18, color: "var(--ink-soft)",
            letterSpacing: "0.02em",
          }}>
            бутик-эко-резиденция · 16 домов · Старица, на берегу Волги
          </div>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid var(--ink)", borderBottom: "4px double var(--ink)", height: 4,
      }} />

      <div data-sticky-nav style={{
        position: "sticky", top: 12, zIndex: 60,
        background: "var(--paper)",
        borderBottom: "1px solid var(--ink)",
      }}>
        <nav data-nav style={{
          display: "grid", gridTemplateColumns: `repeat(${navItems.length}, 1fr) auto`,
          alignItems: "stretch",
        }}>
          {navItems.map((it, i) => (
            <a key={it.id} href={it.href}
              style={{
                fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: current === it.id ? "var(--ink-deep)" : "var(--ink-soft)",
                textAlign: "center", padding: "12px 8px",
                borderLeft: i === 0 ? "none" : "1px solid var(--ink)",
                background: current === it.id ? "var(--paper-aged)" : "transparent",
                transition: "background 200ms var(--ease-out-soft), color 200ms var(--ease-out-soft)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (current !== it.id) e.currentTarget.style.background = "var(--paper-aged)";
                e.currentTarget.style.color = "var(--ink-deep)";
              }}
              onMouseLeave={(e) => {
                if (current !== it.id) e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = current === it.id ? "var(--ink-deep)" : "var(--ink-soft)";
              }}
            >{it.label}</a>
          ))}
          <a href="#booking"
            style={{
              fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--paper)", background: "var(--ink)",
              textAlign: "center", padding: "12px 24px",
              borderLeft: "1px solid var(--ink)",
              transition: "background 200ms var(--ease-out-soft)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-deep)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
          >Забронировать →</a>
        </nav>
      </div>
    </header>
  );
}
