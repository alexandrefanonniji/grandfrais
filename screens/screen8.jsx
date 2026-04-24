// Screen 8 — Mon Fridge : 1 chiffre fort
function Screen8Fridge({ active, onNext }) {
  const on = useReveal(active);
  const f = USER.fridge;

  return (
    <div className="gf-app" style={{
      background: "linear-gradient(165deg, #7CC3E8 0%, #2A7AB5 55%, #0F3E6B 100%)",
      color: "var(--gf-cream)",
    }}>
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(255,254,245,.12) 1.2px, transparent 1.2px)",
        backgroundSize: "6px 6px", pointerEvents: "none", opacity: .5,
      }}/>
      <StatusBar color="#fff" />

      {/* Eyebrow */}
      <div style={{ position: "absolute", top: 68, left: 0, right: 0, textAlign: "center" }}>
        <span className="eyebrow" style={{ color: "rgba(255,254,245,.75)" }}>
          ★ Chapitre 6 · Mon Fridge
        </span>
      </div>

      {/* Title */}
      <div style={{ position: "absolute", top: 100, left: 0, right: 0, padding: "0 28px", textAlign: "center" }}>
        <h1 className="display" style={{ margin: 0, fontSize: 38, color: "var(--gf-cream)", lineHeight: 1 }}>
          Tes exploits<br/>
          <span style={{ color: "#CDE6B6" }}>Mon Fridge</span>
        </h1>
      </div>

      {/* BIG number */}
      <div style={{ position: "absolute", top: 230, left: 0, right: 0, textAlign: "center" }}>
        <div style={{
          fontFamily: "Fixture", fontWeight: 900, fontSize: 196, lineHeight: 0.88,
          letterSpacing: "-0.04em", color: "var(--gf-cream)",
          textShadow: "0 8px 50px rgba(255,255,255,.18)",
        }}>
          {f.games}
        </div>
        <div style={{
          fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 32,
          color: "#CDE6B6", letterSpacing: "0.02em", textTransform: "uppercase",
          marginTop: 12,
        }}>
          Parties jouées
        </div>
        <div style={{
          fontFamily: "DIN Pro", fontWeight: 500, fontSize: 14,
          color: "rgba(255,254,245,.8)", marginTop: 10,
        }}>
          Joueur invétéré.
        </div>
      </div>

      {/* Top rank badge */}
      <div style={{ position: "absolute", bottom: 130, left: 24, right: 24, textAlign: "center" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "8px 16px",
          background: "rgba(0,0,0,.25)",
          border: "1px solid rgba(255,254,245,.2)",
        }}>
          <span style={{ fontSize: 20 }}>🏆</span>
          <span style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14,
                         color: "var(--gf-cream)" }}>
            Dans le {f.rank} des joueurs de ton magasin.
          </span>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 36, left: 24, right: 24 }}>
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

Object.assign(window, { Screen8Fridge });
