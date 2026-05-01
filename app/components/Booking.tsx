export default function Booking() {
  return (
    <article id="booking" style={{ padding: "36px 0 32px", borderBottom: "1px solid var(--ink)" }}>
      <div style={{
        borderTop: "4px double var(--ink)", borderBottom: "1px solid var(--ink)",
        padding: "8px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline",
        fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700,
        letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink)",
        marginBottom: 18,
      }}>
        <span>Часть III ❦ Бронированіе</span>
        <span style={{
          fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: 14, letterSpacing: 0, textTransform: "none", color: "var(--ink-soft)",
        }}>
          бланкъ заявки № 4421
        </span>
        <span>стр. VII</span>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 2fr", gap: 28,
        alignItems: "end", marginBottom: 22,
      }}>
        <p style={{
          fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: 17, lineHeight: 1.45, color: "var(--ink-soft)", margin: 0,
          textAlign: "right", borderRight: "1px solid var(--ink)", paddingRight: 16,
        }}>
          Заполните бланкъ, мы вышлемъ подтвержденіе письмомъ. Депозитъ — двадцать пять процентовъ; <br/>
          возможно бронированіе по телефону.
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 0.9,
          letterSpacing: "-0.02em", margin: 0, color: "var(--ink-deep)",
          textAlign: "right",
        }}>
          Извольте <span style={{ fontStyle: "italic", fontWeight: 500 }}>выбрать</span><br/>
          даты постоя.
        </h2>
      </div>

      <div id="travelline-widget">
        <div data-booking-fields style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr) auto", gap: 0,
          border: "1px solid var(--ink)", background: "var(--paper-light)",
        }}>
          {([
            ["Заѣздъ", "— — —"],
            ["Выѣздъ", "— — —"],
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
            Подать заявку →
          </div>
        </div>

        <div style={{
          marginTop: 14, display: "flex", justifyContent: "space-between",
          alignItems: "baseline", flexWrap: "wrap", gap: 12,
          fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
          letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-soft)",
        }}>
          <span>сноска ❦ TravelLine виджетъ — embed via script</span>
          <span style={{
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: 13, letterSpacing: 0, textTransform: "none", color: "var(--ink-faint)",
          }}>
            бронированіе круглосуточно ❦ телефонъ 8 (800) 200-92-35
          </span>
        </div>
      </div>
    </article>
  );
}
