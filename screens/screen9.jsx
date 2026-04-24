// Screen 9 — Ta Playlist "Mes Recettes 2026" — le cadeau utile
// Liste de cartes recettes avec tag de justification + CTA sticky.
function Screen9Playlist({ active, onNext }) {
  const on = useReveal(active);
  const u = USER;
  const [saved, setSaved] = React.useState(false);

  return (
    <div className="gf-app paper-bg" style={{ background: "var(--gf-sand)", color: "var(--gf-ink)" }}>
      <StatusBar />

      {/* Header */}
      <div style={{ position: "absolute", top: 60, left: 24, right: 24, paddingTop: 20 }}
           className={`reveal ${on ? "is-on" : ""}`}>
        <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 11,
                      letterSpacing: ".16em", textTransform: "uppercase",
                      color: "var(--gf-olive)" }}>
          ★ Chapitre 7 · Le cadeau
        </div>
        <h1 className="display" style={{ margin: "8px 0 0", fontSize: 46,
                                          color: "var(--gf-ink)", lineHeight: 0.92 }}>
          Tes recettes<br/>
          <span style={{ color: "var(--gf-red)" }}>2026</span>
        </h1>
        <p style={{ margin: "10px 0 0", fontFamily: "DIN Pro", fontSize: 13,
                    color: "var(--gf-ink-soft)", lineHeight: 1.45 }}>
          <strong style={{ color: "var(--gf-ink)" }}>{u.playlist.length} recettes</strong> faites pour toi,
          basées sur toute ton année.
        </p>
      </div>

      {/* Scrollable list */}
      <div style={{
        position: "absolute", top: 238, left: 0, right: 0, bottom: 110,
        overflowY: "auto", padding: "0 20px 16px",
        scrollbarWidth: "none",
      }}>
        {u.playlist.map((r, i) => (
          <div key={i} className={`reveal reveal-d${Math.min(i + 1, 6)} ${on ? "is-on" : ""}`}
               style={{
            display: "flex", gap: 12, padding: "12px",
            background: "var(--gf-cream)",
            border: "1px solid rgba(41,41,41,.08)",
            borderRadius: 0, marginBottom: 10,
          }}>
            {/* Image */}
            <div style={{
              width: 70, height: 70, borderRadius: 0, flexShrink: 0,
              overflow: "hidden", background: "var(--gf-sand-2)",
            }}>
              {r.img
                ? <img src={r.img} alt={r.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                : <Produce label={r.label} w={56} h={56}/>
              }
            </div>
            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 18,
                            color: "var(--gf-ink)", lineHeight: 1.05, letterSpacing: "-0.005em" }}>
                {r.name}
              </div>
              <div style={{ fontFamily: "DIN Pro", fontStyle: "italic", fontSize: 11,
                            color: "var(--gf-red)", marginTop: 3, lineHeight: 1.3 }}>
                {r.tag}
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 6, fontFamily: "DIN Pro",
                            fontSize: 10, color: "var(--gf-ink-soft)",
                            letterSpacing: ".06em", textTransform: "uppercase" }}>
                <span>⏱ {r.dur}</span>
                <span>· {r.diff}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fade at bottom */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 110, height: 30,
                    background: "linear-gradient(180deg, transparent, var(--gf-sand))",
                    pointerEvents: "none" }}/>

      {/* Sticky CTA */}
      <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
        {saved ? (
          <div style={{
            background: "var(--gf-lime)", color: "var(--gf-ink)",
            borderRadius: 100, padding: "18px 20px", textAlign: "center",
            fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14,
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span>✓ Playlist sauvegardée</span>
            <button onClick={onNext} style={{
              background: "var(--gf-ink)", color: "var(--gf-lime)",
              border: "none", borderRadius: 100, padding: "8px 14px",
              fontFamily: "DIN Pro", fontWeight: 700, fontSize: 12, cursor: "pointer",
            }}>
              Suivant →
            </button>
          </div>
        ) : (
          <button onClick={() => setSaved(true)} style={{
            width: "100%", background: "var(--gf-ink)", color: "var(--gf-lime)",
            border: "none", borderRadius: 100, padding: "18px 20px",
            fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            boxShadow: "0 10px 28px rgba(41,41,41,.25)",
          }}>
            Ajouter à mes playlists
            <span style={{ fontSize: 16 }}>🍳</span>
          </button>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Screen9Playlist });
