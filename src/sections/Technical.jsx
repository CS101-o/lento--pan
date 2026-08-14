export default function Technical() {
  return (
    <section id="technical" className="page light-bg">
      <div className="sec-head fade">
        <span className="ribbon">04 · Technical Data</span>
        <h2>Sade Lentopan® — full spec.</h2>
        <p>Figures for the plain, uncoated board. Faced variants add the coating thickness on top.</p>
      </div>
      <div className="spec-wrap fade">
        <table className="spec">
          <tbody>
            <tr><td>Panel width</td><td>60 cm</td></tr>
            <tr><td>Panel length</td><td>120 cm</td></tr>
            <tr><td>Panel thickness</td><td>3 – 20 cm</td></tr>
            <tr><td>Density</td><td>330 – 350 kg/m³</td></tr>
            <tr><td>Fire reaction class</td><td>A1</td></tr>
            <tr><td>Fire resistance duration</td><td>240 min</td></tr>
            <tr><td>Thermal conductivity (λ)</td><td>0.072 W/(mK)</td></tr>
            <tr><td>Sound insulation</td><td>22 – 25 dB</td></tr>
            <tr><td>Water vapour permeability (µ)</td><td>5 / 10</td></tr>
          </tbody>
        </table>
        <div className="tech-side">
          <img src="/assets/images/technical-frame.jpg" alt="Close-up of a Lentopan panel fixed into a light steel frame" loading="lazy" />
          <div className="spec-note">
            Lentopan® must be installed to full technical specification and guidance for these figures to hold. Any change to standard details without prior review may affect performance and sits outside the performance warranty — speak to the technical team before deviating.
          </div>
        </div>
      </div>
    </section>
  );
}
