export default function Technical() {
  return (
    <section id="technical" className="page light-bg">
      <div className="sec-head fade">
        <span className="ribbon">04 · Teknik Veriler</span>
        <h2>Sade Lentopan® — tam teknik özellikler.</h2>
        <p>Değerler sade, kaplamasız panel içindir. Kaplamalı versiyonlarda kaplama kalınlığı bu değerlere eklenir.</p>
      </div>
      <div className="spec-wrap fade">
        <table className="spec">
          <tbody>
            <tr><td>Panel genişliği</td><td>60 cm</td></tr>
            <tr><td>Panel uzunluğu</td><td>120 cm</td></tr>
            <tr><td>Panel kalınlığı</td><td>3 – 20 cm</td></tr>
            <tr><td>Yoğunluk</td><td>330 – 350 kg/m³</td></tr>
            <tr><td>Yangın reaksiyon sınıfı</td><td>A1</td></tr>
            <tr><td>Yangın dayanım süresi</td><td>240 dk</td></tr>
            <tr><td>Isı iletkenliği (λ)</td><td>0,072 W/(mK)</td></tr>
            <tr><td>Ses yalıtımı</td><td>22 – 25 dB</td></tr>
            <tr><td>Su buharı geçirgenliği (µ)</td><td>5 / 10</td></tr>
          </tbody>
        </table>
        <div className="tech-side">
          <img src="/assets/images/technical-frame.jpg" alt="Hafif çelik profile sabitlenmiş bir Lentopan panelin yakın çekimi" loading="lazy" />
          <div className="spec-note">
            Bu değerlerin geçerli olması için Lentopan® tam teknik şartnameye ve kılavuza uygun monte edilmelidir. Standart detaylarda ön inceleme yapılmadan yapılacak herhangi bir değişiklik performansı etkileyebilir ve performans garantisi kapsamı dışında kalır — sapmadan önce teknik ekiple görüşün.
          </div>
        </div>
      </div>
    </section>
  );
}
