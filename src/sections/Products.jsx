export default function Products() {
  return (
    <>
      <div className="divider" style={{ backgroundImage: "url('/assets/images/divider-products.jpg')" }}>
        <div className="divider-scrim"></div>
        <span className="ribbon">02 · Ürün Tipleri</span>
      </div>

      <section id="products" className="page dark-bg grain">
        <div className="sec-head fade">
          <h2>Üç yüzey, tek çekirdek.</h2>
          <p>Her Lentopan® paneli aynı EPS-granül hafif beton çekirdeğe sahiptir. Farklı olan, panel geldiğinde yüzeyinde zaten bulunan kaplamadır.</p>
        </div>
        <div className="prod-grid">
          <div className="prod-card fade">
            <div className="glow"></div>
            <img src="/assets/images/product-plain.webp" alt="Her iki yüzü de kaplamasız Sade Lentopan paneli" loading="lazy" />
            <span className="tag">Sade Lentopan®</span>
            <h3>Sade, her iki yüzey</h3>
            <p>Her iki tarafı da kaplamasızdır. Doğrudan sıva, seramik veya kendi kaplama sistemini uygulayan şantiyeler için temel paneldir.</p>
          </div>
          <div className="prod-card fade">
            <div className="glow"></div>
            <img src="/assets/images/product-plasterboard.webp" alt="Bir yüzeyine alçıpan yapıştırılmış Lentopan paneli" loading="lazy" />
            <span className="tag">Tek Yüzey Alçıpan</span>
            <h3>Alçıpanlı, tek yüzey</h3>
            <p>Bir tarafına fabrikada yapıştırılmış 9&nbsp;mm alçıpan — ikinci bir kaplamaya gerek kalmadan bantlama, sıva ve boyaya hazır.</p>
          </div>
          <div className="prod-card fade">
            <div className="glow"></div>
            <img src="/assets/images/product-fibercement.webp" alt="Bir yüzeyine fiber çimento yapıştırılmış Lentopan paneli" loading="lazy" />
            <span className="tag">Tek Yüzey Fiber-Cement</span>
            <h3>Fiber çimentolu, tek yüzey</h3>
            <p>Bir tarafına yapıştırılmış 6&nbsp;mm veya 8&nbsp;mm fiber çimento; açık yüzey, ıslak hacim veya yangın hattı kaplamaları için.</p>
          </div>
        </div>
      </section>
    </>
  );
}
