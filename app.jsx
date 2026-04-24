// App shell — flow view (one screen at a time) + canvas view (all side by side) + Tweaks
// 9 écrans, fade simple entre chaque.
const SCREENS = [
  { C: Screen1Intro,    key: "intro",    label: "01 Intro" },
  { C: Screen2Stats,    key: "stats",    label: "02 Stats + magasin" },
  { C: Screen3TopAisle, key: "topAisle", label: "03 Rayon n°1" },
  { C: Screen5Absurd,   key: "absurd",   label: "04 Chiffre improbable" },
  { C: Screen6Profile,  key: "profile",  label: "05 Profil culinaire" },
  { C: Screen7Products, key: "products", label: "06 Tes produits" },
  { C: Screen8Fridge,   key: "fridge",   label: "07 Mon Fridge" },
  { C: Screen9Playlist, key: "playlist", label: "08 Playlist" },
  { C: Screen10Finale,  key: "finale",   label: "09 Partage" },
];

function PhoneChrome({ children }) {
  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      {children}
    </div>
  );
}

function FlowView() {
  const [i, setI] = React.useState(() => {
    const s = Number(localStorage.getItem("gf-wrapped-idx"));
    return Number.isFinite(s) ? Math.max(0, Math.min(SCREENS.length - 1, s)) : 0;
  });
  const [dir, setDir] = React.useState(1);
  const [screenActive, setScreenActive] = React.useState(true);
  const lockRef = React.useRef(false);

  React.useEffect(() => { localStorage.setItem("gf-wrapped-idx", String(i)); }, [i]);

  // Simple fade between screens
  const go = (delta) => {
    if (lockRef.current) return;
    const next = Math.max(0, Math.min(SCREENS.length - 1, i + delta));
    if (next === i) return;
    lockRef.current = true;
    setDir(delta);
    setScreenActive(false);
    setTimeout(() => { setI(next); setScreenActive(true); }, 200);
    setTimeout(() => { lockRef.current = false; }, 500);
  };

  const jumpTo = (next) => {
    if (lockRef.current || next === i) return;
    go(next - i);
  };

  React.useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  const Active = SCREENS[i].C;

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 28 }}>
      <FlowNav dir="prev" onClick={() => go(-1)} disabled={i === 0} />

      <div style={{ position: "relative" }} data-screen-label={SCREENS[i].label}>
        <PhoneChrome>
          <div key={i} style={{
            animation: `gfFade .35s cubic-bezier(.2,.8,.3,1) both`,
            height: "100%", width: "100%",
          }}>
            <Active active={screenActive}
                    onNext={() => go(1)}
                    onRestart={() => { setDir(-1); setI(0); }} />
          </div>
        </PhoneChrome>
      </div>

      <FlowNav dir="next" onClick={() => go(1)} disabled={i === SCREENS.length - 1} />

      {/* Step label */}
      <div style={{ position: "absolute", bottom: -58, left: 0, right: 0, textAlign: "center" }}>
        <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,.8)",
                      letterSpacing: ".12em", textTransform: "uppercase" }}>
          {SCREENS[i].label} · {i + 1}/{SCREENS.length}
        </div>
        <div style={{ marginTop: 10, display: "flex", gap: 6, justifyContent: "center" }}>
          {SCREENS.map((s, k) => (
            <button key={s.key} onClick={() => jumpTo(k)}
                    aria-label={s.label}
                    style={{
              width: k === i ? 28 : 8, height: 8, borderRadius: 4,
              background: k <= i ? "var(--gf-lime)" : "rgba(255,255,255,.2)",
              border: "none", cursor: "pointer", transition: "width .3s, background .3s",
              padding: 0,
            }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowNav({ dir, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} aria-label={dir} style={{
      width: 48, height: 48, borderRadius: "50%",
      background: "rgba(255,255,255,.08)", color: "#fff",
      border: "1px solid rgba(255,255,255,.15)", cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.25 : 1, display: "flex", alignItems: "center", justifyContent: "center",
      backdropFilter: "blur(8px)", transition: "background .2s",
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d={dir === "next" ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function CanvasView() {
  return (
    <div style={{
      width: "100%", height: "100%", overflowX: "auto", overflowY: "hidden",
      padding: "60px 40px", boxSizing: "border-box",
      display: "flex", alignItems: "center", gap: 32,
      background: "radial-gradient(ellipse at top, #242424 0%, #121212 70%)",
    }}>
      {SCREENS.map((s, i) => (
        <div key={s.key} style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}
             data-screen-label={s.label}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, color: "rgba(255,255,255,.6)",
                        fontFamily: "DIN Pro", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700 }}>
            <span style={{ color: "var(--gf-lime)", fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 18, letterSpacing: 0 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{s.label.slice(3)}</span>
          </div>
          <PhoneChrome>
            <s.C active={true} onNext={() => {}} onRestart={() => {}} />
          </PhoneChrome>
        </div>
      ))}
      <div style={{ flexShrink: 0, width: 20 }} />
    </div>
  );
}

function App() {
  const [view, setView] = React.useState(() => localStorage.getItem("gf-wrapped-view") || "flow");
  React.useEffect(() => { localStorage.setItem("gf-wrapped-view", view); }, [view]);

  const [tweaksOn, setTweaksOn] = React.useState(false);
  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setTweaksOn(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <>
      <div className="view-switch">
        <button className={view === "flow" ? "on" : ""} onClick={() => setView("flow")}>Flow</button>
        <button className={view === "canvas" ? "on" : ""} onClick={() => setView("canvas")}>Canvas</button>
      </div>

      {view === "flow" ? <FlowView/> : <CanvasView/>}

      {tweaksOn && <TweaksPanel view={view} setView={setView}/>}
    </>
  );
}

function TweaksPanel({ view, setView }) {
  return (
    <div className="tweaks on">
      <h4>Tweaks</h4>
      <label>
        <span>View mode</span>
        <select value={view} onChange={e => setView(e.target.value)}
                style={{ background: "transparent", color: "var(--gf-cream)", border: "1px solid rgba(255,255,255,.2)", padding: "4px 8px", borderRadius: 6 }}>
          <option value="flow">Flow (one screen)</option>
          <option value="canvas">Canvas (all 9)</option>
        </select>
      </label>
      <label onClick={() => { localStorage.removeItem("gf-wrapped-idx"); location.reload(); }}>
        <span>Reset progress</span>
        <span style={{ fontSize: 11, opacity: .7 }}>↻</span>
      </label>
      <div style={{ marginTop: 10, fontSize: 11, opacity: .6, lineHeight: 1.4 }}>
        ← → keys to navigate. Click screen thumbs below phone to jump.
      </div>
    </div>
  );
}

Object.assign(window, { App, PhoneChrome, FlowView, CanvasView });
