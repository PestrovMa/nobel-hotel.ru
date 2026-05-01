export default function Hero() {
  return (
    <section id="home">
      {/* === FULL-BLEED PHOTO === */}
      <div style={{
        position: "relative", width: "100%", overflow: "hidden",
        borderBottom: "1px solid var(--ink)",
      }}>
        <img src="/img/leto.jpg" alt="Волга у Старицы" style={{
          width: "100%", height: "min(70vh, 680px)", objectFit: "cover",
          display: "block", filter: "contrast(1.06) saturate(0.78) brightness(0.62)",
        }} />
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(15,14,11,0.65) 0%, rgba(15,14,11,0.3) 35%, rgba(15,14,11,0.3) 65%, rgba(15,14,11,0.85) 100%)",
        }} />
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(15,14,11,0.55) 0%, rgba(15,14,11,0) 100%)",
        }} />
        <div aria-hidden className="newsprint" style={{
          position: "absolute", inset: 0, mixBlendMode: "multiply", opacity: 0.55,
        }} />

        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: "0 40px", textAlign: "center", color: "var(--paper)",
        }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 500, fontStyle: "italic",
            fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: 1.1,
            margin: 0, maxWidth: 880, color: "var(--paper)",
            textShadow: "0 2px 24px rgba(0,0,0,0.7)", textWrap: "balance",
          }}>
            Здесь думают о деталях так же,<br/>как вы думаете о деталях своей жизни.
          </h2>
        </div>

        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 0,
          padding: "20px 40px",
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          color: "var(--paper)",
        }}>
          <span style={{
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: 13, opacity: 0.85,
            textShadow: "0 1px 6px rgba(0,0,0,0.7)",
          }}>
            Волга у Старицы
          </span>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.32em", textTransform: "uppercase",
            color: "var(--paper)", opacity: 0.85,
            textShadow: "0 1px 6px rgba(0,0,0,0.7)",
          }}>
            Открыто круглый год
          </span>
        </div>
      </div>

      {/* === BROADSHEET === */}
      <div style={{ borderBottom: "4px double var(--ink)" }}>
        <div style={{ padding: "32px 0 36px" }}>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 2.4fr",
            gap: 36, alignItems: "end",
            padding: "0 0 18px",
            borderBottom: "1px solid var(--ink)",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-serif-body)", fontSize: 15, lineHeight: 1.5,
                color: "var(--ink)", margin: 0, fontStyle: "italic",
                textWrap: "balance",
              }}>
                Шестнадцать домов на территории бывших складов товарищества братьев Нобель.
                Каждый назван именем русского лауреата или классика литературы. Открыто круглый год.
              </p>
              <div style={{
                marginTop: 14, display: "flex", gap: 12,
                fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ink)",
                borderTop: "1px solid var(--ink)", paddingTop: 8,
              }}>
                <span>16 домов</span><span style={{ color: "var(--ink-faint)" }}>/</span>
                <span>3 формата</span><span style={{ color: "var(--ink-faint)" }}>/</span>
                <span>4 сезона</span>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <h1 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(52px, 7.2vw, 108px)", lineHeight: 0.88,
                letterSpacing: "-0.025em", margin: 0, color: "var(--ink-deep)",
                textWrap: "balance",
              }}>
                Резиденция<br/>
                <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--ink-soft)" }}>
                  среди&nbsp;
                </span>
                истории<br/>
                <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--ink-soft)" }}>
                  и&nbsp;
                </span>
                природы
              </h1>
              <div style={{
                marginTop: 14,
                fontFamily: "var(--font-display)", fontStyle: "italic",
                fontSize: 22, lineHeight: 1.3, color: "var(--ink-soft)",
              }}>
                — Старица, на берегу Волги
              </div>
            </div>
          </div>

          <div style={{
            borderTop: "1px solid var(--ink)", borderBottom: "3px double var(--ink)",
            height: 4, margin: "0 0 28px",
          }} />

          <div data-three-cols style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1px 2.6fr 1px 1.3fr",
            gap: 0, alignItems: "stretch",
          }}>
            {/* COL 1 */}
            <div style={{ paddingRight: 22, display: "flex", flexDirection: "column", gap: 22 }}>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28,
                  lineHeight: 0.96, color: "var(--ink-deep)",
                }}>Отдых</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontSize: 14, color: "var(--ink-soft)", padding: "2px 0",
                }}>среди</div>
                <div style={{ borderTop: "1px solid var(--ink)" }} />
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28,
                  lineHeight: 0.96, color: "var(--ink-deep)", padding: "4px 0",
                }}>истории</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontSize: 14, color: "var(--ink-soft)",
                }}>и</div>
                <div style={{ borderTop: "1px solid var(--ink)" }} />
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28,
                  lineHeight: 0.96, color: "var(--ink-deep)", padding: "4px 0 0",
                }}>природы</div>
              </div>

              <figure style={{ margin: 0 }}>
                <img src="/img/vesna.jpg" alt="Берег весной"
                  style={{
                    width: "100%", aspectRatio: "5/4", objectFit: "cover",
                    display: "block", filter: "contrast(1.08) saturate(0.8) sepia(0.05)",
                  }} />
              </figure>

              <div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink)",
                  borderBottom: "1px solid var(--ink)", paddingBottom: 6, marginBottom: 10,
                }}>
                  Распорядок
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {([
                    ["Заезд", "с 15:00"],
                    ["Завтрак", "9 — 11:30"],
                    ["Тихий час", "14 — 16"],
                    ["Баня", "по записи"],
                    ["Ресторан", "весна 2026"],
                  ] as const).map((row, i, a) => (
                    <li key={row[0]} style={{
                      display: "flex", alignItems: "baseline",
                      borderBottom: i < a.length - 1 ? "1px dotted var(--ink-faint)" : "none",
                      padding: "6px 0",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600,
                        letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink)",
                      }}>{row[0]}</span>
                      <span style={{
                        flex: 1, borderBottom: "1px dotted var(--ink-faint)",
                        margin: "0 8px", position: "relative", top: -3,
                      }} />
                      <span style={{
                        fontFamily: "var(--font-display)", fontStyle: "italic",
                        fontSize: 13, color: "var(--ink-deep)", whiteSpace: "nowrap",
                      }}>{row[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ background: "var(--ink)" }} />

            {/* COL 2-3 */}
            <div style={{ padding: "0 28px", display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: 14 }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 36, lineHeight: 1, letterSpacing: "-0.01em",
                  margin: 0, color: "var(--ink-deep)", textWrap: "balance",
                }}>
                  Шестнадцать домов&nbsp;
                  <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--ink)" }}>
                    на берегу
                  </span>
                  &nbsp;Волги.
                </h3>
                <div style={{
                  fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontSize: 17, lineHeight: 1.35, color: "var(--ink-soft)",
                  marginTop: 8, textWrap: "balance",
                }}>
                  Старая нефтяная контора стала местом, где читают, варят кофе и
                  слушают тишину Волги — и это намеренно.
                </div>
              </div>

              <div style={{
                columnCount: 2, columnGap: 22, columnRule: "1px solid var(--mist)",
                fontFamily: "var(--font-serif-body)", fontSize: 14, lineHeight: 1.55,
                color: "var(--ink)", textAlign: "justify", hyphens: "auto",
              }}>
                <p style={{ margin: "0 0 10px" }}>
                  На исторической территории складов товарищества братьев Нобель
                  открыта резиденция о шестнадцати домах. Каждый дом носит имя русского
                  лауреата или классика литературы: Бунин, Пастернак, Шолохов, Бродский,
                  Чехов.
                </p>

                <figure style={{
                  breakInside: "avoid", margin: "0 0 12px",
                  paddingTop: 8, borderTop: "1px solid var(--ink)",
                }}>
                  <img src="/img/interior-2.jpg" alt="Интерьер дома Бунин"
                    style={{
                      width: "100%", aspectRatio: "4/3", objectFit: "cover",
                      display: "block", filter: "contrast(1.06) saturate(0.82)",
                    }} />
                  <figcaption style={{
                    fontFamily: "var(--font-display)", fontStyle: "italic",
                    fontSize: 12, lineHeight: 1.4, color: "var(--ink-faint)",
                    paddingTop: 4, marginTop: 4, borderTop: "1px solid var(--mist)",
                  }}>
                    Дом «Бунин» — гостиная с камином
                  </figcaption>
                </figure>

                <p style={{ margin: 0 }}>
                  Здесь медленно — и это намеренно. Кухня — общая, на дровяной плите.
                  По вечерам играют старинные романсы, главное правило — молчание после десяти.
                  Это не отель, а домашний архив для тех, кому нужно отдохнуть от собственного времени.
                </p>
              </div>
            </div>

            <div style={{ background: "var(--ink)" }} />

            {/* COL 4-5 */}
            <div style={{ paddingLeft: 22, display: "flex", flexDirection: "column", gap: 18 }}>
              <figure style={{ margin: 0 }}>
                <img src="/img/zima.jpg" alt="Зима в Старице"
                  style={{
                    width: "100%", aspectRatio: "4/5", objectFit: "cover",
                    display: "block", filter: "contrast(1.06) saturate(0.78) sepia(0.04)",
                  }} />
                <figcaption style={{
                  paddingTop: 8, marginTop: 8, borderTop: "1px solid var(--ink)",
                  fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontSize: 16, lineHeight: 1.3, color: "var(--ink-deep)",
                  textWrap: "balance",
                }}>
                  Безмолвная белизна и чистая геометрия деревьев.
                </figcaption>
              </figure>

              <div>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink)",
                  borderBottom: "1px solid var(--ink)", paddingBottom: 6, marginBottom: 8,
                }}>
                  <span>Цены</span>
                  <span style={{ color: "var(--ink-faint)" }}>за ночь</span>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {([
                    ["Малый дом", "на 2 гостя", "12 000 ₽"],
                    ["Семейный", "на 4 гостя", "18 000 ₽"],
                    ["Каминный", "на 6 гостей", "26 000 ₽"],
                  ] as const).map(([title, sub, price], i, a) => (
                    <li key={title} style={{
                      display: "grid", gridTemplateColumns: "1fr auto",
                      alignItems: "baseline", gap: "0 8px",
                      borderBottom: i < a.length - 1 ? "1px dotted var(--ink-faint)" : "none",
                      padding: "8px 0",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600,
                        letterSpacing: "0.08em", color: "var(--ink)",
                      }}>{title}</span>
                      <span style={{
                        fontFamily: "var(--font-display)", fontWeight: 700,
                        fontSize: 18, color: "var(--ink-deep)", whiteSpace: "nowrap",
                      }}>{price}</span>
                      <span style={{
                        gridColumn: "1 / -1",
                        fontFamily: "var(--font-display)", fontStyle: "italic",
                        fontSize: 12, color: "var(--ink-faint)",
                      }}>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
