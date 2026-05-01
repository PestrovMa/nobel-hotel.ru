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
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.5em", textTransform: "uppercase",
            color: "var(--gold-light)", marginBottom: 22,
            textShadow: "0 1px 8px rgba(0,0,0,0.6)",
          }}>
            ❦ &nbsp; Раздѣлъ I &nbsp; · &nbsp; Передовица &nbsp; ❦
          </div>
          <div style={{
            width: 100, height: 1, background: "var(--paper)", opacity: 0.5, marginBottom: 28,
          }} />
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 500, fontStyle: "italic",
            fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: 1.1,
            margin: 0, maxWidth: 880, color: "var(--paper)",
            textShadow: "0 2px 24px rgba(0,0,0,0.7)", textWrap: "balance",
          }}>
            «Здѣсь думаютъ о&nbsp;деталяхъ так&nbsp;же,<br/>как&nbsp;я думаю о&nbsp;деталяхъ своей жизни.»
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 24 }}>
            <span style={{ width: 28, height: 1, background: "var(--paper)", opacity: 0.6 }} />
            <span style={{
              fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600,
              letterSpacing: "0.32em", textTransform: "uppercase",
              color: "var(--paper)", opacity: 0.85,
              textShadow: "0 1px 4px rgba(0,0,0,0.6)",
            }}>
              Изъ путевыхъ замѣтокъ гостя
            </span>
            <span style={{ width: 28, height: 1, background: "var(--paper)", opacity: 0.6 }} />
          </div>
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
            фото П. Крайниковъ ❦ Волга у Старицы, лѣто
          </span>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.32em", textTransform: "uppercase",
            color: "var(--paper)", opacity: 0.85,
            textShadow: "0 1px 6px rgba(0,0,0,0.7)",
          }}>
            ❦ Открыто круглый годъ ❦
          </span>
        </div>
      </div>

      {/* === BROADSHEET — плотная газетная полоса === */}
      <div style={{ borderBottom: "4px double var(--ink)" }}>
        <div style={{ padding: "32px 0 36px" }}>

          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-soft)",
            paddingBottom: 8, borderBottom: "1px solid var(--ink)",
          }}>
            <span>Лѣто 1898 г. ❦ суббота</span>
            <span>Старицкая полоса · № XVI</span>
            <span>цѣна — пять копеекъ</span>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 2.4fr",
            gap: 36, alignItems: "end",
            padding: "32px 0 18px",
            borderBottom: "1px solid var(--ink)",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink-soft)",
                marginBottom: 10,
              }}>
                ❦ передовая
              </div>
              <p style={{
                fontFamily: "var(--font-serif-body)", fontSize: 14, lineHeight: 1.5,
                color: "var(--ink)", margin: 0, fontStyle: "italic",
                textWrap: "balance",
              }}>
                Шестнадцать домовъ, въ стѣнахъ складовъ Товарищества братьевъ Нобель, открыты
                для путешествующихъ круглый годъ. Каждый названъ именемъ русскаго лауреата
                или классика&nbsp;литературы.
              </p>
              <div style={{
                marginTop: 14, display: "flex", gap: 12,
                fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ink)",
                borderTop: "1px solid var(--ink)", paddingTop: 8,
              }}>
                <span>16 домовъ</span><span style={{ color: "var(--ink-faint)" }}>/</span>
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
                Резиденція<br/>
                <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--ink-soft)" }}>
                  среди&nbsp;
                </span>
                исторіи<br/>
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
                  fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink)",
                  borderBottom: "1px solid var(--ink)", paddingBottom: 6, marginBottom: 12,
                }}>
                  ❦ бюллетень
                </div>
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
                }}>исторіи</div>
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
                <img src="/img/vesna.jpg" alt="весна на берегу"
                  style={{
                    width: "100%", aspectRatio: "5/4", objectFit: "cover",
                    display: "block", filter: "contrast(1.08) saturate(0.8) sepia(0.05)",
                  }} />
                <figcaption style={{
                  fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontSize: 11, lineHeight: 1.4, color: "var(--ink-faint)",
                  paddingTop: 6, marginTop: 6, borderTop: "1px solid var(--mist)",
                }}>
                  ил. II ❦ берегъ въ маѣ
                </figcaption>
              </figure>

              <div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink)",
                  borderBottom: "1px solid var(--ink)", paddingBottom: 6, marginBottom: 10,
                }}>
                  Распорядокъ
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {([
                    ["Заѣздъ", "съ 15:00"],
                    ["Завтракъ", "9 — 11:30"],
                    ["Тихій часъ", "14 — 16"],
                    ["Баня", "по записи"],
                    ["Ресторанъ", "весна '26"],
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
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink)",
                borderBottom: "1px solid var(--ink)", paddingBottom: 6, marginBottom: 8,
              }}>
                <span>❦ Отъ редакціи</span>
                <span style={{
                  fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontSize: 12, letterSpacing: 0, textTransform: "none", color: "var(--ink-faint)",
                }}>
                  передовая статья
                </span>
              </div>

              <div style={{ marginBottom: 14 }}>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.4em", textTransform: "uppercase",
                  color: "var(--gold-deep)", marginBottom: 6,
                }}>
                  старица, особый корреспондентъ
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 36, lineHeight: 1, letterSpacing: "-0.01em",
                  margin: 0, color: "var(--ink-deep)", textWrap: "balance",
                }}>
                  Шестнадцать домовъ&nbsp;
                  <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--ink)" }}>
                    обрѣли голосъ
                  </span>
                  : что значитъ&nbsp;медленный отдыхъ.
                </h3>
                <div style={{
                  fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontSize: 17, lineHeight: 1.35, color: "var(--ink-soft)",
                  marginTop: 8, textWrap: "balance",
                }}>
                  Какъ старая нефтяная контора стала мѣстомъ, гдѣ читаютъ, варятъ кофе и
                  слушаютъ тишину Волги — и почему это намѣренно.
                </div>
                <div style={{
                  marginTop: 10, display: "flex", gap: 14, alignItems: "baseline",
                  fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ink-faint)",
                }}>
                  <span>авт. — П. Крайниковъ</span>
                  <span style={{ flex: 1, borderBottom: "1px dotted var(--ink-faint)" }} />
                  <span>чтенія — 7 минутъ</span>
                </div>
              </div>

              <div style={{
                columnCount: 3, columnGap: 22, columnRule: "1px solid var(--mist)",
                fontFamily: "var(--font-serif-body)", fontSize: 14, lineHeight: 1.55,
                color: "var(--ink)", textAlign: "justify", hyphens: "auto",
              }}>
                <p className="dropcap" style={{ margin: "0 0 10px" }}>
                  На исторической территоріи складовъ Товарищества братьевъ Нобель открыта
                  резиденція о шестнадцати домахъ. Шесть лѣтъ назадъ это была пустая бочечная
                  контора съ выбитыми стёклами и запахомъ керосина — теперь ставни выкрашены
                  въ цвѣтъ горячаго воска, а въ нижнихъ окнахъ горитъ медленный свѣтъ.
                </p>
                <p style={{ margin: "0 0 10px" }}>
                  Каждый домъ носитъ имя русскаго лауреата или классика литературы:
                  Бунинъ, Пастернакъ, Шолоховъ, Бродскій, Чеховъ. На фасадѣ —
                  именная литая табличка въ латуни, у входа — желѣзный скребокъ для
                  обуви, внутри — свѣжій хлѣбъ, сухари и кофе въ турках.
                </p>

                <figure style={{
                  breakInside: "avoid", margin: "0 0 12px",
                  paddingTop: 8, borderTop: "1px solid var(--ink)",
                }}>
                  <img src="/img/interior-2.jpg" alt="Интерьер дома Бунинъ"
                    style={{
                      width: "100%", aspectRatio: "4/3", objectFit: "cover",
                      display: "block", filter: "contrast(1.06) saturate(0.82)",
                    }} />
                  <figcaption style={{
                    fontFamily: "var(--font-display)", fontStyle: "italic",
                    fontSize: 11, lineHeight: 1.4, color: "var(--ink-faint)",
                    paddingTop: 4, marginTop: 4, borderTop: "1px solid var(--mist)",
                  }}>
                    ил. III ❦ домъ «Бунинъ» — гостиная съ&nbsp;каминомъ
                  </figcaption>
                </figure>

                <p style={{ margin: "0 0 10px" }}>
                  Здѣсь не подаютъ напоказъ. Кухня — общая, на дровяной плитѣ; въ библіотекѣ
                  стоитъ телеграфъ, переоборудованный въ радіо. По вечерамъ старшая хозяйка
                  Софья Ѳедоровна играетъ на пьянино — Шопенъ, Метнеръ, иногда — старинный
                  романсъ изъ дореволюціоннаго сборника.
                </p>
                <p style={{ margin: "0 0 10px" }}>
                  Главное правило тутъ&nbsp;— молчаніе послѣ десяти. На подушкѣ оставляютъ записку
                  отъ руки на сѣрой бумагѣ съ&nbsp;сегодняшнею погодой и&nbsp;тремя строкам про
                  завтрашній планъ. Ставни запираютъ съ&nbsp;тихимъ ритуальнымъ скрипомъ.
                </p>
                <p style={{ margin: 0 }}>
                  Здѣсь медленно — и&nbsp;это намѣренно. <em>Это не отель,</em> — говоритъ
                  управляющій, — <em>это домашній архивъ для тѣхъ, кому нужно отдохнуть
                  отъ собственнаго времени.</em>
                </p>
              </div>

              <div style={{
                marginTop: 14, paddingTop: 8, borderTop: "1px solid var(--ink)",
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-faint)",
              }}>
                <span>— продолженіе на&nbsp;стр. III &nbsp;❦&nbsp; рубрика «Дома»</span>
                <span style={{
                  fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontSize: 13, letterSpacing: 0, textTransform: "none", color: "var(--ink)",
                }}>
                  ✒ П. Крайниковъ
                </span>
              </div>
            </div>

            <div style={{ background: "var(--ink)" }} />

            {/* COL 4-5 */}
            <div style={{ paddingLeft: 22, display: "flex", flexDirection: "column", gap: 18 }}>
              <figure style={{ margin: 0 }}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img src="/img/zima.jpg" alt="Зима в Старице"
                    style={{
                      width: "100%", aspectRatio: "4/5", objectFit: "cover",
                      display: "block", filter: "contrast(1.06) saturate(0.78) sepia(0.04)",
                    }} />
                  <span style={{
                    position: "absolute", top: 12, left: 12,
                    background: "var(--paper)", color: "var(--ink-deep)",
                    fontFamily: "var(--font-body)", fontSize: 8, fontWeight: 700,
                    letterSpacing: "0.28em", textTransform: "uppercase",
                    padding: "5px 10px", border: "1px solid var(--ink)",
                  }}>
                    илл. №&nbsp;I
                  </span>
                </div>
                <figcaption style={{
                  paddingTop: 8, marginTop: 8, borderTop: "1px solid var(--ink)",
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontStyle: "italic",
                    fontSize: 16, lineHeight: 1.3, color: "var(--ink-deep)",
                    textWrap: "balance", marginBottom: 6,
                  }}>
                    «Безмолвная&nbsp;бѣлизна и&nbsp;чистая геометрія&nbsp;деревьевъ.»
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                    letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ink-faint)",
                  }}>
                    зима '26 ❦ фото П. Крайниковъ
                  </div>
                </figcaption>
              </figure>

              <div style={{
                border: "1px solid var(--ink)", padding: "14px 14px 12px",
                background: "rgba(218, 198, 154, 0.12)",
              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.32em", textTransform: "uppercase",
                  color: "var(--ink-deep)", borderBottom: "1px dashed var(--ink)",
                  paddingBottom: 6, marginBottom: 10,
                }}>
                  <span>❦ Телеграмма</span>
                  <span style={{ color: "var(--ink-faint)" }}>VII ч. утра</span>
                </div>
                <p style={{
                  margin: 0, fontFamily: "var(--font-serif-body)", fontSize: 13,
                  lineHeight: 1.5, color: "var(--ink)", textAlign: "justify", hyphens: "auto",
                }}>
                  СТАРИЦА &nbsp;ТЧК&nbsp; небо ясное &nbsp;ТЧК&nbsp; снѣгъ свѣжій&nbsp;шесть&nbsp;вершковъ
                  &nbsp;ТЧК&nbsp; Волга стала &nbsp;ТЧК&nbsp; ожидаемъ гостей къ&nbsp;ужину&nbsp;ЗПТ&nbsp;
                  баня съ&nbsp;шести вечера &nbsp;ТЧК&nbsp;
                </p>
                <div style={{
                  marginTop: 10, paddingTop: 8, borderTop: "1px dashed var(--ink)",
                  display: "flex", justifyContent: "space-between",
                  fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ink-soft)",
                }}>
                  <span>−7° / −12°</span>
                  <span>SE 3 м/с</span>
                  <span>барометръ 763</span>
                </div>
              </div>

              <div>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink)",
                  borderBottom: "1px solid var(--ink)", paddingBottom: 6, marginBottom: 8,
                }}>
                  <span>❦ Цѣны</span>
                  <span style={{ color: "var(--ink-faint)" }}>за ночь, въ рубляхъ</span>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {([
                    ["Малый домъ", "на 2 гостя", "12 000"],
                    ["Семейный", "на 4 гостя", "18 000"],
                    ["Каминный", "на 6 гостей", "26 000"],
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
                      }}>{price} р.</span>
                      <span style={{
                        gridColumn: "1 / -1",
                        fontFamily: "var(--font-display)", fontStyle: "italic",
                        fontSize: 12, color: "var(--ink-faint)",
                      }}>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                border: "1px solid var(--ink)", padding: "12px 12px 10px", textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 8, fontWeight: 700,
                  letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--ink-soft)",
                  marginBottom: 6,
                }}>
                  ❦ объявленіе
                </div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
                  lineHeight: 1.05, color: "var(--ink-deep)", textWrap: "balance",
                }}>
                  Баня-бочка<br/>
                  <span style={{
                    fontStyle: "italic", fontWeight: 500, fontSize: 14, color: "var(--ink-soft)",
                  }}>на дровахъ, у самой воды</span>
                </div>
                <div style={{
                  marginTop: 8, paddingTop: 8, borderTop: "1px dotted var(--ink)",
                  fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink)",
                }}>
                  по записи, до сумерекъ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
