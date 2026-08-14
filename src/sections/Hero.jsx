export default function Hero() {
  return (
    <>
      <section id="hero" className="hero-block">
        <div className="hero-photo"></div>
        <div className="hero-scrim"></div>
        <div className="hero-spacer"></div>
        <div className="hero-orange-band">
          <span className="eyebrow">ADVANCED WALL SYSTEMS</span>
          <h1>The sustainable, pre-built, A1 fire-rated wall board transforming construction.</h1>
        </div>
        <div className="hero-dark-band">
          <span>Lentopan® is a registered product of LENTOSAN A.Ş.</span>
          <span className="scroll-cue">SCROLL ↓</span>
        </div>
      </section>

      <div className="stats-strip">
        <div className="stat"><b>A1</b><span>Fire reaction class</span></div>
        <div className="stat"><b>65%+</b><span>Less install labour</span></div>
        <div className="stat"><b>240min</b><span>Fire resistance</span></div>
        <div className="stat"><b>3–20cm</b><span>Thickness range</span></div>
      </div>
    </>
  );
}
