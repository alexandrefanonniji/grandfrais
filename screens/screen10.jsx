// Screen 10 — Partage final / closing
// Carte récap visuelle, 2 CTAs côte à côte, confettis (via Sparkles).
function Screen10Finale({ active, onNext, onRestart }) {
  const on = useReveal(active);
  const u = USER;
  const [showShare, setShowShare] = React.useState(false);

  return (
    <div className="gf-app" style={{
      background: "linear-gradient(160deg, #0E0E0E 0%, #2A2218 40%, #8B1518 100%)",
      color: "var(--gf-cream)",
    }}>
      <Sparkles items={22} />
      <StatusBar color="#fff" />

      <div style={{ position: "absolute", top: 72, left: 0, right: 0, textAlign: "center" }}
           className={`reveal ${on ? "is-on" : ""}`}>
        <span className="eyebrow" style={{ color: "var(--gf-lime)" }}>
          ★ Chapitre final · Merci
        </span>
      </div>

      {/* Poster card — visual recap, full height */}
      <div style={{ position: "absolute", top: 100, bottom: 110, left: 20, right: 20 }}
           className={`reveal reveal-d2 ${on ? "is-on" : ""}`}>
        <div style={{
          height: "100%",
          background: "var(--gf-cream)", color: "var(--gf-ink)",
          borderRadius: 0, overflow: "hidden",
          border: "2px solid var(--gf-lime)",
          boxShadow: "0 24px 50px rgba(0,0,0,.5)",
          position: "relative",
          display: "flex", flexDirection: "column",
        }}>
          {/* Top: profil héros */}
          <div style={{
            background: "linear-gradient(160deg, #FBBA00 0%, #E51F22 100%)",
            padding: "18px 22px 20px", position: "relative", overflow: "hidden",
            flexShrink: 0, minHeight: 180,
          }}>
            <FloatingEmojis items={["🥔","🥕","🧀","🍞","🥬"]} count={8} style={{ opacity: 0 }}/>
            {/* Illustration en absolute à droite */}
            <img src="icons/ravitailleur2.png" alt="Le Ravitailleur"
                 style={{ position: "absolute", right: -10, bottom: -10,
                          width: 180, height: 180, objectFit: "contain",
                          filter: "drop-shadow(0 4px 12px rgba(0,0,0,.2))" }}/>
            {/* Textes indépendants à gauche */}
            <div style={{ position: "relative", zIndex: 2, maxWidth: "55%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: "var(--gf-cream)", flexShrink: 0 }}/>
                <span style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
                               letterSpacing: ".16em", textTransform: "uppercase",
                               color: "var(--gf-cream)" }}>
                  Grand Frais · Wrapped 2026
                </span>
              </div>
              <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
                            letterSpacing: ".14em", textTransform: "uppercase",
                            color: "rgba(255,254,245,.75)", marginTop: 18 }}>
                Ton profil 2026
              </div>
              <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 44,
                            color: "var(--gf-cream)", lineHeight: 0.88, marginTop: 6,
                            letterSpacing: "-0.02em",
                            textShadow: "0 3px 0 rgba(0,0,0,.08)" }}>
                Le<br/>Ravitailleur
              </div>
            </div>
          </div>

          {/* Bottom: stats + produit phare + closing, in a flex column */}
          <div style={{ padding: "20px 20px 22px", display: "flex", flexDirection: "column",
                        flex: 1, minHeight: 0 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              <BigStat v="58"    l="visites"    accent="var(--gf-olive)" />
              <BigStat v="892"   l="produits"   accent="var(--gf-red)" />
              <BigStat v="62"    l="kg de 🥔"   accent="var(--gf-ink)" />
            </div>

            <div style={{ height: 1, background: "rgba(41,41,41,.1)", margin: "18px 0" }}/>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 0, overflow: "hidden",
                flexShrink: 0,
              }}>
                <img src="icons/pesto.png" alt="Pesto Roquette & Noix"
                     style={{ width: "100%", height: "100%", objectFit: "contain",
                              filter: "drop-shadow(0 2px 6px rgba(0,0,0,.2))" }}/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 9,
                              letterSpacing: ".12em", textTransform: "uppercase",
                              color: "var(--gf-olive)" }}>
                  Ton produit phare
                </div>
                <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 24,
                              color: "var(--gf-ink)", lineHeight: 1, marginTop: 3 }}>
                  Pesto Roquette & Noix
                </div>
                <div style={{ fontFamily: "DIN Pro", fontSize: 11,
                              color: "var(--gf-ink-soft)", marginTop: 3 }}>
                  38 achats — une découverte. Maintenant c'est une religion.
                </div>
              </div>
            </div>

            {/* Spacer pushes closing to bottom of card */}
            <div style={{ flex: 1 }}/>

            {/* Closing line, inside card */}
            <div style={{
              borderTop: "1px dashed rgba(41,41,41,.2)",
              paddingTop: 14, textAlign: "center",
            }}>
              <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 9,
                            letterSpacing: ".16em", textTransform: "uppercase",
                            color: "var(--gf-olive)" }}>
                Merci d'avoir été fidèle
              </div>
              <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 28,
                            color: "var(--gf-ink)", lineHeight: 1, marginTop: 6,
                            letterSpacing: "-0.01em" }}>
                À l'année prochaine <span style={{ color: "var(--gf-red)" }}>🎉</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2 CTAs */}
      <div style={{ position: "absolute", bottom: 36, left: 20, right: 20, display: "flex", gap: 10 }}
           className={`reveal reveal-d6 ${on ? "is-on" : ""}`}>
        <button onClick={() => setShowShare(true)} style={{
          flex: 1, background: "var(--gf-lime)", color: "var(--gf-ink)",
          border: "none", borderRadius: 100, padding: "16px 12px",
          fontFamily: "DIN Pro", fontWeight: 700, fontSize: 13,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          cursor: "pointer",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v12M7 9l5-5 5 5M5 16v3a2 2 0 002 2h10a2 2 0 002-2v-3"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Partager
        </button>
        <button onClick={onRestart} style={{
          flex: 1, background: "var(--gf-cream)", color: "var(--gf-ink)",
          border: "none", borderRadius: 100, padding: "16px 12px",
          fontFamily: "DIN Pro", fontWeight: 700, fontSize: 13,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          cursor: "pointer",
        }}>
          <span style={{ fontSize: 14 }}>🍳</span>
          Ma playlist
        </button>
      </div>

      {showShare && (
        <ShareOverlay onClose={() => setShowShare(false)}>
          <FinaleShareCard u={u}/>
        </ShareOverlay>
      )}
    </div>
  );
}

