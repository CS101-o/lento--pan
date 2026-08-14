export default function Details() {
  return (
    <>
      <div className="divider" style={{ backgroundImage: "url('/assets/images/divider-details.jpg')" }}>
        <div className="divider-scrim"></div>
        <span className="ribbon">07 · Montaj Detayları</span>
      </div>

      <section id="details" className="page dark-bg">
        <div className="sec-head fade">
          <h2>Bir duvar nasıl bir araya gelir.</h2>
          <p>Her açıklıkta tekrarlanan dört parça.</p>
        </div>
        <div className="fixing-wrap fade">
          <div className="detail-list">
            <div className="detail-item">
              <span className="num">1</span>
              <div><h4>Lentopan® paneli</h4><p>60 × 120 cm, hafif çelik profile yerleştirilir.</p></div>
            </div>
            <div className="detail-item">
              <span className="num">2</span>
              <div><h4>Hafif çelik profil</h4><p>Duvar hattı boyunca her paneli taşır ve hizalar.</p></div>
            </div>
            <div className="detail-item">
              <span className="num">3</span>
              <div><h4>PU köpük</h4><p>Her panelin arkasındaki ince şerit, panelleri komşusuna bağlar.</p></div>
            </div>
            <div className="detail-item">
              <span className="num">4</span>
              <div><h4>Sabitleme vidası</h4><p>Trapez vidalar panelleri profile sabitler, en fazla 600 mm arayla.</p></div>
            </div>
          </div>
          <img className="fixing-visual" src="/assets/images/fixing-visual.jpg" alt="Kapı ve pencere açıklıkları olan bir Lentopan duvar köşe montajının 3D render görüntüsü" loading="lazy" />
        </div>
      </section>
    </>
  );
}
