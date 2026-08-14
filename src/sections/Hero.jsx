export default function Hero() {
  return (
    <>
      <section id="hero" className="hero-block">
        <div className="hero-photo"></div>
        <div className="hero-scrim"></div>
        <div className="hero-spacer"></div>
        <div className="hero-orange-band">
          <span className="eyebrow">GELİŞMİŞ DUVAR SİSTEMLERİ</span>
          <h1>İnşaatı dönüştüren, sürdürülebilir, fabrikada üretilen A1 yangın sınıfı duvar paneli.</h1>
        </div>
        <div className="hero-dark-band">
          <span>Lentopan®, LENTOSAN A.Ş.'nin tescilli ürünüdür.</span>
          <span className="scroll-cue">KAYDIRIN ↓</span>
        </div>
      </section>

      <div className="stats-strip">
        <div className="stat"><b>A1</b><span>Yangın reaksiyon sınıfı</span></div>
        <div className="stat"><b>%65+</b><span>Daha az montaj işçiliği</span></div>
        <div className="stat"><b>240dk</b><span>Yangın dayanımı</span></div>
        <div className="stat"><b>3–20cm</b><span>Kalınlık aralığı</span></div>
      </div>
    </>
  );
}