function BigStat({ v, l, accent = "var(--gf-ink)" }) {
  return (
    <div style={{
      background: "var(--gf-sand)", borderRadius: 0,
      padding: "10px 8px 8px", textAlign: "center",
    }}>
      <div style={{
        fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 32,
        lineHeight: 0.9, color: accent, letterSpacing: "-0.02em",
        fontFeatureSettings: '"tnum"',
      }}>
        {v}
      </div>
      <div style={{
        fontFamily: "DIN Pro", fontWeight: 700, fontSize: 9,
        letterSpacing: ".08em", textTransform: "uppercase",
        color: "var(--gf-ink-soft)", marginTop: 4,
      }}>
        {l}
      </div>
    </div>
  );
}

function FloatingEmojis({ items = ["🥔"], count = 8 }) {
  const seeds = React.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      e: items[i % items.length],
      x: (i * 97) % 100,
      y: (i * 53) % 100,
      r: (i * 37) % 360,
      s: 0.7 + ((i * 13) % 8) * 0.07,
    })),
    [items, count]
  );
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.3 }}>
      {seeds.map((s, i) => (
        <span key={i} style={{
          position: "absolute", left: s.x + "%", top: s.y + "%",
          transform: `rotate(${s.r}deg) scale(${s.s})`,
          fontSize: 22,
        }}>{s.e}</span>
      ))}
    </div>
  );
}

function KV({ k, v, accent = "var(--gf-ink)" }) {
  return (
    <div>
      <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 9,
                    letterSpacing: ".1em", textTransform: "uppercase",
                    color: "var(--gf-ink-soft)" }}>
        {k}
      </div>
      <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 12,
                    color: accent, marginTop: 2, lineHeight: 1.2 }}>
        {v}
      </div>
    </div>
  );
}

function FinaleShareCard({ u }) {
  return (
    <div style={{
      width: 320, height: 568, borderRadius: 0, overflow: "hidden", position: "relative",
      background: "linear-gradient(160deg, #0E0E0E 0%, #2A2218 40%, #8B1518 100%)",
      color: "var(--gf-cream)", boxShadow: "0 24px 60px rgba(0,0,0,.5)",
      padding: 32,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 6, height: 6, borderRadius: 3, background: "var(--gf-lime)" }}/>
        <span style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
                       letterSpacing: ".16em", textTransform: "uppercase" }}>
          Grand Frais · Wrapped 26
        </span>
      </div>

      <h1 className="display" style={{ margin: "40px 0 0", fontSize: 48,
                                        color: "var(--gf-lime)", lineHeight: .9 }}>
        Mon<br/>année<br/>2026
      </h1>

      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
        <RowKV k="Profil" v="Le Ravitailleur" />
        <RowKV k="Chiffre fou"   v="62 kg de pommes de terre" />
        <RowKV k="Rayon n°1"     v="Fruits & Légumes" />
        <RowKV k="Recette star"  v="Gratin dauphinois" />
      </div>

      <div style={{ position: "absolute", bottom: 32, left: 32, right: 32,
                    display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 26,
                      color: "var(--gf-cream)" }}>
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

function RowKV({ k, v }) {
  return (
    <div>
      <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 9,
                    letterSpacing: ".12em", textTransform: "uppercase", opacity: .6 }}>
        {k}
      </div>
      <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14,
                    color: "var(--gf-cream)", marginTop: 2 }}>
        {v}
      </div>
    </div>
  );
}

Object.assign(window, { Screen10Finale, FinaleShareCard, KV, RowKV, BigStat, FloatingEmojis });
