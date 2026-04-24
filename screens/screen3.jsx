// Screen 3 — Ton rayon n°1
// La couleur dominante = celle du rayon gagnant (F&L = vert profond).
// Hero produit + nom de rayon en grand + % + podium des 3 rayons.
function Screen3TopAisle({ active, onNext }) {
  const on = useReveal(active);
  const a = USER.topAisle;

  return (
    <div className="gf-app" style={{
      background: a.color,
      color: "var(--gf-cream)",
    }}>
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px)",
        backgroundSize: "3px 3px", pointerEvents: "none", opacity: .6,
      }}/>
      <StatusBar color="#fff" />

      {/* Eyebrow */}
      <div style={{ position: "absolute", top: 68, left: 0, right: 0, textAlign: "center" }}
           className={`reveal ${on ? "is-on" : ""}`}>
        <span className="eyebrow" style={{ color: "rgba(255,254,245,.7)" }}>
          ★ Chapitre 2 · Ton rayon n°1
        </span>
      </div>

      {/* Hero produce cluster */}
      <div style={{ position: "absolute", top: 100, left: 0, right: 0, height: 210,
                    display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
             style={{
          position: "absolute", width: 200, height: 200, borderRadius: "50%",
          background: a.colorSoft, opacity: 0.45,
        }}/>
        <div className={`reveal reveal-d2 ${on ? "is-on" : ""}`}
             style={{ position: "absolute", top: 20, left: 60,
                      animation: on ? "gfFloat 4s ease-in-out infinite" : "none" }}>
          <Produce label="SALADE" w={110} h={110}/>
        </div>
        <div className={`reveal reveal-d3 ${on ? "is-on" : ""}`}
             style={{ position: "absolute", top: 34, right: 60, transform: "rotate(12deg)",
                      animation: on ? "gfFloat 4s ease-in-out infinite .4s" : "none" }}>
          <Produce label="TOMATE" w={86} h={86}/>
        </div>
        <div className={`reveal reveal-d4 ${on ? "is-on" : ""}`}
             style={{ position: "absolute", bottom: 8, left: 80, transform: "rotate(-8deg)",
                      animation: on ? "gfFloat 4s ease-in-out infinite .8s" : "none" }}>
          <Produce label="CAROTTE" w={100} h={86}/>
        </div>
        <div className={`reveal reveal-d5 ${on ? "is-on" : ""}`}
             style={{ position: "absolute", bottom: 28, right: 52, transform: "rotate(5deg)",
                      animation: on ? "gfFloat 4s ease-in-out infinite .3s" : "none" }}>
          <Produce label="POIVRON" w={70} h={70}/>
        </div>
      </div>

      {/* Title + stat */}
      <div style={{ position: "absolute", top: 324, left: 0, right: 0, padding: "0 28px", textAlign: "center" }}>
        <div className={`reveal reveal-d3 ${on ? "is-on" : ""}`}
             style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 11,
                      letterSpacing: ".14em", textTransform: "uppercase",
                      color: "rgba(255,254,245,.7)" }}>
          Ton terrain de chasse
        </div>
        <h1 className={`display reveal reveal-d4 ${on ? "is-on" : ""}`}
            style={{ margin: "8px 0 0", fontSize: 46, color: "var(--gf-cream)", lineHeight: .95 }}>
          Fruits<br/>& Légumes
        </h1>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 8,
                      marginTop: 10 }}
             className={`reveal reveal-d5 ${on ? "is-on" : ""}`}>
          <span style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 54,
                         color: "var(--gf-lime)", lineHeight: 1, letterSpacing: "-0.02em" }}>
            {a.share}%
          </span>
          <span style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 12,
                         letterSpacing: ".08em", textTransform: "uppercase",
                         color: "rgba(255,254,245,.8)" }}>
            de tes achats
          </span>
        </div>
      </div>

      {/* Podium — 3 marches */}
      <div style={{ position: "absolute", bottom: 130, left: 24, right: 24 }}
           className={`reveal reveal-d6 ${on ? "is-on" : ""}`}>
        <Podium items={a.podium} />
      </div>

      {/* CTA */}
      <div style={{ position: "absolute", bottom: 36, left: 24, right: 24 }}
           className={`reveal reveal-d6 ${on ? "is-on" : ""}`}>
        <button onClick={onNext} className="gf-btn gf-btn-block"
                style={{ background: "var(--gf-cream)", color: "var(--gf-ink)" }}>
          Continuer
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// Podium 3 marches : 2e à gauche (argent), 1er au centre (or, le + haut), 3e à droite (bronze)
function Podium({ items }) {
  const [first, second, third] = items; // items[0] = 1er
  const medals = ["🥇", "🥈", "🥉"];
  // Order visuel : 2, 1, 3 — hauteurs : 56, 80, 44
  const order = [
    { it: second, medal: medals[1], h: 56, rank: 2 },
    { it: first,  medal: medals[0], h: 80, rank: 1 },
    { it: third,  medal: medals[2], h: 44, rank: 3 },
  ];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 8,
                  background: "rgba(0,0,0,.25)",
                  border: "1px solid rgba(255,254,245,.15)",
                  borderRadius: 0, padding: "14px 14px 0" }}>
      {order.map((o, i) => (
        <div key={o.rank} style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 26, lineHeight: 1 }}>{o.it.emoji}</div>
          <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
                        color: "var(--gf-cream)", marginTop: 4,
                        lineHeight: 1.2, minHeight: 24,
                        textTransform: "uppercase", letterSpacing: ".04em" }}>
            {o.it.name}
          </div>
          <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 18,
                        color: "var(--gf-lime)", marginTop: 2, lineHeight: 1 }}>
            {o.it.pct}%
          </div>
          {/* Step */}
          <div style={{
            marginTop: 8, height: o.h,
            background: o.rank === 1 ? "rgba(255,254,245,.35)" : "rgba(255,254,245,.2)",
            borderTop: "2px solid rgba(255,254,245,.5)",
            borderTopLeftRadius: 0, borderTopRightRadius: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Fixture", fontWeight: 900, fontSize: 22,
            color: "rgba(255,254,245,.85)",
          }}>
            {o.medal}
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Screen3TopAisle, Podium });
