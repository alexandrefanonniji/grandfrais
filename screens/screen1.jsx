// Screen 1 — Ouverture cinématique
// "2026, c'est terminé." — chiffre 2026 géant façon néon doré,
// background sombre (noir → vert foncé), particules dorées qui tombent.
function Screen1Intro({ active, onNext }) {
  const on = useReveal(active);
  return (
    <div className="gf-app" style={{
      background: "radial-gradient(ellipse at 50% 120%, #0E3D28 0%, #0A0A0A 70%)",
      color: "var(--gf-cream)",
      overflow: "visible",
    }}>
      {/* subtle grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)",
        backgroundSize: "3px 3px", pointerEvents: "none", opacity: .5,
      }}/>
      <Sparkles items={16} />
      <StatusBar color="#fff" />

      {/* Logo Grand Frais */}
      <div style={{ position: "absolute", top: 72, left: 0, right: 0, textAlign: "center" }}
           className={`reveal ${on ? "is-on" : ""}`}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px",
          border: "1px solid rgba(255,254,245,.2)", borderRadius: 100,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: 3, background: "var(--gf-lime)",
          }}/>
          <span style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 11, letterSpacing: ".16em",
                         textTransform: "uppercase", color: "rgba(255,254,245,.9)" }}>
            Grand Frais · Wrapped
          </span>
        </div>
      </div>

      {/* Headline */}
      <div style={{ position: "absolute", top: 140, left: 0, right: 0, padding: "0 28px", textAlign: "center" }}>
        <h1 className={`display reveal reveal-d1 ${on ? "is-on" : ""}`}
            style={{ margin: 0, fontSize: 52, color: "var(--gf-cream)", lineHeight: 1 }}>
          2026, c'est<br/>
          <span style={{ color: "var(--gf-lime)" }}>terminé.</span>
        </h1>
        <p className={`reveal reveal-d2 ${on ? "is-on" : ""}`}
           style={{ marginTop: 22, fontFamily: "DIN Pro", fontSize: 14,
                    color: "rgba(255,254,245,.7)", lineHeight: 1.5, fontStyle: "italic" }}>
          Mais toi et Grand Frais,<br/>
          vous avez vécu <em style={{ fontStyle: "normal", color: "var(--gf-cream)", fontWeight: 700 }}>de grands moments très frais</em>.
        </p>
      </div>

      {/* Chiffre 2026 géant — déborde volontairement des deux côtés */}
      <div style={{ position: "absolute", top: 430, left: 0, right: 0, height: 240,
                    display: "flex", justifyContent: "center", alignItems: "center",
                    overflow: "visible" }}>
        {/* Glow halo */}
        <div className={`reveal reveal-d3 ${on ? "is-on" : ""}`}
             style={{
          position: "absolute", width: 340, height: 340, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,186,0,.25) 0%, rgba(205,213,8,.12) 30%, transparent 65%)",
          filter: "blur(20px)",
        }}/>
        {/* Number — centré, déborde gauche/droite */}
        <div className={`reveal reveal-d4 ${on ? "is-on" : ""}`}
             style={{
          fontFamily: "Fixture", fontWeight: 900, fontSize: 160, lineHeight: 0.88,
          letterSpacing: "-0.04em",
          background: "linear-gradient(180deg, #E51F22 0%, #CDD508 50%, #FFFEF5 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          position: "relative", whiteSpace: "nowrap",
        }}>
          2026
        </div>
      </div>

      {/* CTA */}
      <div style={{ position: "absolute", bottom: 48, left: 24, right: 24 }}
           className={`reveal reveal-d6 ${on ? "is-on" : ""}`}>
        <button onClick={onNext} className="gf-btn gf-btn-block"
                style={{
          background: "var(--gf-lime)", color: "var(--gf-ink)",
          borderRadius: 100, padding: "18px 28px",
          fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10, width: "100%",
        }}>
          Découvrir mon récap
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div style={{ marginTop: 14, textAlign: "center", fontFamily: "DIN Pro", fontSize: 11,
                      color: "rgba(255,254,245,.5)", letterSpacing: ".1em", textTransform: "uppercase" }}>
          10 chapitres · 60 secondes
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Screen1Intro });
