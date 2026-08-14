export default function Description() {
  return (
    <section id="description" className="page light-bg">
      <div className="sec-head fade">
        <span className="ribbon">03 · Açıklama</span>
        <h2>Ekiplerin neden tercih ettiği.</h2>
      </div>
      <div className="app-grid fade">
        <div className="app-col">
          <h3>Panelin kendisi</h3>
          <ul style={{ border: 'none' }}>
            <li>Hepsi bir arada yalıtım, akustik ve A1 yangın sınıfı çekirdek</li>
            <li>Buhar geçirgen — nemi hapsetmek yerine kurumasını sağlar</li>
            <li>Bina su geçirmez hale gelmeden önce ıslansa bile küf oluşumunu desteklemez</li>
            <li>Ön yapım, Cat A ve Cat B iç mekân uygulamaları için uygundur</li>
            <li>Standart 60 × 120&nbsp;cm levha, talep üzerine 3–20&nbsp;cm kalınlık</li>
            <li>Mekanik/elektrik/tesisat geçişleri şantiye öncesi hazırlanabilir veya sahada kesilebilir</li>
          </ul>
        </div>
        <div className="app-col">
          <h3>Neden bu şekilde monte edilir</h3>
          <ul style={{ border: 'none' }}>
            <li>Derzler ince bir PU köpük şeridiyle birleştirilir, trapez vidalarla sabitlenir</li>
            <li>Ardından doğrudan herhangi bir kaplama uygulanabilir — sıva, alçıpan, fiber çimento</li>
            <li>Sahada yönetilmesi gereken daha az duvar katmanı ve bileşen</li>
            <li>Daha az şantiye ziyareti, daha basit proje planlaması</li>
            <li>Tek malzemeli panel, kullanım ömrü sonunda tamamen geri dönüştürülebilir</li>
            <li>Tuğla, gazbeton blok ve benzeri sistemlere sürdürülebilir bir alternatif</li>
          </ul>
        </div>
      </div>
      <div className="finish-gallery fade">
        <h3>Doğrudan panel üzerine uygulanan yüzey kaplamaları</h3>
        <div className="finish-grid">
          <figure>
            <img src="/assets/images/finish-render-cladding.jpg" alt="Lentopan duvarda fiber file sıva dış cephe kaplaması" loading="lazy" />
            <figcaption>Fiber file sıva — dış cephe kaplaması</figcaption>
          </figure>
          <figure>
            <img src="/assets/images/finish-render-painted.jpg" alt="Lentopan duvarda boyalı fiber file sıva kaplaması" loading="lazy" />
            <figcaption>Fiber file sıva — boyalı kaplama</figcaption>
          </figure>
          <figure>
            <img src="/assets/images/finish-fibercement-exposed.jpg" alt="Garaj ortamında Lentopan duvarda açık derzli fiber çimento kaplama" loading="lazy" />
            <figcaption>Açık derzli fiber çimento / alçıpan</figcaption>
          </figure>
          <figure>
            <img src="/assets/images/finish-tiling.jpg" alt="Mutfakta Lentopan duvarda seramik kaplama" loading="lazy" />
            <figcaption>Seramik kaplama</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
