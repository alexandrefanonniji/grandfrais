// Screen 6 — Ton profil culinaire : Le Ravitailleur
// Gradient jaune→rouge, identité forte, carte partageable 9:16.
function Screen6Profile({ active, onNext }) {
  const on = useReveal(active);
  const p = USER.profile;
  const [showShare, setShowShare] = React.useState(false);

  return (
    <div className="gf-app" style={{
      background: `linear-gradient(160deg, ${p.gradient[0]} 0%, ${p.gradient[1]} 100%)`,
      color: "var(--gf-ink)",
    }}>
      <Sparkles items={10} />
      <StatusBar />

      <div style={{ position: "absolute", top: 72, left: 0, right: 0, textAlign: "center" }}
           className={`reveal ${on ? "is-on" : ""}`}>
        <span className="eyebrow" style={{ color: "rgba(41,41,41,.75)" }}>
          ★ Chapitre 4 · Ton profil
        </span>
      </div>

      {/* Illustration — grande, centrée, déborde vers le haut */}
      <div style={{ position: "absolute", top: 60, left: 0, right: 0, height: 420,
                    display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
        <img src="icons/ravitailleur2.png" alt="Le Ravitailleur"
             className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
             style={{ width: 380, height: 380, objectFit: "contain",
                      filter: "drop-shadow(0 12px 28px rgba(0,0,0,.2))" }}/>
      </div>

      {/* Big name + tagline — groupés, juste au-dessus des stats */}
      <div style={{ position: "absolute", bottom: 250, left: 0, right: 0, textAlign: "center",
                    padding: "0 24px", zIndex: 2 }}>
        <h1 className={`display reveal reveal-d2 ${on ? "is-on" : ""}`}
            style={{ margin: 0, fontSize: 56, color: "var(--gf-ink)", lineHeight: 0.9,
                     letterSpacing: "-0.02em" }}>
          Le Ravitailleur
        </h1>
        <p className={`reveal reveal-d3 ${on ? "is-on" : ""}`}
           style={{ margin: "8px 0 0", fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14,
                    color: "var(--gf-ink)", lineHeight: 1.4 }}>
          {p.tagline}
        </p>
      </div>

      {/* 3 stats */}
      <div style={{ position: "absolute", top: 614, left: 24, right: 24 }}
           className={`reveal reveal-d4 ${on ? "is-on" : ""}`}>
        <div style={{ display: "flex", gap: 10 }}>
          {p.highlights.map((h, i) => (
            <div key={i} style={{
              flex: 1, background: "rgba(41,41,41,.08)",
              border: "1px solid rgba(41,41,41,.12)",
              borderRadius: 0, padding: "12px 8px", textAlign: "center",
            }}>
              <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 28,
                            color: "var(--gf-ink)", letterSpacing: "-0.01em", lineHeight: 1 }}>
                {h.v}
              </div>
              <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
                            letterSpacing: ".06em", color: "rgba(41,41,41,.7)",
                            marginTop: 4, textTransform: "uppercase" }}>
                {h.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div style={{ position: "absolute", bottom: 36, left: 24, right: 24, display: "flex", gap: 10 }}
           className={`reveal reveal-d6 ${on ? "is-on" : ""}`}>
        <button onClick={() => setShowShare(true)}
                style={{
          flex: 1, background: "var(--gf-ink)", color: "var(--gf-lime)",
          border: "none", borderRadius: 100, padding: "18px 16px",
          fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          cursor: "pointer",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v12M7 9l5-5 5 5M5 16v3a2 2 0 002 2h10a2 2 0 002-2v-3"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Partager
        </button>
        <button onClick={onNext}
                style={{
          flex: 1, background: "var(--gf-cream)", color: "var(--gf-ink)",
          border: "none", borderRadius: 100, padding: "18px 16px",
          fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          cursor: "pointer",
        }}>
          Continuer
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {showShare && (
        <ShareOverlay onClose={() => setShowShare(false)}>
          <ProfileShareCard p={p}/>
        </ShareOverlay>
      )}
    </div>
  );
}

function ProfileShareCard({ p }) {
  return (
    <div style={{
      width: 320, height: 568, borderRadius: 0, overflow: "hidden", position: "relative",
      background: `linear-gradient(160deg, ${p.gradient[0]} 0%, ${p.gradient[1]} 100%)`,
      color: "var(--gf-ink)", boxShadow: "0 24px 60px rgba(0,0,0,.5)",
    }}>
      <div style={{ position: "absolute", top: 32, left: 24, right: 24,
                    display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 6, height: 6, borderRadius: 3, background: "var(--gf-ink)" }}/>
        <span style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
                       letterSpacing: ".16em", textTransform: "uppercase" }}>
          Grand Frais · Wrapped 26
        </span>
      </div>
      <div style={{ position: "absolute", top: 92, left: 24, right: 24, textAlign: "center" }}>
        <div style={{ fontSize: 76 }}>{p.emoji}</div>
        <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
                      letterSpacing: ".14em", textTransform: "uppercase",
                      opacity: .7, marginTop: 18 }}>
          Mon profil culinaire
        </div>
        <h1 className="display" style={{ margin: "8px 0 0", fontSize: 56, lineHeight: .9 }}>
          Le<br/>Ravitailleur
        </h1>
        <p style={{ margin: "20px 0 0", fontFamily: "DIN Pro", fontWeight: 700, fontSize: 13,
                    lineHeight: 1.4 }}>
          {p.tagline}
        </p>
      </div>
      <div style={{ position: "absolute", bottom: 92, left: 24, right: 24, display: "flex", gap: 8 }}>
        {p.highlights.map((h, i) => (
          <div key={i} style={{
            flex: 1, background: "rgba(41,41,41,.14)", borderRadius: 0,
            padding: "8px 4px", textAlign: "center",
          }}>
            <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 22, lineHeight: 1 }}>
              {h.v}
            </div>
            <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 9,
                          letterSpacing: ".06em", textTransform: "uppercase", marginTop: 3, opacity: .7 }}>
              {h.l}
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 32, left: 24, right: 24,
                    display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 22,
                      color: "var(--gf-ink)" }}>
          @grandfrais
        </div>
        <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
                      letterSpacing: ".1em", textTransform: "uppercase", opacity: .7 }}>
          #MonAnnéeGF
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Screen6Profile, ProfileShareCard });
