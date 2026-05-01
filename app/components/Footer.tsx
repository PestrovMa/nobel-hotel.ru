export default function Footer() {
  return (
    <article style={{ padding: "32px 0 0", marginTop: 0 }}>
      <div style={{
        borderTop: "4px double var(--ink)", height: 4, marginBottom: 22,
      }} />

      <div data-footer-grid style={{
        display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", gap: 0,
        alignItems: "start", marginBottom: 22,
      }}>
        <div style={{ paddingRight: 24 }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 28, lineHeight: 1, color: "var(--ink-deep)",
          }}>
            Резиденция <span style={{ fontStyle: "italic", fontWeight: 500 }}>Братьев</span> Нобель
          </div>
          <p style={{
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: 14, lineHeight: 1.45, color: "var(--ink-soft)",
            marginTop: 8, marginBottom: 0,
          }}>
            Старица, на берегу Волги.
          </p>
        </div>

        <div style={{ paddingLeft: 18, paddingRight: 18, borderLeft: "1px solid var(--ink)" }}>
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
            letterSpacing: "0.32em", textTransform: "uppercase",
            color: "var(--ink-soft)", marginBottom: 8, paddingBottom: 6,
            borderBottom: "1px solid var(--ink)",
          }}>
            Адрес
          </div>
          <p style={{
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: 16, lineHeight: 1.45, color: "var(--ink)", margin: 0,
          }}>
            Тверская обл.,<br/>
            г. Старица,<br/>
            ул. Половинкина, 15Г
          </p>
        </div>

        <div style={{ paddingLeft: 18, paddingRight: 18, borderLeft: "1px solid var(--ink)" }}>
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
            letterSpacing: "0.32em", textTransform: "uppercase",
            color: "var(--ink-soft)", marginBottom: 8, paddingBottom: 6,
            borderBottom: "1px solid var(--ink)",
          }}>
            Контакты
          </div>
          <ul style={{
            margin: 0, padding: 0, listStyle: "none",
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: 15, lineHeight: 1.6, color: "var(--ink)",
          }}>
            <li><a href="mailto:info@nobel-hotel.ru" style={{ color: "inherit" }}>info@nobel-hotel.ru</a></li>
            <li><a href="tel:79850276746" style={{ color: "inherit" }}>+7 985 027-67-46</a></li>
            <li><a href="tel:74822452422" style={{ color: "inherit" }}>+7 482 245-24-22</a></li>
          </ul>
          <div style={{
            marginTop: 10, display: "flex", gap: 10,
            fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
          }}>
            <a href="#" style={{
              color: "var(--ink)", borderBottom: "1px solid var(--ink)", paddingBottom: 1,
            }}>WhatsApp</a>
            <a href="#" style={{
              color: "var(--ink)", borderBottom: "1px solid var(--ink)", paddingBottom: 1,
            }}>Telegram</a>
          </div>
        </div>

        <div style={{ paddingLeft: 18, borderLeft: "1px solid var(--ink)" }}>
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
            letterSpacing: "0.32em", textTransform: "uppercase",
            color: "var(--ink-soft)", marginBottom: 8, paddingBottom: 6,
            borderBottom: "1px solid var(--ink)",
          }}>
            Программы
          </div>
          <ul style={{
            margin: 0, padding: 0, listStyle: "none",
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: 15, lineHeight: 1.7, color: "var(--ink)",
          }}>
            <li>Йога-туры</li>
            <li>Корпоративы</li>
            <li>Семейные программы</li>
            <li>Свадьбы и торжества</li>
          </ul>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid var(--ink)", borderBottom: "4px double var(--ink)",
        height: 4, marginBottom: 12,
      }} />
      <div style={{
        paddingBottom: 18,
        fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
        letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-soft)",
        textAlign: "center",
      }}>
        © 2026 · Резиденция Братьев Нобель
      </div>
    </article>
  );
}
