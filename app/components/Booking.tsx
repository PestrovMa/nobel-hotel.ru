export default function Booking() {
  return (
    <article id="booking" style={{ padding: "36px 0 32px", borderBottom: "1px solid var(--ink)" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 2fr", gap: 28,
        alignItems: "end", marginBottom: 22,
      }}>
        <p style={{
          fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: 17, lineHeight: 1.45, color: "var(--ink-soft)", margin: 0,
          textAlign: "right", borderRight: "1px solid var(--ink)", paddingRight: 16,
        }}>
          Заполните форму — мы вышлем подтверждение письмом.<br/>
          Депозит — 25%; возможно бронирование по телефону.
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 0.9,
          letterSpacing: "-0.02em", margin: 0, color: "var(--ink-deep)",
          textAlign: "right",
        }}>
          Выберите <span style={{ fontStyle: "italic", fontWeight: 500 }}>даты</span><br/>
          пребывания.
        </h2>
      </div>

      <div id="travelline-widget">
        <div data-booking-fields style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr) auto", gap: 0,
          border: "1px solid var(--ink)", background: "var(--paper-light)",
        }}>
          {([
            ["Заезд", "— — —"],
            ["Выезд", "— — —"],
            ["Гости", "— — —"],
            ["Тип дома", "— — —"],
          ] as const).map(([label, ph]) => (
            <div key={label} style={{
              borderRight: "1px solid var(--ink)",
              padding: "12px 16px",
            }}>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 8, fontWeight: 700,
                letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink-faint)",
                marginBottom: 4,
              }}>{label}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontStyle: "italic",
                fontSize: 17, color: "var(--ink-faint)",
              }}>{ph}</div>
            </div>
          ))}
          <div style={{
            background: "var(--ink)", color: "var(--paper)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "0 28px",
            fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
          }}>
            Забронировать →
          </div>
        </div>

        <div style={{
          marginTop: 14, textAlign: "right",
          fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: 13, color: "var(--ink-faint)",
        }}>
          Круглосуточно по телефону +7 (800) 200-92-35
        </div>
      </div>
    </article>
  );
}
