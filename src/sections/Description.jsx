export default function Description() {
  return (
    <section id="description" className="page light-bg">
      <div className="sec-head fade">
        <span className="ribbon">03 · Description</span>
        <h2>Why teams switch to it.</h2>
      </div>
      <div className="app-grid fade">
        <div className="app-col">
          <h3>The board itself</h3>
          <ul style={{ border: 'none' }}>
            <li>All-in-one insulation, acoustic and A1 fire-rated core</li>
            <li>Vapour-permeable — dries out rather than trapping moisture</li>
            <li>Doesn't promote mould, even if wet before the building is watertight</li>
            <li>Suitable for pre-build, Cat A and Cat B fit-outs</li>
            <li>Standard 60 × 120&nbsp;cm sheet, 3–20&nbsp;cm thickness on request</li>
            <li>MEP routing pre-formed off-site or cut on-site to suit</li>
          </ul>
        </div>
        <div className="app-col">
          <h3>Why it's fitted this way</h3>
          <ul style={{ border: 'none' }}>
            <li>Joints bonded with a light bead of PU foam, fixed with trapezoidal screws</li>
            <li>Any direct finish follows — render, plasterboard, fibre-cement</li>
            <li>Fewer wall build-ups and components to manage on site</li>
            <li>Fewer site visits, simpler project sequencing</li>
            <li>Single-material board recycles fully at end of service life</li>
            <li>A sustainable alternative to brick, aircrete block and similar systems</li>
          </ul>
        </div>
      </div>
      <div className="finish-gallery fade">
        <h3>Finishes applied directly to the board</h3>
        <div className="finish-grid">
          <figure>
            <img src="/assets/images/finish-render-cladding.jpg" alt="Fibre-mesh render exterior cladding finish on Lentopan wall" loading="lazy" />
            <figcaption>Fibre-mesh render — exterior cladding</figcaption>
          </figure>
          <figure>
            <img src="/assets/images/finish-render-painted.jpg" alt="Fibre-mesh render finished with paint on Lentopan wall" loading="lazy" />
            <figcaption>Fibre-mesh render — painted finish</figcaption>
          </figure>
          <figure>
            <img src="/assets/images/finish-fibercement-exposed.jpg" alt="Exposed-joint fibre-cement cladding on Lentopan wall in a garage setting" loading="lazy" />
            <figcaption>Exposed-joint fibre-cement / plasterboard</figcaption>
          </figure>
          <figure>
            <img src="/assets/images/finish-tiling.jpg" alt="Ceramic tiling finish on Lentopan wall in a kitchen" loading="lazy" />
            <figcaption>Ceramic tiling</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
