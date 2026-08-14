export default function Contact() {
  return (
    <section id="contact" className="page light-bg">
      <div className="sec-head fade">
        <span className="ribbon">06 · İletişim</span>
        <h2>Teknik ekiple görüşün.</h2>
      </div>
      <div className="contact-grid fade">
        <div className="contact-card">
          <h3>Birleşik Krallık</h3>
          <div className="line"><a href="mailto:info@lentopan.co.uk">info@lentopan.co.uk</a></div>
          <div className="line"><a href="tel:+447471407929">+44 7471 407929</a></div>
          <div className="line addr">16 Tarleton Street, M13 9BS<br />Ardwick / Manchester</div>
        </div>
        <div className="contact-card">
          <h3>Türkiye — Fabrika</h3>
          <div className="line"><a href="mailto:info@lentopan.com.tr">info@lentopan.com.tr</a></div>
          <div className="line">
            <a href="tel:+902124364555">+90 212 436 4 555</a> &nbsp;/&nbsp; <a href="tel:+905317268932">+90 531 726 89 32</a>
          </div>
          <div className="line addr">Kaleiçi Mahallesi Gökçeali Caddesi No: 39/1<br />Çatalca / İstanbul</div>
        </div>
      </div>
    </section>
  );
}
