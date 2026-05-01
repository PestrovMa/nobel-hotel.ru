"use client";

const teaserRooms = [
  {
    img: "/img/interior-2.jpg", label: "Барнхаусы", sub: "для двоихъ", count: "восемь домовъ",
    meta: [["Площадь", "~ 30 м²"], ["Гости", "2"], ["Особое", "тераса"]] as const,
    price: "отъ 18 200 ₽",
  },
  {
    img: "/img/interior-1.jpeg", label: "Большіе барнхаусы", sub: "легенды русской науки", count: "четыре дома",
    meta: [["Площадь", "~ 70 м²"], ["Гости", "до 4"], ["Особое", "3 спальни"]] as const,
    price: "отъ 32 400 ₽",
  },
  {
    img: "/img/interior-2.jpg", label: "Таунхаусы", sub: "литература и гуманизмъ", count: "шесть домовъ",
    meta: [["Площадь", "~ 92 м²"], ["Гости", "до 6"], ["Особое", "кабинетъ"]] as const,
    price: "отъ 38 600 ₽",
  },
];

export default function RoomsTeaser() {
  return (
    <article id="rooms" style={{ padding: "36px 0 28px", borderBottom: "1px solid var(--ink)" }}>
      <div style={{
        borderTop: "4px double var(--ink)", borderBottom: "1px solid var(--ink)",
        padding: "8px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline",
        fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700,
        letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink)",
        marginBottom: 18,
      }}>
        <span>Часть II ❦ Размѣщеніе</span>
        <span style={{
          fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: 14, letterSpacing: 0, textTransform: "none", color: "var(--ink-soft)",
        }}>
          16 домовъ · 3 формата · по именамъ лауреатовъ
        </span>
        <span>стр. III</span>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "2fr 1fr", gap: 28,
        alignItems: "end", marginBottom: 18,
      }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 0.9,
          letterSpacing: "-0.02em", margin: 0, color: "var(--ink-deep)",
        }}>
          Шестнадцать домовъ.<br/>
          <span style={{ fontStyle: "italic", fontWeight: 500 }}>Три</span> формата постоя.
        </h2>
        <p style={{
          fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: 17, lineHeight: 1.4, color: "var(--ink-soft)", margin: 0,
          borderLeft: "1px solid var(--ink)", paddingLeft: 16,
        }}>
          Каждый домъ названъ именемъ русскаго лауреата или классика. Цѣны указаны за сутки въ низкій сезонъ; въ праздничные дни дѣйствуютъ особыя условія.
        </p>
      </div>

      <div style={{ borderTop: "1px solid var(--ink)" }} />

      <div data-rooms-teaser style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0,
      }}>
        {teaserRooms.map((r, i) => (
          <a key={r.label} href="#" style={{
            padding: "18px 18px 20px",
            borderLeft: i === 0 ? "none" : "1px solid var(--ink)",
            display: "flex", flexDirection: "column", color: "var(--ink)",
            transition: "background 240ms var(--ease-out-soft)",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--paper-aged)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              marginBottom: 10,
              fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
              letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-soft)",
            }}>
              <span>илл. № 0{i + 2}</span>
              <span>{r.count}</span>
            </div>

            <img src={r.img} alt={r.label}
              style={{
                width: "100%", aspectRatio: "5/4", objectFit: "cover",
                display: "block", filter: "contrast(1.06) saturate(0.85) grayscale(0.15)",
                marginBottom: 12,
              }} />

            <div style={{
              fontFamily: "var(--font-display)", fontStyle: "italic",
              fontSize: 12, color: "var(--ink-faint)", marginBottom: 10,
              paddingBottom: 8, borderBottom: "1px solid var(--mist)",
            }}>
              фото П. Крайниковъ ❦ интерьеръ дома
            </div>

            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 28, lineHeight: 1, color: "var(--ink-deep)",
              margin: 0, letterSpacing: "-0.015em",
            }}>{r.label}</h3>
            <div style={{
              fontFamily: "var(--font-display)", fontStyle: "italic",
              fontSize: 15, color: "var(--ink-soft)", marginTop: 2, marginBottom: 12,
            }}>
              {r.sub}
            </div>

            <ul style={{
              margin: 0, padding: 0, listStyle: "none",
              borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)",
              marginBottom: 12,
            }}>
              {r.meta.map(([k, v], j, a) => (
                <li key={k} style={{
                  padding: "5px 0",
                  borderBottom: j < a.length - 1 ? "1px dotted var(--ink-faint)" : "none",
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                }}>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-soft)",
                  }}>
                    {k}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-display)", fontStyle: "italic",
                    fontSize: 15, color: "var(--ink-deep)",
                  }}>
                    {v}
                  </span>
                </li>
              ))}
            </ul>

            <div style={{
              marginTop: "auto", display: "flex",
              justifyContent: "space-between", alignItems: "flex-end",
            }}>
              <div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 8, fontWeight: 700,
                  letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-faint)",
                }}>
                  За ночь
                </div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 20, color: "var(--ink-deep)", marginTop: 1,
                }}>{r.price}</div>
              </div>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "var(--ink-deep)", borderBottom: "1px solid var(--ink)", paddingBottom: 1,
              }}>см. стр. {3 + i + 1} →</span>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}
