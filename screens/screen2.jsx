// Screen 2 — Ton année en un coup d'œil
// Beige chaud, 3 gros chiffres empilés (visites / dépensés / produits),
// + encart magasin en bas. Compteur roll-up à l'entrée.
function Screen2Stats({ active, onNext }) {
  const on = useReveal(active);
  const u = USER;

  const visits = useCountUp(u.visits,   on,  900, 100);
  const saved  = useCountUp(u.saved,    on, 1100, 200);
  const prods  = useCountUp(u.products, on, 1300, 350);

  return (
    <div className="gf-app paper-bg" style={{ background: "var(--gf-sand)" }}>
      <StatusBar />

      {/* Eyebrow */}
      <div style={{ position: "absolute", top: 68, left: 0, right: 0, textAlign: "center" }}
           className={`reveal ${on ? "is-on" : ""}`}>
        <span className="eyebrow" style={{ color: "var(--gf-olive)" }}>
          ★ Chapitre 1 · En un coup d'œil
        </span>
      </div>

      {/* Title */}
      <div style={{ position: "absolute", top: 100, left: 0, right: 0, padding: "0 24px", textAlign: "center" }}
           className={`reveal reveal-d1 ${on ? "is-on" : ""}`}>
        <h1 className="display" style={{ margin: 0, fontSize: 38, color: "var(--gf-ink)", lineHeight: 1 }}>
          Ton année<br/>
          <span style={{ color: "var(--gf-red)" }}>en 3 chiffres</span>
        </h1>
      </div>

      {/* 3 stats stacked */}
      <div style={{ position: "absolute", top: 216, left: 20, right: 20,
                    display: "flex", flexDirection: "column", gap: 12 }}>
        <StatRow
          className={`reveal reveal-d2 ${on ? "is-on" : ""}`}
          icon="calendar"
          value={visits} label="visites" sub="à ce stade, c'est une relation sérieuse." accent="var(--gf-red)"/>
        <StatRow
          className={`reveal reveal-d3 ${on ? "is-on" : ""}`}
          icon="tag"
          value={fmtMoney(saved)} label="économisés" sub="on vous aime et on vous le rend bien." accent="var(--gf-red)"/>
        <StatRow
          className={`reveal reveal-d4 ${on ? "is-on" : ""}`}
          icon="bag"
          value={fmtNum(prods)} label="produits" sub="soit plus qu'un buffet à volonté." accent="var(--gf-olive)"/>
      </div>

      {/* Store card */}
      <div style={{ position: "absolute", bottom: 140, left: 20, right: 20 }}
           className={`reveal reveal-d5 ${on ? "is-on" : ""}`}>
        <div style={{
          background: "var(--gf-ink)", color: "var(--gf-cream)",
          borderRadius: 0, padding: "14px 16px",
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 0, flexShrink: 0,
            background: "var(--gf-lime)", color: "var(--gf-ink)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" stroke="currentColor" strokeWidth="1.8"/>
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 18,
                          color: "var(--gf-cream)", lineHeight: 1.1 }}>
              {u.store.name}
            </div>
            <div style={{ fontFamily: "DIN Pro", fontSize: 11, color: "var(--gf-lime)",
                          marginTop: 2, lineHeight: 1.3 }}>
              {u.store.rank}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ position: "absolute", bottom: 36, left: 24, right: 24 }}
           className={`reveal reveal-d6 ${on ? "is-on" : ""}`}>
        <Btn onClick={onNext} icon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }>Continuer</Btn>
      </div>
    </div>
  );
}

function StatIcon({ kind }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };
  if (kind === "calendar") return (
    <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
  );
  if (kind === "basket") return (
    <svg {...common}><path d="M4 9h16l-1.5 10a2 2 0 01-2 1.7H7.5A2 2 0 015.5 19L4 9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 9l3-5M16 9l-3-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
  );
  if (kind === "tag") return (
    <svg {...common}><path d="M3 12V5a2 2 0 012-2h7l9 9-9 9-9-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="8" cy="8" r="1.6" fill="currentColor"/></svg>
  );
  return ( // bag
    <svg {...common}><path d="M5 8h14l-1 12a2 2 0 01-2 1.8H8A2 2 0 016 20L5 8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
  );
}

function StatRow({ value, label, sub, accent = "var(--gf-ink)", icon, className = "" }) {
  return (
    <div className={className} style={{
      background: "var(--gf-cream)",
      borderRadius: 0,
      padding: "16px 18px",
      boxShadow: "0 2px 0 rgba(41,41,41,.06)",
      border: "1px solid rgba(41,41,41,.06)",
      display: "flex", alignItems: "center", gap: 16,
    }}>
      <div style={{
        width: 46, height: 46, borderRadius: 0, flexShrink: 0,
        background: `color-mix(in oklab, ${accent} 14%, var(--gf-sand))`,
        color: accent,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <StatIcon kind={icon}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 62,
          lineHeight: 0.9, color: accent, letterSpacing: "-0.02em",
          fontFeatureSettings: '"tnum"',
        }}>
          {value}
        </div>
        <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 13,
                      textTransform: "uppercase", letterSpacing: ".08em", color: "var(--gf-ink)",
                      marginTop: 2 }}>
          {label}
        </div>
        {sub && (
          <div style={{ fontFamily: "DIN Pro", fontStyle: "italic", fontSize: 11,
                        color: "var(--gf-ink-soft)", marginTop: 3, lineHeight: 1.3 }}>
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}

function useCountUp(target, active, duration = 1000, delay = 0) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!active) { setV(0); return; }
    let raf, start;
    const t = setTimeout(() => {
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min(1, (ts - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setV(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [active, target]);
  return v;
}

function fmtNum(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " "); }
function fmtMoney(n) { return fmtNum(n) + " €"; }

Object.assign(window, { Screen2Stats, StatRow, StatIcon, useCountUp, fmtNum, fmtMoney });
