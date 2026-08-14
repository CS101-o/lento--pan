export default function Products() {
  return (
    <>
      <div className="divider" style={{ backgroundImage: "url('/assets/images/divider-products.jpg')" }}>
        <div className="divider-scrim"></div>
        <span className="ribbon">02 · Product Types</span>
      </div>

      <section id="products" className="page dark-bg grain">
        <div className="sec-head fade">
          <h2>Three faces, one core.</h2>
          <p>Every Lentopan® board shares the same EPS-granule lightweight concrete core. What differs is what's already on the surface when it arrives.</p>
        </div>
        <div className="prod-grid">
          <div className="prod-card fade">
            <div className="glow"></div>
            <img src="/assets/images/product-plain.webp" alt="Sade Lentopan panel, uncoated on both faces" loading="lazy" />
            <span className="tag">Sade Lentopan®</span>
            <h3>Plain, both faces</h3>
            <p>Uncoated on both sides. The base board for sites applying render, tiling, or their own cladding system directly.</p>
          </div>
          <div className="prod-card fade">
            <div className="glow"></div>
            <img src="/assets/images/product-plasterboard.webp" alt="Lentopan panel with plasterboard bonded to one face" loading="lazy" />
            <span className="tag">Tek Yüzey Alçıpan</span>
            <h3>Plasterboard, one face</h3>
            <p>9&nbsp;mm plasterboard factory-bonded to one side — ready for taping, skim and paint with no secondary lining.</p>
          </div>
          <div className="prod-card fade">
            <div className="glow"></div>
            <img src="/assets/images/product-fibercement.webp" alt="Lentopan panel with fibre-cement bonded to one face" loading="lazy" />
            <span className="tag">Tek Yüzey Fiber-Cement</span>
            <h3>Fibre-cement, one face</h3>
            <p>6&nbsp;mm or 8&nbsp;mm fibre-cement bonded to one side, for exposed, wet-area or fire-line finishes.</p>
          </div>
        </div>
      </section>
    </>
  );
}
