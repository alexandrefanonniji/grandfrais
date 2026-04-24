// Screen 7 — Tes produits de l'année
// Carrousel horizontal de 3 cards : Le Produit Phare, Le Plaisir Coupable, Le Produit Improbable.
// Swipable / tappable, avec dots de pagination.
function Screen7Products({ active, onNext }) {
  const on = useReveal(active);
  const cards = USER.productCards;
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => { if (!active) setIdx(0); }, [active]);

  const go = (d) => {
    setIdx(i => Math.max(0, Math.min(cards.length - 1, i + d)));
  };

  // Simple swipe handling
  const touchRef = React.useRef({ x: 0, active: false });
  const onTouchStart = (e) => { touchRef.current = { x: e.touches[0].clientX, active: true }; };
  const onTouchEnd = (e) => {
    if (!touchRef.current.active) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    touchRef.current.active = false;
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
  };

  return (
    <div className="gf-app paper-bg" style={{ background: "var(--gf-sand-2)" }}>
      <StatusBar />

      {/* Eyebrow + title */}
      <div style={{ position: "absolute", top: 68, left: 0, right: 0, textAlign: "center" }}
           className={`reveal ${on ? "is-on" : ""}`}>
        <span className="eyebrow" style={{ color: "var(--gf-olive)" }}>
          ★ Chapitre 5 · Tes produits de l'année
        </span>
      </div>
      <div style={{ position: "absolute", top: 98, left: 0, right: 0, padding: "0 28px", textAlign: "center" }}
           className={`reveal reveal-d1 ${on ? "is-on" : ""}`}>
        <h1 className="display" style={{ margin: 0, fontSize: 32, color: "var(--gf-ink)", lineHeight: 1 }}>
          Trois produits,<br/>
          <span style={{ color: "var(--gf-red)" }}>trois histoires.</span>
        </h1>
      </div>

      {/* Card viewport */}
      <div style={{
        position: "absolute", top: 200, left: 0, right: 0, bottom: 150,
        overflow: "hidden",
      }}
           onTouchStart={onTouchStart}
           onTouchEnd={onTouchEnd}
           className={`reveal reveal-d2 ${on ? "is-on" : ""}`}>
        <div style={{
          display: "flex", height: "100%",
          transform: `translateX(calc(${-idx * 100}% + ${-idx * 0}px))`,
          transition: "transform 0.45s cubic-bezier(.2,.8,.3,1)",
        }}>
          {cards.map((c, i) => (
            <div key={i} style={{
              width: "100%", height: "100%", flexShrink: 0,
              padding: "0 20px", boxSizing: "border-box",
            }}>
              <ProductCard c={c}/>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div style={{ position: "absolute", bottom: 108, left: 0, right: 0,
                    display: "flex", justifyContent: "center", gap: 6 }}
           className={`reveal reveal-d5 ${on ? "is-on" : ""}`}>
        {cards.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Carte ${i+1}`}
                  style={{
            width: i === idx ? 22 : 6, height: 6, borderRadius: 3,
            background: i === idx ? "var(--gf-ink)" : "rgba(41,41,41,.22)",
            border: "none", cursor: "pointer", padding: 0,
            transition: "width .3s, background .3s",
          }}/>
        ))}
      </div>

      {/* Prev / Next arrows + CTA */}
      <div style={{ position: "absolute", bottom: 36, left: 20, right: 20,
                    display: "flex", gap: 10, alignItems: "center" }}
           className={`reveal reveal-d6 ${on ? "is-on" : ""}`}>
        <button onClick={() => idx === 0 ? null : go(-1)} disabled={idx === 0}
                aria-label="Précédent" style={{
          width: 48, height: 48, borderRadius: 0, flexShrink: 0,
          background: "var(--gf-cream)", color: "var(--gf-ink)",
          border: "1px solid rgba(41,41,41,.15)", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: idx === 0 ? .35 : 1, transition: "opacity .2s",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {idx === cards.length - 1 ? (
          <button onClick={onNext} style={{
            flex: 1, background: "var(--gf-ink)", color: "var(--gf-cream)",
            border: "none", borderRadius: 100, padding: "16px 12px",
            fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            Continuer
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ) : (
          <button onClick={() => go(1)} style={{
            flex: 1, background: "var(--gf-ink)", color: "var(--gf-cream)",
            border: "none", borderRadius: 100, padding: "16px 12px",
            fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            Carte suivante
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

function ProductCard({ c }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: c.bg, color: c.ink,
      borderRadius: 0, padding: "22px 22px 24px", boxSizing: "border-box",
      boxShadow: "0 8px 24px rgba(41,41,41,.12)",
      display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background sticker */}
      <div style={{
        position: "absolute", top: -30, right: -30, width: 180, height: 180,
        background: c.accent, opacity: .22, borderRadius: "50%",
        pointerEvents: "none",
      }}/>

      {/* Badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 0,
          background: `color-mix(in oklab, ${c.ink} 12%, transparent)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22,
        }}>
          {c.badge}
        </div>
        <div style={{
          fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
          letterSpacing: ".14em", textTransform: "uppercase",
          color: `color-mix(in oklab, ${c.ink} 70%, transparent)`,
        }}>
          {c.subtitle}
        </div>
      </div>

      {/* Title of the category */}
      <div style={{
        fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 30,
        color: c.ink, lineHeight: 1, marginTop: 14, letterSpacing: "-0.01em",
      }}>
        {c.title}
      </div>

      {/* Product visual */}
      <div style={{
        margin: "8px auto 8px",
        width: 320, height: 230,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
      }}>
        {c.imgSrc ? (
          <img src={c.imgSrc} alt={c.name}
               style={{ width: 320, height: 230, objectFit: "contain",
                        filter: "drop-shadow(0 16px 32px rgba(0,0,0,.45))" }}/>
        ) : (
          <Produce label={c.label} w={140} h={140}/>
        )}
      </div>

      {/* Product name */}
      <div style={{
        fontFamily: "Fixture", fontWeight: 900, fontSize: 26,
        color: c.ink, lineHeight: 1.05, letterSpacing: "-0.01em",
        textAlign: "center",
      }}>
        {c.name}
      </div>

      {/* Count */}
      <div style={{ textAlign: "center", marginTop: 6 }}>
        <span style={{
          fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 48,
          color: c.ink, letterSpacing: "-0.02em", lineHeight: 1,
        }}>
          {c.count}
        </span>
        <div style={{
          fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
          letterSpacing: ".12em", textTransform: "uppercase",
          color: `color-mix(in oklab, ${c.ink} 65%, transparent)`,
          marginTop: 2,
        }}>
          {c.countLabel}
        </div>
      </div>

      {/* Quip */}
      <div style={{
        marginTop: "auto",
        fontFamily: "DIN Pro", fontSize: 13, fontStyle: "italic",
        color: `color-mix(in oklab, ${c.ink} 85%, transparent)`,
        textAlign: "center", lineHeight: 1.45,
      }}>
        “{c.quip}”
      </div>
    </div>
  );
}

Object.assign(window, { Screen7Products, ProductCard });
