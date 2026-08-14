const FAQS = [
  {
    q: 'Lentopan® hangi ölçülerde üretiliyor?',
    a: 'Duvarın ihtiyaç duyduğu yalıtım ve yangın performansına göre 3 cm ile 20 cm arasında kalınlıklarda üretilen standart 60 × 120 cm levha.',
  },
  {
    q: 'Bina su geçirmez hale gelmeden şantiyede ıslanabilir mi?',
    a: 'Evet. Lentopan® buhar geçirgendir, sudan zarar görmez ve küf oluşumunu teşvik etmez — bu yüzden bina kabuğu kapatılmadan önce monte edilebilir.',
  },
  {
    q: 'Panelin üzerine doğrudan hangi kaplamalar uygulanabilir?',
    a: 'Sıva (file kaplı, boyalı veya çıplak), alçıpan, fiber çimento ve seramik kaplamaların tamamı doğrudan panel yüzeyine uygulanmıştır.',
  },
  {
    q: 'Sahada nasıl monte ediliyor?',
    a: 'Paneller hafif çelik bir profile yerleştirilir, derzlerde ince bir PU köpük şeridiyle birbirine bağlanır ve en fazla 600 mm arayla trapez vidalarla profile sabitlenir.',
  },
  {
    q: 'Gerçekte ne kadar işçilik süresi kazandırıyor?',
    a: 'Teknik katalogda referans verilen zaman-hareket etüdleri, geleneksel blok-sıva veya çelik konstrüksiyon-levha sistemlerine kıyasla montaj işçiliğinin %65\'ten fazla azaldığını gösteriyor.',
  },
  {
    q: 'Kullanım ömrü sonunda ne oluyor?',
    a: 'Tek malzemeli, hepsi bir arada bir panel olduğu için sahadaki atık minimaldir ve kesim artıkları geri dönüştürülebilir. Kullanım ömrü sonunda panelin kendisi sıfır atıkla yeni üretime geri dönüştürülebilir.',
  },
  {
    q: 'İçinden tesisat geçirilebilir mi?',
    a: 'Evet — mekanik, elektrik ve sıhhi tesisat hatları proje tasarımına göre şantiye öncesinde hazırlanabilir veya sahada panele işlenebilir.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="page light-bg">
      <div className="sec-head fade">
        <span className="ribbon">08 · SSS</span>
        <h2>Şartname hazırlamadan önce.</h2>
      </div>
      <div className="fade" style={{ maxWidth: '76ch' }}>
        {FAQS.map((item, i) => (
          <details className="faq-item" key={item.q} open={i === 0}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
