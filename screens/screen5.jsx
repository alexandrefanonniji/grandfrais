// Screen 5 — Le chiffre improbable
// Produit géant + quantité en XXL + équivalence absurde.
// Couleur vive liée au produit (pomme de terre → brun terre).
function Screen5Absurd({ active, onNext }) {
  const on = useReveal(active);
  const s = USER.absurdStat;

  return (
    <div className="gf-app" style={{
      background: "linear-gradient(160deg, #C87F3D 0%, #8B4A1F 100%)",
      color: "var(--gf-cream)",
    }}>
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(255,254,245,.05) 1px, transparent 1px)",
        backgroundSize: "3px 3px", pointerEvents: "none",
      }}/>
      <StatusBar color="#fff" />

      <div style={{ position: "absolute", top: 72, left: 0, right: 0, textAlign: "center" }}
           className={`reveal ${on ? "is-on" : ""}`}>
        <span className="eyebrow" style={{ color: "rgba(255,254,245,.7)" }}>
          ★ Chapitre 3 · Le chiffre improbable
        </span>
      </div>

      {/* Product illustration */}
      <div style={{ position: "absolute", top: 110, left: 0, right: 0,
                    height: 180, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
             style={{
          position: "absolute", width: 200, height: 200, borderRadius: "50%",
          background: "rgba(255,254,245,.08)",
        }}/>
        <div className={`reveal reveal-d2 ${on ? "is-on" : ""}`}
             style={{ fontSize: 130, lineHeight: 1,
                      animation: on ? "gfFloat 3s ease-in-out infinite" : "none",
                      filter: "drop-shadow(0 20px 30px rgba(0,0,0,.3))" }}>
          {s.emoji}
        </div>
      </div>

      {/* HUGE number */}
      <div style={{ position: "absolute", top: 320, left: 0, right: 0, textAlign: "center" }}
           className={`reveal reveal-d3 ${on ? "is-on" : ""}`}>
        <div style={{
          fontFamily: "Fixture", fontWeight: 900, fontSize: 128, lineHeight: 0.88,
          letterSpacing: "-0.03em", color: "var(--gf-lime)",
          textShadow: "0 8px 30px rgba(0,0,0,.3)",
        }}>
          {s.amount}
        </div>
        <div style={{
          fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 26,
          color: "var(--gf-cream)", textTransform: "uppercase",
          letterSpacing: "-0.005em", marginTop: 4,
        }}>
          de {s.product.toLowerCase()}
        </div>
      </div>

      {/* Equivalence card */}
      <div style={{ position: "absolute", bottom: 150, left: 24, right: 24 }}
           className={`reveal reveal-d5 ${on ? "is-on" : ""}`}>
        <div style={{
          background: "rgba(255,254,245,.12)", backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,254,245,.22)",
          borderRadius: 0, padding: "18px 22px",
        }}>
          <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
                        letterSpacing: ".16em", textTransform: "uppercase",
                        color: "var(--gf-lime)", marginBottom: 8 }}>
            ≈ Équivalence
          </div>
          <p style={{ margin: 0, fontFamily: "DIN Pro", fontSize: 15,
                      color: "var(--gf-cream)", lineHeight: 1.45 }}>
            {s.equivalence}
          </p>
        </div>
      </div>

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

Object.assign(window, { Screen5Absurd });
