export default function Details() {
  return (
    <>
      <div className="divider" style={{ backgroundImage: "url('/assets/images/divider-details.jpg')" }}>
        <div className="divider-scrim"></div>
        <span className="ribbon">07 · Fixing Details</span>
      </div>

      <section id="details" className="page dark-bg">
        <div className="sec-head fade">
          <h2>How a wall goes together.</h2>
          <p>Four parts, repeated across every opening.</p>
        </div>
        <div className="fixing-wrap fade">
          <div className="detail-list">
            <div className="detail-item">
              <span className="num">1</span>
              <div><h4>Lentopan® board</h4><p>60 × 120 cm, set into the light-gauge frame.</p></div>
            </div>
            <div className="detail-item">
              <span className="num">2</span>
              <div><h4>Light steel frame</h4><p>Carries and aligns each board within the wall run.</p></div>
            </div>
            <div className="detail-item">
              <span className="num">3</span>
              <div><h4>PU foam</h4><p>A light bead behind each board bonds it to its neighbour.</p></div>
            </div>
            <div className="detail-item">
              <span className="num">4</span>
              <div><h4>Fixing screw</h4><p>Trapezoidal screws set boards to the frame, max. 600 mm apart.</p></div>
            </div>
          </div>
          <img className="fixing-visual" src="/assets/images/fixing-visual.jpg" alt="3D render of a Lentopan wall corner assembly with door and window openings" loading="lazy" />
        </div>
      </section>
    </>
  );
}
